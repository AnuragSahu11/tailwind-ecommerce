import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import manifestForPlugin from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      ...manifestForPlugin,
      injectManifest: { injectionPoint: undefined },
    }),
  ],
});
