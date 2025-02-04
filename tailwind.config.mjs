/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: {
					800: '#1e40af',
					900: '#1e3a8a',
				},
			},
			keyframes: {
				'slide-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-collapsible-content-height)' },
				},
				'fade-in': {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
			animation: {
				'slide-down': 'slide-down 300ms ease-out',
				'fade-in': 'fade-in 200ms ease-out',
			},
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar'),
	],
}

