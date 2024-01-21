/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vitepress/theme/components/*.{js,ts,vue}",
    "./docs/**/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

