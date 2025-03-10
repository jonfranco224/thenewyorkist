/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        semi: false,
        trailingComma: "es5",
        jsxSingleQuote: true,
        singleQuote: true,
        printWidth: 70,
        tabWidth: 2,
        useTabs: false,
        astroAllowShorthand: true,
      },
    },
  ],
};
