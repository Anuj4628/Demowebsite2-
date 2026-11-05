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
        pharmaBottles: resolve(__dirname, 'pages/products/pharma-bottles/index.html'),
        chemicalBottles: resolve(__dirname, 'pages/products/chemical-bottles/index.html'),
        attarBottles: resolve(__dirname, 'pages/products/attar-bottles/index.html'),
        perfumeBottles: resolve(__dirname, 'pages/products/perfume-bottles/index.html'),
        waterBottles: resolve(__dirname, 'pages/products/water-bottles/index.html'),
        domeLights: resolve(__dirname, 'pages/products/dome-lights/index.html'),
        certificates: resolve(__dirname, 'pages/certificates/index.html'),
        contact: resolve(__dirname, 'pages/contact/index.html'),
        getQuote: resolve(__dirname, 'pages/get-quote/index.html')
      }
    }
  }
});

