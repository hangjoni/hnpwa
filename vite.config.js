import { fileURLToPath, URL } from "node:url";
// import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   injectRegister: "auto",
    //   devOptions: { enabled: true },
    //   workbox: { globPatterns: ["**/*.{js,css,html,ico,png,svg}"] },
    //   includeAssets: [
    //     "fonts/*.ttf",
    //     "images/*.png",
    //     "css/*.css",
    //     "icons/*.png",
    //   ],
    //   manifest: {
    //     short_name: "HackerNews Reader",
    //     name: "HackerNews Reader",
    //     start_url: "/",
    //     display: "standalone",
    //     theme_color: "#ffffff",
    //     background_color: "#ffffff",
    //     orientation: "portrait",
    //     icons: [
    //       {
    //         src: "/icons/third_icon_72x72.png",
    //         sizes: "72x72",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/icons/third_icon_192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/icons/third_icon_512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //     ],
    //     prefer_related_applications: false,
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
