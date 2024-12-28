import tsParser from "@typescript-eslint/parser";
import typescriptEsLint from "@typescript-eslint/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEsLint,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  }
);
