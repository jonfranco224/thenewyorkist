/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      sm: '600px',
      md: '850px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1220px', // Capping at 2xl
    },
    extend: {
      borderColor: {
        DEFAULT: '#9C9793', // Replace this with your desired default border color
      },
    },
    container: {
      screens: {
        sm: '600px',
        md: '825px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1220px', // Capping at 2xl
      },
    },
  },
	plugins: [],
}
