/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  safelist: [
    'dark',
    'light',
    'dark:bg-gray-900',
    'dark:text-white',
    'dark:text-gray-200',
    'dark:hover:text-gray-300',
    'dark:border-gray-800',
    'dark:text-gray-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
