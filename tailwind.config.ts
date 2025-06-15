import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blush: {
          50: '#fef7f0',
          100: '#fce7d6',
          200: '#f8c8aa',
          300: '#f3a473',
          400: '#ec7c3c',
          500: '#e45f1a',
          600: '#d64510',
          700: '#b23510',
          800: '#8e2b15',
          900: '#732515',
        },
        cream: {
          50: '#fefcf3',
          100: '#fef7e0',
          200: '#fcedc1',
          300: '#f9dc96',
          400: '#f5c469',
          500: '#f2ac44',
          600: '#ea8f2a',
          700: '#c36f20',
          800: '#9c571e',
          900: '#7f481d',
        },
        mauve: {
          50: '#faf8fc',
          100: '#f3eef7',
          200: '#e9e0f0',
          300: '#d7c8e4',
          400: '#c0a8d4',
          500: '#a687c0',
          600: '#8d6ba8',
          700: '#765b8c',
          800: '#5f4c72',
          900: '#50425e',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "elegant-fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "simple-rain": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(100vh)",
            opacity: "0.2",
          },
        },
        "float-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "twinkle": {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scale(0.8)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
        "breathe": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.6",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
        },
        "pulse-gentle": {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        "sparkle": {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "scale(1.2) rotate(180deg)",
            opacity: "1",
          },
        },
        "steam-rise": {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.6",
          },
          "50%": {
            transform: "translateY(-50vh) scale(1.5)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translateY(-100vh) scale(2)",
            opacity: "0",
          },
        },
        "fade-in-delayed": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        // Enhanced celebration animations
        "celebration-shake-intense": {
          "0%, 100%": { transform: "translate(0)" },
          "1%": { transform: "translate(-2px, 2px)" },
          "2%": { transform: "translate(2px, -2px)" },
          "3%": { transform: "translate(-2px, -2px)" },
          "4%": { transform: "translate(2px, 2px)" },
          "5%": { transform: "translate(-1px, 1px)" },
          "6%": { transform: "translate(1px, -1px)" },
          "7%": { transform: "translate(0)" },
        },
        
        "celebration-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "25%": { opacity: "0.8" },
          "50%": { opacity: "0.6" },
          "75%": { opacity: "0.9" },
        },

        // Ring burst animations with perfect timing
        "ring-burst-immediate": {
          "0%": { transform: "scale(0.5)", opacity: "1" },
          "100%": { transform: "scale(15)", opacity: "0" },
        },
        "ring-burst-fast": {
          "0%": { transform: "scale(0.4)", opacity: "0.9" },
          "100%": { transform: "scale(18)", opacity: "0" },
        },
        "ring-burst-medium": {
          "0%": { transform: "scale(0.3)", opacity: "0.8" },
          "100%": { transform: "scale(22)", opacity: "0" },
        },
        "ring-burst-slow": {
          "0%": { transform: "scale(0.2)", opacity: "0.7" },
          "100%": { transform: "scale(26)", opacity: "0" },
        },
        "ring-burst-slowest": {
          "0%": { transform: "scale(0.1)", opacity: "0.6" },
          "100%": { transform: "scale(30)", opacity: "0" },
        },

        // Advanced heart burst animations with physics
        "heart-explosive-burst": {
          "0%": {
            transform: "translate(-50%, -50%) translate(0, 0) scale(0.5) rotate(0deg)",
            opacity: "1",
          },
          "15%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 0.8), calc(var(--start-y) * 0.8)) scale(1.3) rotate(45deg)",
            opacity: "1",
          },
          "40%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 2), calc(var(--start-y) * 2)) scale(1.1) rotate(90deg)",
            opacity: "1",
          },
          "70%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 3.2 + sin(var(--burst-angle)) * 30px), calc(var(--start-y) * 3.2 + cos(var(--burst-angle)) * 30px)) scale(0.9) rotate(135deg)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 4.5 + sin(var(--burst-angle)) * 50px), calc(var(--start-y) * 4.5 + cos(var(--burst-angle)) * 50px)) scale(0.3) rotate(180deg)",
            opacity: "0",
          },
        },

        "heart-wave-cascade": {
          "0%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.8)",
            opacity: "0.9",
          },
          "25%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 1.5), calc(var(--start-y) * 1.5)) scale(1.2)",
            opacity: "1",
          },
          "50%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 2.5), calc(var(--start-y) * 2.5 - 20px)) scale(1.1)",
            opacity: "1",
          },
          "75%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 3.5), calc(var(--start-y) * 3.5 - 10px)) scale(0.9)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 4.5), calc(var(--start-y) * 4.5)) scale(0.4)",
            opacity: "0",
          },
        },

        // Dancing sparkle hearts
        "heart-dance-twirl": {
          "0%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.6) rotate(0deg)",
            opacity: "0.8",
          },
          "25%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) + 20px), calc(var(--start-y) - 15px)) scale(1.1) rotate(90deg)",
            opacity: "1",
          },
          "50%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) - 15px), calc(var(--start-y) + 10px)) scale(0.9) rotate(180deg)",
            opacity: "1",
          },
          "75%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) + 10px), calc(var(--start-y) + 20px)) scale(1.2) rotate(270deg)",
            opacity: "0.9",
          },
          "100%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.3) rotate(360deg)",
            opacity: "0",
          },
        },

        "heart-dance-bounce": {
          "0%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.7)",
            opacity: "0.9",
          },
          "20%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), calc(var(--start-y) - 30px)) scale(1.3)",
            opacity: "1",
          },
          "40%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.8)",
            opacity: "1",
          },
          "60%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), calc(var(--start-y) - 15px)) scale(1.1)",
            opacity: "0.9",
          },
          "80%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.9)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), calc(var(--start-y) + 20px)) scale(0.4)",
            opacity: "0",
          },
        },

        "heart-dance-shimmer": {
          "0%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.8)",
            opacity: "0.7",
            filter: "brightness(1)",
          },
          "33%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) + 15px), calc(var(--start-y) - 10px)) scale(1.2)",
            opacity: "1",
            filter: "brightness(1.5)",
          },
          "66%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) - 10px), calc(var(--start-y) + 15px)) scale(1.1)",
            opacity: "1",
            filter: "brightness(1.3)",
          },
          "100%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.5)",
            opacity: "0",
            filter: "brightness(1)",
          },
        },

        // Ambient floating hearts
        "heart-ambient-gentle": {
          "0%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.9)",
            opacity: "0.6",
          },
          "50%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 1.2), calc(var(--start-y) - 150px)) scale(1.1)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) * 1.1), calc(var(--start-y) - 280px)) scale(0.6)",
            opacity: "0",
          },
        },

        "heart-ambient-dreamy": {
          "0%": {
            transform: "translate(-50%, -50%) translate(var(--start-x), var(--start-y)) scale(0.8)",
            opacity: "0.5",
          },
          "30%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) + 20px), calc(var(--start-y) - 80px)) scale(1.0)",
            opacity: "0.7",
          },
          "70%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) - 15px), calc(var(--start-y) - 180px)) scale(1.1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(-50%, -50%) translate(calc(var(--start-x) + 10px), calc(var(--start-y) - 300px)) scale(0.4)",
            opacity: "0",
          },
        },

        // Enhanced modal and UI animations
        "heart-mega-celebration": {
          "0%": { transform: "scale(1) rotate(0deg)", filter: "brightness(1)" },
          "25%": { transform: "scale(1.2) rotate(5deg)", filter: "brightness(1.3)" },
          "50%": { transform: "scale(1.1) rotate(-3deg)", filter: "brightness(1.5)" },
          "75%": { transform: "scale(1.15) rotate(2deg)", filter: "brightness(1.2)" },
          "100%": { transform: "scale(1) rotate(0deg)", filter: "brightness(1)" },
        },

        "heart-glow-intense": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },

        "heart-glow-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.95)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },

        "modal-breathe": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.95" },
          "50%": { transform: "scale(1.02)", opacity: "1" },
        },

        "text-shimmer": {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.2) drop-shadow(0 0 10px rgba(255, 20, 147, 0.5))" },
        },

        "bounce-enhanced": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "elegant-fade-up": "elegant-fade-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "simple-rain": "simple-rain 3s linear infinite",
        "float-in": "float-in 1s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 3s ease-in-out infinite",
        "sparkle": "sparkle 2s ease-in-out infinite",
        "steam-rise": "steam-rise 6s ease-out infinite",
        "fade-in-delayed": "fade-in-delayed 0.8s ease-out forwards",

        // Enhanced celebration animations
        "celebration-shake-intense": "celebration-shake-intense 1.2s ease-in-out",
        "celebration-pulse": "celebration-pulse 4s ease-in-out infinite",
        
        // Ring burst animations
        "ring-burst-immediate": "ring-burst-immediate 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ring-burst-fast": "ring-burst-fast 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ring-burst-medium": "ring-burst-medium 5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ring-burst-slow": "ring-burst-slow 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ring-burst-slowest": "ring-burst-slowest 7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        
        // Advanced heart animations
        "heart-explosive-burst": "heart-explosive-burst 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "heart-wave-cascade": "heart-wave-cascade 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        
        // Dancing sparkle hearts
        "heart-dance-twirl": "heart-dance-twirl 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "heart-dance-bounce": "heart-dance-bounce 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "heart-dance-shimmer": "heart-dance-shimmer 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        
        // Ambient floating
        "heart-ambient-gentle": "heart-ambient-gentle 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "heart-ambient-dreamy": "heart-ambient-dreamy 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        
        // Enhanced modal animations
        "heart-mega-celebration": "heart-mega-celebration 2.5s ease-in-out infinite",
        "heart-glow-intense": "heart-glow-intense 2s ease-in-out infinite",
        "heart-glow-pulse": "heart-glow-pulse 3s ease-in-out infinite",
        "modal-breathe": "modal-breathe 4s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "bounce-enhanced": "bounce-enhanced 1s infinite",
      },
      animationDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
