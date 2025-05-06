/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/index.html", "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}", "./src/pages/**/*.{html,js,jsx}", "./src/shared/**/*.{html,js,jsx}",

  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#F9BC6E",

          "secondary": "#6b7280",

          "accent": "#e53283",

          "neutral": "#1B1A23",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#2A303C",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}