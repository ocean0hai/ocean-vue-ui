import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import path from 'path'
import vueJSX from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
   vueJSX()
  ],
  resolve: {
    alias: {
      "@ocean-vue3-ui": path.resolve("./packages"),
    },
  },
  server:{
   port:8080 
  }
})
