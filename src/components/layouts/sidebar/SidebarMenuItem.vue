<script setup lang="ts">
/**
 * SidebarMenuItem Component
 *
 * Dispatches the rendering of specialized sidebar menu items based on the provided
 * menu item's `type` property:
 * - "subTitle" renders the SidebarSubTitle component.
 * - "link" renders the SidebarLink component.
 * - "accordion" renders the SidebarAccordion component.
 *
 * If an unsupported type is provided, a fallback message is displayed.
 *
 * @component
 * @example
 * <SidebarMenuItem :item="menuItem" :parentAccordionId="accordionId" />
 */
import { computed } from 'vue'
import type { MenuItem } from './types/sidebar-menu-item.types'
import SidebarSubTitle from './SidebarSubTitle.vue'
import SidebarLink from './SidebarLink.vue'
import SidebarAccordion from './SidebarAccordion.vue'

defineOptions({ name: 'SidebarMenuItem' })

const props = defineProps<{
  /** The menu item object conforming to the MenuItem interface */
  item: MenuItem
  /** Optional parent accordion identifier for nested menu items */
  parentAccordionId?: string
}>()

// Mapping of menu item types to their corresponding components.
const componentMapping = {
  subTitle: SidebarSubTitle,
  link: SidebarLink,
  accordion: SidebarAccordion,
} as const

// Compute the component to render based on the item's type.
const componentToRender = computed(() => {
  return componentMapping[props.item.type] || null
})
</script>

<template>
  <component
    v-if="componentToRender"
    :is="componentToRender"
    :item="props.item"
    :parent-accordion-id="props.parentAccordionId"
  />
  <template v-else>
    <!-- Fallback content for unsupported types -->
    <span class="error"> Unsupported menu item type: {{ props.item.type }} </span>
  </template>
</template>
