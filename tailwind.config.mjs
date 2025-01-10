/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      borderColor: {
        DEFAULT: '#9C9793', // Replace this with your desired default border color
      },
    },
  },
	plugins: [],
}
