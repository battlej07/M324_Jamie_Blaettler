// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "module" },
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      eqeqeq: "error",
    },
  },
];
