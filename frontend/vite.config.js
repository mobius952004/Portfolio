import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from "node:url";
// import typography from "tailwindcss/typography"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),


  ],
  server:{
    open:`/connect`,
    host:true
  },
    resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
