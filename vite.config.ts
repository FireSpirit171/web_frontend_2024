import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/api": {
          target: "http://192.168.102.224:8000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/"),
      },
  },
  }, 
  // base: "/MeatFish",
  plugins: [react()],
})
