import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./packages/components"),
    },
  }
})
