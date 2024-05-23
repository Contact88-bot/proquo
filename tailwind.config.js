module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      strokeWidth: {
        '5': '5px',
      },
      fontFamily: {
        "arvo": ["Arvo", "serif"],
        "fira": ["Fira Code", "monospace"],
      },
    },
  },
    plugins: [require("daisyui")],
}
