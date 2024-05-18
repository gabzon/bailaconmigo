/** @type {import('tailwindcss').Config} */
import { extend } from 'dayjs'

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {
			colors:{
				"light": "#f5f5f5",
				"dark": "#171717",
				"brand": "#FFD700",
				"brandHover": "#fbbf24",
				"accent": "#FFD700",
				"secondary": "#e7cc7e",
				"danger": "#dc2626",
				"success": "#16a34a",
				"warning": "#f59e0b",
				"info": "#2563eb",


				"facebook": "#1877F2",
				"twitter": "#1DA1F2",
				"instagram": "#E4405F",
				"LinkedIn": "#0A66C2",
				"YouTube": "#FF0000",
				"Snapchat": "#FFFC00",
				"Pinterest": "#E60023",
				"WhatsApp": "#25D366",
				"TikTok": "#010101",
				"Reddit": "#FF4500",
				"Tumblr": "#36465D",
				"Medium": "#00AB6C",
				"GitHub": "#181717",
			}
		},
	},
	plugins: [
		require('preline/plugin'),
	],
}

// brand
// brandHover
// accent
// accentHover

// primary
// secondary
// outlines

// (Black), #69C9D0 (Turquoise), #EE1D52 (Red)