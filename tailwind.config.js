/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-red-.*/,
    }
  ],
  plugins: [],
}