import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        content: resolve(__dirname, "src/pages/content.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        contact: resolve(__dirname, "src/pages/contact.html"),
        ojk: resolve(__dirname, "src/pages/data-ojk.html"),
        krisis: resolve(__dirname, "src/pages/krisis.html"),
        edukasi: resolve(__dirname, "src/pages/edukasi.html"),
        tools: resolve(__dirname, "src/pages/tools.html"),
        glosarium: resolve(__dirname, "src/pages/glosarium.html"),
        tokoh: resolve(__dirname, "src/pages/tokoh.html"),
<<<<<<< HEAD
=======
        materiPemula: resolve(__dirname, "src/pages/materi-pemula.html"),
        materiMahasiswa: resolve(__dirname, "src/pages/materi-mahasiswa.html"),
>>>>>>> 704946e (Update materi)
      },
    },
  },
});
