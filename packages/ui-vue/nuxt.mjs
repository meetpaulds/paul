import { addComponent, defineNuxtModule } from '@nuxt/kit'
import * as components from './dist/index.js'

const componentNames = Object.keys(components).filter(name => /^[A-Z]/.test(name))

export default defineNuxtModule({
  meta: {
    name: '@meetpaul/ui-vue',
    configKey: 'meetpaulUiVue'
  },
  setup() {
    for (const name of componentNames) {
      addComponent({
        name,
        export: name,
        filePath: '@meetpaul/ui-vue'
      })
    }
  }
})
