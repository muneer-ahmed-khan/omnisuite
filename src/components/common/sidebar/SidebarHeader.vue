<script setup lang="ts">
/**
 * SidebarHeader Component
 *
 * Renders the top section of the sidebar which includes:
 * - The application logo and brand name as a router-link.
 * - A toggle button that triggers the collapse/expand functionality of the sidebar.
 *
 * This component interacts with the global state store to update the sidebar visibility.
 *
 * @component
 * @example
 * <SidebarHeader />
 */
import { useStateStore } from '@/stores/stateStore'
import Logo from '@/assets/images/favicon.png'

defineOptions({ name: 'SidebarHeader' })

const stateStore = useStateStore()
</script>

<template>
  <div class="logo position-absolute start-0 end-0 top-0 bg-black">
    <!-- Logo and Brand Name -->
    <router-link to="/" class="d-flex align-items-center text-white text-decoration-none">
      <img :src="Logo" alt="logo-icon" />
      <span class="fw-bold ms-10">Adlash</span>
    </router-link>

    <!-- Divider -->
    <div class="border-bottom"></div>

    <!-- Toggle Sidebar Button using BaseButton -->
    <BaseButton
      type="button"
      class-name="sidebar-burger-menu position-absolute lh-1 bg-transparent p-0 border-0"
      @click="stateStore.onChange"
    >
      <!-- Icon slot -->
      <template #icon>
        <i class="ph-duotone ph-caret-double-right"></i>
      </template>
    </BaseButton>
  </div>
</template>
