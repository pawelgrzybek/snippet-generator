module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
};
