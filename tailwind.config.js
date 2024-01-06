/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#132043",
        title: " rgb(30 41 59)",
        secondary: "#CDF5FD",
        footer: "#001524",
        navbar: "#164863",
      },
    },
  },
  plugins: [],
};
