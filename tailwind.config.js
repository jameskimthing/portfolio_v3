/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				black: '#000814',
				'dark-blue': '#001d3d',
				blue: '#003566',
				'bright-yellow': '#ffd60a'
			},
			screens: {
				xs: '450px'
			}
		}
	},
	plugins: []
};
