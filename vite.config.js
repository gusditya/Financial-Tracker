import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        edukasi: resolve(__dirname, 'src/pages/edukasi.html'),
        dataOjk: resolve(__dirname, 'src/pages/data-ojk.html'),
        krisis: resolve(__dirname, 'src/pages/krisis.html'),
        tools: resolve(__dirname, 'src/pages/tools.html'),
        glosarium: resolve(__dirname, 'src/pages/glosarium.html'),
        tokoh: resolve(__dirname, 'src/pages/tokoh.html'),
        materiPemula: resolve(__dirname, 'src/pages/materi-pemula.html'),
        materiMahasiswa: resolve(__dirname, 'src/pages/materi-mahasiswa.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
