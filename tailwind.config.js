// See https://tailwindcss.com/docs/configuration for details
// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      bigm: `410px`,
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
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
        "2px": `2px`,
        "4px": `4px`,
        "1/2": `0.125rem`,
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
  },
  plugins: [require("@tailwindcss/ui")],
};
