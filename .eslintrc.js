module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: [
    "react-app",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["@typescript-eslint", "flowtype", "prettier", "react"],
  rules: {
    quotes: ["error", "backtick"],
    "react/jsx-sort-props": ["error"],
    "prettier/prettier": "error"
  }
};
