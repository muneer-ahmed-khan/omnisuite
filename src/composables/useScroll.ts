/**
 * useScroll Composable
 *
 * Tracks scroll position and sets a reactive `isSticky` value to `true` or `false`
 * based on whether the scroll position passes a given threshold.
 *
 * @param threshold - Number of pixels to scroll before `isSticky` becomes true (default: 100)
 * @returns isSticky - A reactive ref that indicates if the threshold has been reached
 */

import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll(threshold = 100) {
  const isSticky = ref(false)

  // Update isSticky based on current scroll position
  const handleScroll = () => {
    isSticky.value = window.scrollY >= threshold
  }

  // Add scroll listener when component is mounted
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  // Remove listener on unmount to prevent memory leaks
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isSticky }
}
