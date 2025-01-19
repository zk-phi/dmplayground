import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

const { resolve } = require("path");

export default defineConfig({
  root: "src/entrypoints",
  base: "/dmplayground/",
  plugins: [preact()],
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        dm: "src/entrypoints/dm/demo/index.html",
      },
    },
  },
});