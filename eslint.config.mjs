import { eslint } from "@eslint/eslintrc";
import nextPlugin from "eslint-config-next";

export default [
  ...eslint.flatConfig.pluginDependencies.filter(Boolean),
  ...nextPlugin,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
