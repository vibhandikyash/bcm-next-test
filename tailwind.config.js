module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        17: "69px",
        22: "86px",
        26: "107px",
        27: "109px",
        30: "118px",
        70: "275px",
      },
      width: {
        84: "336px",
        160: "640px",
      },
      height: {
        84: "336px",
        160: "640px",
      },
      borderWidth: {
        13: "13px",
      },
      colors: {
        purple: {
          100: "#F8F2FF",
          300: "#DABDFF",
          500: "#B57BFF",
        },
        blue: {
          100: "#DBE3FE",
          150: "#CFD9FE",
          200: "#CCD5FA",
          250: "#6E8CFC",
          300: "#9EB3FD",
          500: "#3E66FB",
        },
        red: {
          300: "#FBCDCD",
          500: "#F03738",
        },
        green: {
          200: "#EBF9EB",
          300: "#9DE09D",
          500: "#3CC13B",
        },
        gray: {
          100: "#F0F0F1",
          150: "#C2C9D1",
          200: "#F6F6F7",
          300: "#B5B5B5",
          400: "#92979D",
        },
      },
    },
  },
  plugins: [],
};
