<script setup lang="ts">
// Component Name
defineOptions({
  name: 'App',
})

// Import composables
import { useBodyClass } from '@/composables/useBodyClass'

// Set up global body class management for layout
useBodyClass()
</script>

<template>
  <!-- Main header of the application -->
  <MainHeader />

  <!-- Sidebar navigation -->
  <MainSidebar />

  <!-- Main content area -->
  <div class="main-content d-flex flex-column transition overflow-hidden">
    <!-- Route outlet -->
    <router-view />

    <!-- Main footer -->
    <MainFooter />
  </div>
</template>
