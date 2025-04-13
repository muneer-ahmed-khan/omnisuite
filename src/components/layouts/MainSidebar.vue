<script setup lang="ts">
/**
 * MainSidebar Component
 *
 * Displays the main sidebar with toggle able state.
 *
 * @component
 * @example
 * <MainSidebar />
 */

import { useStateStore } from '@/stores/stateStore'

defineOptions({ name: 'MainSidebar' })

// Access global UI state
const stateStoreInstance = useStateStore()
</script>

<template>
  <div
    :class="[
      'sidebar-area position-fixed start-0 top-0 bg-black h-100vh transition',
      { active: stateStoreInstance.open },
    ]"
    id="sidebar-area"
  >
    <SidebarHeader />
    <SidebarMenu />
  </div>
</template>
