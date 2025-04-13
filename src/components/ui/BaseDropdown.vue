<script setup lang="ts">
/**
 * BaseDropdown Component using Bootstrap JS
 *
 * This component acts as a wrapper for Bootstrap's dropdown functionality.
 * It delegates state management, ARIA attributes, keyboard navigation,
 * and positioning to Bootstrap’s built‑in JavaScript. The component focuses on
 * the markup and passing through of props, ensuring that your theme remains
 * consistent with Bootstrap's CSS while allowing for customization.
 *
 * Props:
 * - dropdownClass?: string
 *     Additional CSS classes for the dropdown container.
 *     Use this to style the outer wrapper of the dropdown.
 *
 * - menuClass?: string
 *     Additional CSS classes for the dropdown menu.
 *     This prop allows you to apply custom styles to the menu portion.
 *
 * - menuId?: string
 *     A unique ID for the dropdown menu. This ID is used to link the trigger
 *     element to the menu via ARIA attributes (e.g., aria-controls).
 *
 * Naming Conventions:
 * The component separates styling for the container and the menu via `dropdownClass`
 * and `menuClass`, respectively. This clear separation makes it easier to maintain
 * consistent theming across the application. The trigger element (typically a button)
 * should manage its own classes (for example, via a BaseButton component using its own
 * `className` prop).
 *
 * @component
 * @example
 * <BaseDropdown dropdownClass="profile-dropdown" menuClass="custom-menu-class" menuId="unique-menu-id">
 *   <template #trigger="{ menuId }">
 *     <!-- Your custom trigger component must include data-bs-toggle="dropdown" -->
 *     <button type="button"
 *             class="dropdown-toggle"
 *             data-bs-toggle="dropdown"
 *             aria-expanded="false"
 *             :aria-controls="menuId">
 *       Trigger Content
 *     </button>
 *   </template>
 *   <template #menu>
 *     <!-- Your custom menu items go here -->
 *     <ul>
 *       <li>Menu Item 1</li>
 *       <li>Menu Item 2</li>
 *     </ul>
 *   </template>
 * </BaseDropdown>
 */
import { defineProps } from 'vue'

defineOptions({ name: 'BaseDropdown' })

interface DropdownProps {
  dropdownClass?: string
  menuClass?: string
  menuId?: string
}

const props = defineProps<DropdownProps>()
</script>

<template>
  <div class="dropdown" :class="props.dropdownClass">
    <!--
      Trigger Slot:
      The trigger slot should render an interactive element with:
        - The class "dropdown-toggle"
        - The attribute data-bs-toggle="dropdown"
        - Appropriate ARIA attributes (e.g., aria-expanded, aria-controls)
      Bootstrap's JS will automatically handle state and accessibility updates.
    -->
    <slot name="trigger" :menuId="props.menuId" />

    <!--
      Dropdown Menu Container:
      The container must use the "dropdown-menu" class to benefit from Bootstrap's styling
      and Popper.js positioning. Additional custom classes can be applied via the menuClass prop.
    -->
    <div class="dropdown-menu" :class="props.menuClass" :id="props.menuId" role="menu">
      <slot name="menu" />
    </div>
  </div>
</template>
