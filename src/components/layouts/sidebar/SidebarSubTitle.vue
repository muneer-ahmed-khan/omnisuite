<script setup lang="ts">
/**
 * SidebarSubTitle Component
 *
 * Renders a non‑interactive subtitle within the sidebar menu.
 * Receives a menu item (of type 'subTitle') as a prop and renders the title text in uppercase.
 *
 * @component
 * @example
 * <SidebarSubTitle :item="menuItem" />
 */
import type { MenuItem } from './types/sidebar-menu-item.types'

const props = defineProps<{
  /** The menu item object conforming to the MenuItem interface */
  item: MenuItem
}>()
</script>

<template>
  <li class="sub-title sidebar-nav-item">
    <span class="d-block text-uppercase fw-medium">
      {{ props.item.title }}
    </span>
  </li>
</template>
