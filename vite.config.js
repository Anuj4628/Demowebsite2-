import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about/index.html'),
        products: resolve(__dirname, 'pages/products/index.html'),
        certificates: resolve(__dirname, 'pages/certificates/index.html'),
        contact: resolve(__dirname, 'pages/contact/index.html'),
        getQuote: resolve(__dirname, 'pages/get-quote/index.html')
      }
    }
  }
});

