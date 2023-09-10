/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: '"Palatino Linotype", Palatino, "Gentium Plus", serif',
      display: '"Palatino Linotype", Palatino, "Gentium Plus", serif',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: '"Palatino Linotype", Palatino, "Gentium Plus", serif',
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
