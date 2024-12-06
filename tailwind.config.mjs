/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Enable dark mode with class strategy
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#3B82F6', // Tailwind blue-500
					50: '#EBF5FF',
					100: '#DBEAFE',
					200: '#BFDBFE',
					300: '#93C5FD',
					400: '#60A5FA',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
					800: '#1E40AF',
					900: '#1E3A8A'
				}
			}
		},
	},
	plugins: [
		function({ addUtilities }) {
			const newUtilities = {
				// Hide scrollbar by default
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none'
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none'
				},
				// Thin scrollbar on hover
				'.hover-scrollbar:hover::-webkit-scrollbar': {
					width: '4px'
				},
				'.hover-scrollbar:hover::-webkit-scrollbar-track': {
					background: '#f1f1f1'
				},
				'.hover-scrollbar:hover::-webkit-scrollbar-thumb': {
					background: '#888',
					borderRadius: '2px'
				},
				'.hover-scrollbar:hover': {
					'scrollbar-width': 'thin',
					'-ms-overflow-style': 'auto'
				}
			}
			addUtilities(newUtilities)
		}
	],
	safelist: {
		pattern: [/^(bg-|text-|p-|m-|w-|h-|flex|grid|rounded|border|shadow|hover:)/]
	}
}
