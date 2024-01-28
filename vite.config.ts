import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "/src/assets/sass/variables";`,
      },
    },
  },
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  // },
});
