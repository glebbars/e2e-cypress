import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";
// import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    // replace({
    //   values: {
    //     "process.env": `(process.env || {})`,
    //   },
    // }),
  ],
  server: {
    host: true,
    port: 3000,
  },
});
