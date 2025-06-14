
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Romantic color palette
				blush: {
					50: '#fef7f7',
					100: '#feeaea',
					200: '#fbd1d1',
					300: '#f7aeae',
					400: '#f18080',
					500: '#e85555',
					600: '#d53838',
					700: '#b32727',
					800: '#942323',
					900: '#7c2424',
				},
				cream: {
					50: '#fffefa',
					100: '#fffceb',
					200: '#fff7d1',
					300: '#ffed9e',
					400: '#ffdd5e',
					500: '#ffcc33',
					600: '#f2b015',
					700: '#c7880a',
					800: '#a46b0b',
					900: '#87560c',
				},
				mauve: {
					50: '#faf9fb',
					100: '#f4f1f5',
					200: '#ebe5eb',
					300: '#ddd2dd',
					400: '#c8b7c8',
					500: '#b098b0',
					600: '#967996',
					700: '#7a617a',
					800: '#675167',
					900: '#564556',
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'typing': {
					'0%': { width: '0ch' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'currentColor' }
				},
				'float-in': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(30px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				'flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				'pulse-gentle': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				},
				'sparkle': {
					'0%, 100%': { 
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					}
				},
				'rain-drop': {
					'0%': { 
						transform: 'translateY(-100vh)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'dodge': {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-10px)' },
					'75%': { transform: 'translateX(10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 1.5s steps(30, end)',
				'blink': 'blink 1s infinite',
				'float-in': 'float-in 0.8s ease-out',
				'flip': 'flip 0.6s ease-in-out',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'sparkle': 'sparkle 1.5s ease-in-out infinite',
				'rain-drop': 'rain-drop 2s linear infinite',
				'dodge': 'dodge 0.4s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
