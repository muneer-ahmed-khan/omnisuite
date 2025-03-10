// src/stores/stateStore.ts
import { defineStore } from 'pinia'

export const useStateStore = defineStore('stateStore', {
  state: () => ({
    open: false,
  }),
  actions: {
    onChange() {
      this.open = !this.open
    },
  },
})
