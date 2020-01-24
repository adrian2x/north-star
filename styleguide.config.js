const path = require("path");

module.exports = {
  title: "Styleguidist",
  components: "src/app/components/**/*.{js,jsx,ts,tsx}",
  context: {},
  moduleAliases: {
    fixtures: path.resolve(__dirname, "src/tests/fixtures"),
  },
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.d.ts",
    "src/app/components/table/Column.tsx",
  ],
  skipComponentsWithoutExample: true,
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
    [
      // Parser options
      { shouldExtractLiteralValuesFromEnum: true },
    ],
  ).parse,
  template: {
    head: {
      scripts: [],
      links: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/spectre.css@0.5.8/dist/spectre.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/spectre.css@0.5.8/dist/spectre-exp.min.css",
        },
        {
          rel: "stylesheet",
          href:
            "https://unpkg.com/spectre.css@0.5.8/dist/spectre-icons.min.css",
        },
      ],
    },
  },
  require: [],
};
