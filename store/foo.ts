import { defineStore } from 'pinia'

interface FooState{
  test: string,
}

export const useFooStore = defineStore('foo', {
})
