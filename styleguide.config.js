const path = require("path");

module.exports = {
  title: "Styleguidist",
  components: "src/app/components/**/*.{js,jsx,ts,tsx}",
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
    [
      // Parser options
      { shouldExtractLiteralValuesFromEnum: true },
    ],
  ).parse,
  require: [
    path.join(__dirname, "./src/external/spectre/dist/spectre.css"),
    path.join(__dirname, "./src/external/spectre/dist/spectre-icons.css"),
    path.join(__dirname, "./src/external/spectre/dist/spectre-exp.css"),
  ],
};