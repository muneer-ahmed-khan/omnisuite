<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { useStateStore } from '@/stores/stateStore'

const stateStore = useStateStore()

import MainHeader from '@/components/layouts/MainHeader.vue'
// import MainSidebar from './components/Layouts/MainSidebar.vue'
// import MainFooter from './components/Layouts/MainFooter.vue'

// Side-effect previously in mounted()
onMounted(() => {
  document.body.classList.add('bg-body-secondary')
})

// Watch stateStore for changes
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
</script>

<template>
  <MainHeader />
  <!-- <MainSidebar /> -->
  <div class="main-content d-flex flex-column transition overflow-hidden">
    <router-view />
    <!-- <MainFooter /> -->
  </div>
</template>
