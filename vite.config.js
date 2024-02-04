import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      templates : '/src/components/templates',
      modules : '/src/components/modules',
      layouts : '/src/components/layouts',
      styles  : '/src/styles',
      assets : '/src/assets',
      utils : '/src/utils'
    }
  }
})
