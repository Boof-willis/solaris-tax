/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			serif: [
  				'Playfair Display',
  				'serif'
  			]
  		},
  		colors: {
  			charcoal: '#1A1A1A',
  			cream: '#F7F5F0',
  			beige: '#E8E0D0',
  			warm: '#F0EBE0',
  			gold: {
  				light: '#D4C4A8',
  				medium: '#C4A866',
  				rich: '#B8954F'
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration, 30s) linear infinite',
  			'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite'
  		},
  		keyframes: {
  			marquee: {
  				to: {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'marquee-reverse': {
  				from: {
  					transform: 'translateX(-50%)'
  				},
  				to: {
  					transform: 'translateX(0)'
  				}
  			}
  		}
  	}
  },
  plugins: [],
};
