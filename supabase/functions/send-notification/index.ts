// @ts-ignore: Deno types
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// Define types for notification results
type NotificationResult = {
  success: boolean;
  status?: number;
  response?: string;
  error?: string;
};

type NotificationResults = {
  email: NotificationResult | null;
  sms: NotificationResult | null;
};

function validateEnvVars() {
  const required = {
    RESEND_API_KEY: Deno.env.get("RESEND_API_KEY"),
    TWILIO_ACCOUNT_SID: Deno.env.get("TWILIO_ACCOUNT_SID"),
    TWILIO_AUTH_TOKEN: Deno.env.get("TWILIO_AUTH_TOKEN"),
    TWILIO_PHONE_NUMBER: Deno.env.get("TWILIO_PHONE_NUMBER"),
    SUPABASE_SERVICE_ROLE_KEY: Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
  };

  const missing = Object.entries(required)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    console.error("Missing required environment variables:", missing);
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }

  return required;
}

// --- ENV VARS ---
const {
  RESEND_API_KEY,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  SUPABASE_SERVICE_ROLE_KEY,
} = validateEnvVars();

// Testing email configuration - using Resend's testing domain
const EMAIL_FROM = "Our Almost Story <onboarding@resend.dev>";
const EMAIL_TO = "mtbrainshi@gmail.com";
const SMS_TO = "+919730251619";

// --- CORS WRAPPER ---
function withCORS(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Headers", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  return new Response(response.body, {
    status: response.status,
    headers
  });
}

serve(async (req) => {
  console.log("Function started. Checking environment variables...");
  
  // Handle preflight
  if (req.method === "OPTIONS") {
    return withCORS(new Response(null, { status: 204 }));
  }

  // Check Authorization
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.error("Missing or invalid Authorization header");
    return withCORS(new Response(JSON.stringify({
      code: 401,
      message: "Missing Authorization header"
    }), { status: 401 }));
  }

  try {
    console.log("Request headers:", Object.fromEntries(req.headers.entries()));
    const { session_id, response, message } = await req.json();
    console.log("Received request payload:", { session_id, response, message });

    let emailSubject: string, emailContent: string, smsContent: string;
    
    // Determine notification content based on type
    if (message && response === null) {
      // Personal message
      emailSubject = "New Message 💌";
      emailContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #9333ea; text-align: center; margin-bottom: 30px;">
            💌 You have a new message!
          </h2>
          <p><strong>Session ID:</strong> ${session_id}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            Sent from Our Almost Story
          </p>
        </div>
      `;
      smsContent = `New Message!\nSession: ${session_id}\nMessage: ${message}`;
    } else {
      // Yes/No response
      emailSubject = `New Response: ${response ? 'YES! 💖' : 'No 💔'}`;
      emailContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: ${response ? '#e11d48' : '#6b7280'}; text-align: center; margin-bottom: 30px;">
            ${response ? '🎉 You got a YES!' : '💔 They said no...'}
          </h2>
          <p><strong>Session ID:</strong> ${session_id}</p>
          <p><strong>Response:</strong> ${response ? 'YES! They want to go for coffee!' : 'No'}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          <p style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            Sent from Our Almost Story
          </p>
        </div>
      `;
      smsContent = `New Response!\nSession: ${session_id}\nResponse: ${response ? 'YES! 🎉' : 'No 💔'}${message ? '\nMessage: ' + message : ''}`;
    }

    const notificationResults: NotificationResults = {
      email: null,
      sms: null
    };

    // --- Send Email (Resend) ---
    try {
      console.log("Attempting to send email with Resend...");
      const emailPayload = {
        from: EMAIL_FROM,
        to: [EMAIL_TO],
        subject: emailSubject,
        html: emailContent,
        text: emailContent.replace(/<[^>]*>/g, '').trim()
      };
      console.log("Email payload:", emailPayload);

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(emailPayload)
      });

      const emailData = await emailRes.text();
      console.log("Resend API response:", {
        status: emailRes.status,
        headers: Object.fromEntries(emailRes.headers.entries()),
        body: emailData
      });

      notificationResults.email = {
        success: emailRes.ok,
        status: emailRes.status,
        response: emailData
      };

      if (!emailRes.ok) {
        throw new Error(`Resend API error: ${emailRes.status} - ${emailData}`);
      }
    } catch (err) {
      console.error("Email sending error:", {
        message: err.message,
        stack: err.stack
      });
      notificationResults.email = {
        success: false,
        error: err instanceof Error ? err.message : String(err)
      };
    }

    // --- Send SMS (Twilio) ---
    try {
      console.log("Attempting to send SMS with Twilio...");
      const smsParams = {
        From: TWILIO_PHONE_NUMBER,
        To: SMS_TO,
        Body: smsContent
      };
      console.log("SMS parameters:", smsParams);

      const smsRes = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
        {
          method: "POST",
          headers: {
            "Authorization": "Basic " + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(smsParams)
        }
      );

      const smsData = await smsRes.text();
      console.log("Twilio API response:", {
        status: smsRes.status,
        headers: Object.fromEntries(smsRes.headers.entries()),
        body: smsData
      });

      notificationResults.sms = {
        success: smsRes.ok,
        status: smsRes.status,
        response: smsData
      };

      if (!smsRes.ok) {
        throw new Error(`Twilio API error: ${smsRes.status} - ${smsData}`);
      }
    } catch (err) {
      console.error("SMS sending error:", {
        message: err.message,
        stack: err.stack
      });
      notificationResults.sms = {
        success: false,
        error: err instanceof Error ? err.message : String(err)
      };
    }

    // Return detailed results
    return withCORS(new Response(JSON.stringify({
      ok: notificationResults.email?.success || notificationResults.sms?.success,
      results: notificationResults
    }), { status: 200 }));

  } catch (e) {
    console.error("Function error:", {
      message: e instanceof Error ? e.message : String(e),
      stack: e instanceof Error ? e.stack : undefined
    });
    return withCORS(new Response(JSON.stringify({
      error: e instanceof Error ? e.message : String(e),
      details: e instanceof Error ? e.stack : undefined
    }), { status: 500 }));
  }
});