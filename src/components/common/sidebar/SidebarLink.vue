<!-- SidebarLink.vue -->
<script setup lang="ts">
/**
 * SidebarLink Component
 *
 * A reusable sidebar link component that represents a navigable item in the sidebar menu.
 * (when a valid route is provided) or a plain `<a>` element.
 *
 * @component
 * @example
 * <SidebarLink
 *   :item="{
 *     id: 'dashboard-link',
 *     type: 'link',
 *     title: 'Dashboard',
 *     route: '/dashboard',
 *     rootMenu: true,
 *     icon: 'flaticon-home',
 *     badge: 'New',
 *     badgeClass: 'badge-class'
 *   }"
 * />
 *
 * Props:
 * - item: An object of type MenuItem that defines the link properties.
 */
import { computed } from 'vue'
import type { MenuItem } from './types/sidebar-menu-item.types'

defineOptions({ name: 'SidebarLink' })

const props = defineProps<{
  item: MenuItem
}>()

/**
 * Computes the component to use as the link wrapper.
 * If the route is defined and not equal to "#", the component is a RouterLink;
 * otherwise, it falls back to a native <a> tag.
 */
const linkComponent = computed(() => {
  return props.item.route && props.item.route !== '#' ? 'router-link' : 'a'
})

/**
 * Computes the set of properties to pass along to the dynamic component.
 * For RouterLink, it includes the `to` attribute; for an <a> tag, it sets href.
 */
const linkAttrs = computed(() => {
  if (props.item.route && props.item.route !== '#') {
    return {
      to: props.item.route,
      class: props.item.rootMenu ? 'sidebar-nav-link d-block' : 'sidebar-sub-menu-link',
    }
  } else {
    return {
      href: '#',
      class: props.item.rootMenu ? 'sidebar-nav-link d-block' : 'sidebar-sub-menu-link',
    }
  }
})
</script>

<template>
  <li :class="props.item.rootMenu ? 'sidebar-nav-item' : 'sidebar-sub-menu-item'">
    <!-- Dynamic component reduces code duplication -->
    <component :is="linkComponent" v-bind="linkAttrs">
      <i v-if="props.item.icon" :class="props.item.icon" />
      <span class="title">{{ props.item.title }}</span>
      <span v-if="props.item.badge" :class="props.item.badgeClass">{{ props.item.badge }}</span>
    </component>
  </li>
</template>
