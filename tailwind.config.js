module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        "vector-5": 'url("/assets/Vector5.svg")',
        "dotted-lines": 'url("/assets/DottedLines.svg")',
      },
    },
  },
  plugins: [],
  mode: "jit",
};
