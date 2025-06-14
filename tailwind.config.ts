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
				'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
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
				'breathe': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'scale(1.1)',
						opacity: '1'
					}
				},
				'twinkle': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'scale(0.8)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'sparkle-drift': {
					'0%': { 
						transform: 'translateY(0) translateX(0) scale(0)',
						opacity: '0'
					},
					'20%': {
						opacity: '1'
					},
					'80%': {
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(-30px) translateX(20px) scale(1)',
						opacity: '0'
					}
				},
				'petal-fall': {
					'0%': { 
						transform: 'translateY(-20px) rotate(0deg)',
						opacity: '0.8'
					},
					'100%': { 
						transform: 'translateY(20px) rotate(180deg)',
						opacity: '0'
					}
				},
				'matrix-fall': {
					'0%': { 
						transform: 'translateY(-20px)',
						opacity: '0'
					},
					'20%': {
						opacity: '1'
					},
					'80%': {
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'steam': {
					'0%': { 
						transform: 'translateY(0) scale(1)',
						opacity: '0.6'
					},
					'100%': { 
						transform: 'translateY(-30px) scale(1.5)',
						opacity: '0'
					}
				},
				'cloud-drift': {
					'0%': { transform: 'translateX(-20px)' },
					'100%': { transform: 'translateX(20px)' }
				},
				'enhanced-rain': {
					'0%': { 
						transform: 'translateY(-20px)',
						opacity: '0.9'
					},
					'100%': { 
						transform: 'translateY(calc(100vh + 20px))',
						opacity: '0.3'
					}
				},
				'lightning': {
					'0%, 90%, 100%': { opacity: '0' },
					'5%, 85%': { opacity: '0.8' }
				},
				'ripple': {
					'0%': { 
						transform: 'scale(1)',
						opacity: '0.3'
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '0.5'
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '0.3'
					}
				},
				'steam-rise': {
					'0%': { 
						transform: 'translateY(0) scale(0.8)',
						opacity: '0.7'
					},
					'100%': { 
						transform: 'translateY(-100px) scale(1.2)',
						opacity: '0'
					}
				},
				'love-burst': {
					'0%': { 
						transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
						opacity: '1'
					},
					'15%': {
						transform: 'translate(-50%, -50%) scale(1) rotate(45deg)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translate(calc(-50% + var(--random-x)), calc(-50% + var(--random-y))) scale(0.7) rotate(180deg)',
						opacity: '0'
					}
				},
				'gentle-sparkle': {
					'0%': { 
						transform: 'scale(0)',
						opacity: '0'
					},
					'30%': { 
						transform: 'scale(1)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scale(0.8)',
						opacity: '0'
					}
				},
				'gentle-float': {
					'0%': { 
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(180deg)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(0px) rotate(360deg)',
						opacity: '0.8'
					}
				},
				'gentle-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)'
					},
					'50%': { 
						transform: 'scale(1.1)'
					}
				},
				'scale-celebration': {
					'0%': { 
						transform: 'scale(0) rotate(-5deg)',
						opacity: '0'
					},
					'50%': { 
						transform: 'scale(1.05) rotate(2deg)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					}
				},
				'typewriter': {
					'0%': { width: '0ch' },
					'100%': { width: '12ch' }
				},
				'fade-in-delayed': {
					'0%, 60%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'color-shift': {
					'0%': { opacity: '0' },
					'50%': { opacity: '0.3' },
					'100%': { opacity: '0.1' }
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
				'breathe': 'breathe 6s ease-in-out infinite',
				'twinkle': 'twinkle 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'sparkle-drift': 'sparkle-drift 4s ease-out infinite',
				'petal-fall': 'petal-fall 8s ease-in-out infinite',
				'matrix-fall': 'matrix-fall 4s linear infinite',
				'steam': 'steam 3s ease-out infinite',
				'cloud-drift': 'cloud-drift 10s ease-in-out infinite alternate',
				'enhanced-rain': 'enhanced-rain 1s linear infinite',
				'lightning': 'lightning 4s ease-in-out infinite',
				'ripple': 'ripple 3s ease-in-out infinite',
				'steam-rise': 'steam-rise 4s ease-out infinite',
				'love-burst': 'love-burst 2s ease-out forwards',
				'gentle-sparkle': 'gentle-sparkle 1.5s ease-out forwards',
				'gentle-float': 'gentle-float 4s ease-in-out infinite',
				'gentle-pulse': 'gentle-pulse 1.5s ease-in-out infinite',
				'scale-celebration': 'scale-celebration 0.8s ease-out forwards',
				'typewriter': 'typewriter 2s steps(12, end) forwards',
				'fade-in-delayed': 'fade-in-delayed 3s ease-out forwards',
				'color-shift': 'color-shift 3.5s ease-in-out forwards'
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
				'.perspective-1000': {
					'perspective': '1000px',
				},
				'.preserve-3d': {
					'transform-style': 'preserve-3d',
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.rotate-y-180': {
					'transform': 'rotateY(180deg)',
				},
			};
			addUtilities(newUtilities);
		}
	],
} satisfies Config;
