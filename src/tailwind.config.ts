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
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
						transform: 'translateY(30px) scale(0.95)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)' 
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
						opacity: '0.7',
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
						transform: 'translateY(-100vh) translateX(0)',
						opacity: '0.8'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '0.8'
					},
					'100%': { 
						transform: 'translateY(100vh) translateX(-20px)',
						opacity: '0'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					}
				},
				'lightning': {
					'0%, 90%, 100%': { opacity: '0' },
					'5%, 85%': { opacity: '0.8' }
				},

				// WORKING CONFETTI ANIMATIONS - Fixed Directions
				
				// Ring expansion - perfectly synced
				'ring-burst': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '0'
					}
				},

				// 8 Directional Heart Bursts - No CSS Variables
				'heart-burst-up': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-50%, -250px) scale(0.8)',
						opacity: '0'
					}
				},

				'heart-burst-up-right': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(150px, -200px) scale(0.8)',
						opacity: '0'
					}
				},

				'heart-burst-right': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(250px, -50%) scale(0.8)',
						opacity: '0'
					}
				},

				'heart-burst-down-right': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(150px, 150px) scale(0.8)',
						opacity: '0'
					}
				},

				'heart-burst-down': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-50%, 200px) scale(0.8)',
						opacity: '0'
					}
				},

				'heart-burst-down-left': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-200px, 150px) scale(0.8)',
						opacity: '0'
					}
				},

				'heart-burst-left': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-250px, -50%) scale(0.8)',
						opacity: '0'
					}
				},

				'heart-burst-up-left': {
					'0%': {
						transform: 'translate(-50%, -50%) scale(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translate(-50%, -50%) scale(1.2)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-200px, -200px) scale(0.8)',
						opacity: '0'
					}
				},

				// Background and modal effects - keep existing
				'celebration-pulse': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '0.7'
					}
				},

				'celebration-shake': {
					'0%, 100%': {
						transform: 'translate(0)'
					},
					'10%': {
						transform: 'translate(-2px, -2px)'
					},
					'20%': {
						transform: 'translate(2px, -2px)'
					},
					'30%': {
						transform: 'translate(-2px, 2px)'
					},
					'40%': {
						transform: 'translate(2px, 2px)'
					},
					'50%': {
						transform: 'translate(-2px, -2px)'
					},
					'60%': {
						transform: 'translate(2px, -2px)'
					},
					'70%': {
						transform: 'translate(-2px, 2px)'
					},
					'80%': {
						transform: 'translate(2px, 2px)'
					},
					'90%': {
						transform: 'translate(-2px, 0)'
					}
				},

				// ... keep existing code (modal-breathe, heart-mega-celebration, text-shimmer, heart-glow-intense, heart-glow-pulse, bounce-enhanced) the same
				'modal-breathe': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.02)'
					}
				},

				'heart-mega-celebration': {
					'0%': {
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': {
						transform: 'scale(1.3) rotate(180deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(360deg)'
					}
				},

				'text-shimmer': {
					'0%': {
						backgroundPosition: '-200% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				},

				'heart-glow-intense': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.1)'
					}
				},

				'heart-glow-pulse': {
					'0%, 100%': {
						opacity: '0.2',
						transform: 'scale(0.95)'
					},
					'50%': {
						opacity: '0.5',
						transform: 'scale(1.05)'
					}
				},

				'bounce-enhanced': {
					'0%, 20%, 53%, 80%, 100%': {
						transform: 'translate3d(0,0,0)'
					},
					'40%, 43%': {
						transform: 'translate3d(0,-15px,0)'
					},
					'70%': {
						transform: 'translate3d(0,-7px,0)'
					},
					'90%': {
						transform: 'translate3d(0,-2px,0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 1.5s steps(30, end)',
				'blink': 'blink 1s infinite',
				'float-in': 'float-in 1.2s ease-out',
				'flip': 'flip 0.6s ease-in-out',
				'pulse-gentle': 'pulse-gentle 4s ease-in-out infinite',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'rain-drop': 'rain-drop 1.2s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'lightning': 'lightning 4s ease-in-out infinite',

				// WORKING CONFETTI ANIMATIONS - Perfectly Synchronized
				'ring-burst': 'ring-burst 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				
				// All directional heart bursts
				'heart-burst-up': 'heart-burst-up 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'heart-burst-up-right': 'heart-burst-up-right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'heart-burst-right': 'heart-burst-right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'heart-burst-down-right': 'heart-burst-down-right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'heart-burst-down': 'heart-burst-down 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'heart-burst-down-left': 'heart-burst-down-left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'heart-burst-left': 'heart-burst-left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'heart-burst-up-left': 'heart-burst-up-left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',

				// Background effects - keep existing
				'celebration-pulse': 'celebration-pulse 2s ease-in-out infinite',
				'celebration-shake': 'celebration-shake 0.4s ease-in-out',
				'modal-breathe': 'modal-breathe 3s ease-in-out infinite',
				'heart-mega-celebration': 'heart-mega-celebration 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'text-shimmer': 'text-shimmer 2s linear infinite',
				'heart-glow-intense': 'heart-glow-intense 2s ease-in-out infinite',
				'heart-glow-pulse': 'heart-glow-pulse 1.5s ease-in-out infinite',
				'bounce-enhanced': 'bounce-enhanced 1s infinite'
			},
			boxShadow: {
				'3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
			},
			animationDelay: {
				'500': '500ms',
				'1000': '1000ms',
				'2000': '2000ms',
				'3000': '3000ms',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.animation-delay-500': {
					'animation-delay': '500ms',
				},
				'.animation-delay-1000': {
					'animation-delay': '1000ms',
				},
				'.animation-delay-2000': {
					'animation-delay': '2000ms',
				},
				'.animation-delay-3000': {
					'animation-delay': '3000ms',
				},
			};
			addUtilities(newUtilities);
		}
	],
} satisfies Config;
