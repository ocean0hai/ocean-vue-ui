import { App } from "vue"
import { Vue3UIOption, installComponent } from "@ocean-vue-ui/utils"
import { components } from "./components"

//将组件分别暴露出来
const Vue3UI = {
  install(app: App, options?: Vue3UIOption) {
    components.forEach(component => {
      installComponent(app, component, options)
    })
  }
}

export default Vue3UI