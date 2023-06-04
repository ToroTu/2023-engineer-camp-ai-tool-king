import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        // chunkFileNames: 'assets/[name]-11-[hash].js',
        // assetFileNames: 'assets/[name]-22-[hash].[ext]',
        // entryFileNames: 'assets/[name]-33-[hash].js',
        assetFileNames: (assetInfo) => {
          if (/.+\.css$/.test(assetInfo.name)) {
            return 'assets/style.[ext]'
          }
          return 'assets/[name]-[hash].[ext]'
        },
        entryFileNames: 'assets/[name].js',
      },
    },
  },
})
