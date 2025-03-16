
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite"
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:
  {
    watch:
    {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
