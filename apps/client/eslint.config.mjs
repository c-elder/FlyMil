// @ts-check

import tseslint from "typescript-eslint";

import eslint from "@eslint/js";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
);
