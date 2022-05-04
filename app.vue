<template>
  <div>
    {{ fooStore.test }}|{{barStore.test}}
  </div>
</template>

<script setup lang="ts">

import { useAsyncData } from 'nuxt/app'
import { useBarStore } from './store/bar'
import { useFooStore } from './store/foo'

const fooStore = useFooStore()
const barStore = useBarStore()

await useAsyncData('async', () => {
  fooStore.setData('should see this');
  return (new Promise((resolve) => {
    resolve(true)
  }))
})
</script>
