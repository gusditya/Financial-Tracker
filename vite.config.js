import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pemula: resolve(__dirname, "src/pages/pemula.html"),
        mahasiswa: resolve(__dirname, "src/pages/mahasiswa.html"),
        pengusaha: resolve(__dirname, "src/pages/pengusaha.html"),
        news: resolve(__dirname, "src/pages/news.html"),
        stocks: resolve(__dirname, "src/pages/stocks.html"),
        "eco-history": resolve(__dirname, "src/pages/eco-history.html"),
        "crisis-map": resolve(__dirname, "src/pages/crisis-map.html"),
        "value-converter": resolve(__dirname, "src/pages/value-converter.html"),
        "mentor-ai": resolve(__dirname, "src/pages/mentor-ai.html"),
        "materi-pemula": resolve(__dirname, "src/pages/materi-pemula.html"),
        "materi-mahasiswa": resolve(__dirname, "src/pages/materi-mahasiswa.html"),
      },
    },
  },
});
