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
        // Story-themed colors
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
        "typewriter": {
          "0%": {
            width: "0",
            opacity: "0",
          },
          "1%": {
            opacity: "1",
          },
          "100%": {
            width: "100%",
            opacity: "1",
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
        // Enhanced Celebration Animations
        "celebration-flash": {
          "0%": { opacity: "0" },
          "10%": { opacity: "0.6" },
          "30%": { opacity: "0.3" },
          "100%": { opacity: "0" },
        },
        "expand-ring": {
          "0%": {
            transform: "scale(0)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(8)",
            opacity: "0",
          },
        },
        "heart-burst-wave1": {
          "0%": {
            transform: "translate(-50%, -50%) scale(0) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: `translate(calc(-50% + var(--random-x)), calc(-50% + var(--random-y))) scale(1.5) rotate(var(--rotation))`,
            opacity: "0",
          },
        },
        "heart-burst-wave2": {
          "0%": {
            transform: "translate(-50%, -50%) scale(0) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: `translate(calc(-50% + var(--random-x)), calc(-50% + var(--random-y))) scale(1.2) rotate(var(--rotation))`,
            opacity: "0",
          },
        },
        "heart-burst-wave3": {
          "0%": {
            transform: "translate(-50%, -50%) scale(0) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: `translate(calc(-50% + var(--random-x)), calc(-50% + var(--random-y))) scale(1.3) rotate(var(--rotation))`,
            opacity: "0",
          },
        },
        "heart-balloon": {
          "0%": {
            transform: "translateY(0) scale(0.8)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(-120vh) scale(1.2)",
            opacity: "0",
          },
        },
        "sparkle-cascade": {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(120vh) rotate(360deg)",
            opacity: "0",
          },
        },
        "firework-burst": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "celebration-modal": {
          "0%": {
            transform: "scale(0.3) translateY(100px)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.05) translateY(-10px)",
            opacity: "0.9",
          },
          "100%": {
            transform: "scale(1) translateY(0)",
            opacity: "1",
          },
        },
        "gentle-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
        "pulse-heart": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.6",
          },
        },
        "heart-pulse-gentle": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        "typewriter-fast": {
          "0%": {
            width: "0",
            opacity: "0",
          },
          "1%": {
            opacity: "1",
          },
          "100%": {
            width: "100%",
            opacity: "1",
          },
        },
        "typewriter-medium": {
          "0%": {
            width: "0",
            opacity: "0",
          },
          "1%": {
            opacity: "1",
          },
          "100%": {
            width: "100%",
            opacity: "1",
          },
        },
        "typewriter-slow": {
          "0%": {
            width: "0",
            opacity: "0",
          },
          "1%": {
            opacity: "1",
          },
          "100%": {
            width: "100%",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-in": "float-in 1s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 3s ease-in-out infinite",
        "sparkle": "sparkle 2s ease-in-out infinite",
        "steam-rise": "steam-rise 6s ease-out infinite",
        "typewriter": "typewriter 3s steps(20) forwards",
        "fade-in-delayed": "fade-in-delayed 0.8s ease-out forwards",
        // Enhanced Celebration Animations
        "celebration-flash": "celebration-flash 1s ease-out",
        "expand-ring": "expand-ring 1.5s ease-out",
        "heart-burst-wave1": "heart-burst-wave1 2s ease-out",
        "heart-burst-wave2": "heart-burst-wave2 2.2s ease-out",
        "heart-burst-wave3": "heart-burst-wave3 2.4s ease-out",
        "heart-balloon": "heart-balloon 4s ease-out",
        "sparkle-cascade": "sparkle-cascade 3s linear",
        "firework-burst": "firework-burst 1.5s ease-out",
        "celebration-modal": "celebration-modal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "gentle-shake": "gentle-shake 0.5s ease-in-out infinite",
        "pulse-heart": "pulse-heart 2s ease-in-out infinite",
        "heart-pulse-gentle": "heart-pulse-gentle 1.5s ease-in-out infinite",
        "typewriter-fast": "typewriter-fast 1.2s steps(15) forwards",
        "typewriter-medium": "typewriter-medium 1.8s steps(20) forwards",
        "typewriter-slow": "typewriter-slow 2.5s steps(25) forwards",
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
