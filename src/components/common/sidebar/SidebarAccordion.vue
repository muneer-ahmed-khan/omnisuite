<!-- SidebarAccordion.vue -->
<script setup lang="ts">
/**
 * SidebarAccordion Component
 *
 * Renders an expandable accordion item in the sidebar.
 * This component displays an accordion header that toggles the visibility of a nested submenu,
 * and then recursively renders child items using the SidebarMenuItem dispatcher.
 *
 * @component
 * @example
 * <SidebarAccordion
 *   :item="{
 *     id: 'crm',
 *     type: 'accordion',
 *     title: 'CRM',
 *     uniqueCollapseId: 'sidebarCollapseTwo', // Note: using uniqueCollapseId for clarity
 *     active: true,
 *     rootMenu: true,
 *     children: [ ... ]
 *   }"
 *   parentAccordionId="#sidebarNavAccordion"
 * />
 *
 * Props:
 * - item: An object of type MenuItem for the accordion.
 *          Note: It uses the property `uniqueCollapseId` for generating collapse-related attributes.
 * - parentAccordionId (optional): A string identifier used by nested accordion groups.
 */
import { computed } from 'vue'
import type { MenuItem } from './types/sidebar-menu-item.types'

defineOptions({ name: 'SidebarAccordion' })

const props = defineProps<{
  item: MenuItem
  parentAccordionId?: string
}>()

// Compute parentAccordionId with default value.
const parentId = computed(() => props.parentAccordionId || '#sidebarNavAccordion')

// Compute CSS classes for the list item <li>
const liClass = computed(() => (props.item.rootMenu ? 'sidebar-nav-item' : 'sidebar-sub-menu-item'))

// Compute common attributes for the accordion toggle header.
const toggleAttrs = computed(() => {
  return {
    href: '#',
    class: {
      'accordion-button': true,
      'rounded-0': true,
      'shadow-none': true,
      'bg-transparent': true,
      'd-block': true,
      collapsed: !props.item.active,
    },
    'data-bs-toggle': 'collapse',
    'data-bs-target': `#${props.item.uniqueCollapseId}`,
    'aria-expanded': props.item.active || false,
    'aria-label': props.item.title,
    'aria-controls': props.item.uniqueCollapseId,
  }
})

// Compute attributes for the collapse container.
const collapseAttrs = computed(() => {
  return {
    id: props.item.uniqueCollapseId,
    class: {
      'accordion-collapse': true,
      collapse: true,
      show: props.item.active,
    },
    'data-bs-parent': parentId.value,
  }
})

// Compute the id for the child menu <ul>
const childListId = computed(() => `${props.item.uniqueCollapseId}-child`)
</script>

<template>
  <li :class="[liClass, 'accordion-item bg-transparent border-0 rounded-0']">
    <!-- Accordion Toggle Header -->
    <a v-bind="toggleAttrs">
      <i v-if="props.item.icon" :class="props.item.icon" />
      <span class="title">{{ props.item.title }}</span>
    </a>

    <!-- Accordion Collapse Container -->
    <div v-bind="collapseAttrs">
      <div class="accordion-body">
        <ul :id="childListId" class="sidebar-sub-menu ps-0 mb-0 list-unstyled">
          <!-- Recursively render child menu items using the dispatcher component -->
          <SidebarMenuItem
            v-for="child in props.item.children || []"
            :key="child.id"
            :item="child"
            :parent-accordion-id="childListId"
          />
        </ul>
      </div>
    </div>
  </li>
</template>
