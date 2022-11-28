/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  content: ['./src/components/Header.jsx', './src/pages/Home.jsx', './src/pages/SignIn.jsx', './src/pages/SignUp.jsx', './src/pages/Profile.jsx', './src/pages/Offers.jsx', './src/pages/ForgotPassword.jsx', './src/components/OAuth.jsx',  ] ,
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')],
}
