<script setup lang="ts">
/**
 * MainHeader Component
 *
 * A fixed header that becomes sticky on scroll.
 * Renders the left and right sections of the header.
 *
 * @component
 * @example
 * <MainHeader />
 */
import { useScroll } from '@/composables/useScroll'

defineOptions({ name: 'MainHeader' })

// Reactive sticky state when scrolled past 100px
const { isSticky } = useScroll(100)
</script>

<template>
  <header
    id="header"
    :class="[
      'header-area bg-white text-center text-md-start pt-15 pb-15 ps-15 pe-15 ps-md-20 pe-md-20 pe-lg-30 transition mb-25 position-fixed',
      { sticky: isSticky },
    ]"
  >
    <div class="row align-items-center">
      <!-- Left section: Logo, search, menu -->
      <div class="col-xl-4 col-lg-5 col-md-6">
        <HeaderLeftSide />
      </div>

      <!-- Right section: Profile, notifications, language -->
      <div class="col-xl-8 col-lg-7 col-md-6">
        <HeaderRightSide />
      </div>
    </div>
  </header>
</template>
