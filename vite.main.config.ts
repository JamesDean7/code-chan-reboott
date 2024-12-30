import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import vitePluginRequire from "vite-plugin-require";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), (vitePluginRequire as any).default()],
  build: {
    lib: {
      entry: "src/electron/main.ts",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        dir: ".vite/build",
      },
      plugins: [
        typescript({
          target: "ES2022",
        }),
      ],
    },
  },
});
