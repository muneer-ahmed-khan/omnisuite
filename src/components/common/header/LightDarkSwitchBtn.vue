<script setup lang="ts">
/**
 * LightDarkSwitchBtn Component
 *
 * A toggle button for switching between light and dark modes.
 * This component manages the dark mode state, updates the <body> class accordingly,
 * and persists the user's preference in localStorage.
 *
 * @component
 * @example
 * <LightDarkSwitchBtn />
 */
import { ref, onMounted } from 'vue'

defineOptions({ name: 'LightDarkSwitchBtn' })

// Reactive state for dark mode.
const isDarkMode = ref(false)

/**
 * Updates the <body> element's class based on the current dark mode state.
 */
const updateBodyClass = () => {
  document.body.classList.toggle('dark', isDarkMode.value)
}

/**
 * Toggles the dark mode state, updates the body class, and persists the state in localStorage.
 */
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  updateBodyClass()
  try {
    localStorage.setItem('dark', isDarkMode.value.toString())
  } catch (error) {
    console.error('Failed to save dark mode preference:', error)
  }
}

// When the component is mounted, load the dark mode preference from localStorage.
onMounted(() => {
  try {
    const storedDarkMode = localStorage.getItem('dark')
    if (storedDarkMode !== null) {
      isDarkMode.value = storedDarkMode === 'true'
      updateBodyClass()
    }
  } catch (error) {
    console.error('Failed to load dark mode preference:', error)
  }
})
</script>

<template>
  <div class="dark-swtich-btn">
    <BaseButton
      id="switch-toggle"
      className="switch-toggle transition d-inline-block position-relative border-0 rounded-circle"
      @click="toggleDarkMode"
    >
      <template #icon>
        <i class="flaticon-moon"></i>
      </template>
    </BaseButton>
  </div>
</template>
