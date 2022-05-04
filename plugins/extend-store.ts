import { defineNuxtPlugin } from 'nuxt/app'
import { PiniaPluginContext } from 'pinia'

function piniaExtendPlugin({ store }: PiniaPluginContext) {
  return {
    setData: (data) => {
      store.test = data
    },
    test: 'default'
  }
}


export default defineNuxtPlugin(({$pinia}) => {
  $pinia.use(piniaExtendPlugin)
})
