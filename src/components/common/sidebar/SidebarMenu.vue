<script setup lang="ts">
/**
 * SidebarMenu Component
 *
 * Renders the complete sidebar menu by iterating over a list of menu items. It uses the
 * SidebarMenuItem component recursively to support nested menu structures.
 *
 * The menu data is imported from a static module and conforms to the structure defined by
 * the MenuItem interface.
 *
 * @component
 * @example
 * <SidebarMenu />
 */
import { menuItems } from './data/sidebar-menu.data'

defineOptions({ name: 'SidebarMenu' })
</script>

<template>
  <!-- Sidebar Navigation Menu -->
  <nav class="sidebar-menu">
    <ul class="sidebar-navbar-nav ps-0 mb-0 list-unstyled accordion" id="sidebarNavAccordion">
      <!-- Loop through and render each menu item -->
      <SidebarMenuItem v-for="item in menuItems" :key="item.id" :item="item" />
    </ul>
  </nav>
</template>
