<script setup lang="ts">
/**
 * HeaderLeftSide Component
 *
 * Displays the burger menu for toggling sidebar and a search input.
 *
 * @component
 * @example
 * <HeaderLeftSide />
 */
import { useStateStore } from '@/stores/stateStore'

defineOptions({ name: 'HeaderLeftSide' })

const stateStore = useStateStore()
</script>

<template>
  <div
    class="header-left-side justify-content-center justify-content-md-start d-flex align-items-center"
  >
    <!-- Sidebar Toggle Button -->
    <button
      id="header-burger-menu"
      class="header-burger-menu transition position-relative lh-1 bg-transparent p-0 border-0"
      @click="stateStore.onChange"
    >
      <i class="flaticon-menu-3"></i>
    </button>

    <!-- Search Box -->
    <form class="search-box">
      <div class="input-group">
        <input
          type="text"
          class="form-control shadow-none rounded-0 border-0"
          placeholder="Search here"
        />
        <button
          type="button"
          class="default-btn position-relative transition border-0 fw-medium text-white pt-8 pb-8 ps-15 pe-15 pt-md-12 pb-md-12 ps-md-20 pe-md-20"
        >
          Search
          <i class="flaticon-search-interface-symbol position-relative ms-5 top-1"></i>
        </button>
      </div>
    </form>
  </div>
</template>
