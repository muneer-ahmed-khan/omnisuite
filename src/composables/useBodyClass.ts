/**
 * useBodyClass Composable
 *
 * Manages body classes based on sidebar state from stateStore.
 * Adds a default background class on mount and toggles sidebar visibility classes reactively.
 */

import { onMounted, watchEffect } from 'vue'
import { useStateStore } from '@/stores/stateStore'

export function useBodyClass() {
  const stateStore = useStateStore()

  // Set default body background class on component mount
  onMounted(() => {
    document.body.classList.add('bg-body-secondary')
  })

  // Toggle sidebar-related classes based on reactive store state
  watchEffect(() => {
    if (stateStore.open) {
      document.body.classList.remove('sidebar-show')
      document.body.classList.add('sidebar-hide')
      console.log('show')
    } else {
      document.body.classList.remove('sidebar-hide')
      document.body.classList.add('sidebar-show')
      console.log('hide')
    }
  })
}
