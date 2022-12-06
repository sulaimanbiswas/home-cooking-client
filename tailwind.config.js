/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        homeCooking: {
          primary: "#eb0029",
          secondary: "#68ff75",
          accent: "#e740ed",
          neutral: "#161722",
          "base-100": "#E6E3E8",
          info: "#28A7E2",
          success: "#126932",
          warning: "#FCB131",
          error: "#EE403A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
