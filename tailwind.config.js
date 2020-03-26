// See https://tailwindcss.com/docs/configuration for details
// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      bigm: `410px`,
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": `1600px`,
    },
    extend: {
      fontFamily: {
        din: [`din-2014`, ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gala: `#E50074`,
        wispo: `#4BB9EF`,
        lustrumweek: `#2D2C86`,
        theater: `#A41E34`,
        piekweek: `#2BB198`,
      },
      fontSize: {
        "7xl": `5rem`,
        "8xl": `6rem`,
        title: `7rem`,
      },
      spacing: {
        "2px": "2px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
      },
      width: {
        "1/7": `14.2857143%`,
      },
      maxHeight: {
        "25vw": `25vw`,
        "50vw": `50vw`,
        "75vw": `75vw`,
        "100vw": `100vw`,
      },
      maxWidth: {
        "25vw": `25vw`,
        "50vw": `50vw`,
        "75vw": `75vw`,
        "100vw": `100vw`,
      },
      zIndex: {
        "-10": `-10`,
      },
      opacity: {
        "10": ".1",
        "20": ".2",
        "30": ".3",
        "35": ".35",
        "40": ".4",
        "60": ".6",
        "70": ".7",
        "80": ".8",
        "90": ".9",
        "95": ".95",
      },
      borderWidth: {
        "3": "3px",
        "6": "6px",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "hover", "focus", "group-hover"],
    padding: ["responsive", "hover", "focus", "group-hover"],
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/ui")],
};
