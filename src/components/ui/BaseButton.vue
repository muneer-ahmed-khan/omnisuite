<script setup lang="ts">
/**
 * BaseButton Component
 *
 * A foundational button component that serves as a building block for interactive UI elements.
 * It accepts a button type, custom CSS classes, and automatically binds any additional attributes.
 *
 * @component
 * @example
 * <BaseButton type="button" className="btn btn-primary" @click="handleClick">
 *   <template #icon>
 *     <img src="/path/to/icon.png" alt="Icon" />
 *   </template>
 *   <template #content>
 *     Click Me
 *   </template>
 * </BaseButton>
 *
 * Props:
 * - type: Specifies the button's type attribute. Valid values are "button", "submit", or "reset".
 *         Defaults to "button" if not provided.
 * - className: Additional CSS classes to style the button.
 *
 * Additional Attributes:
 * Uses Vue's `useAttrs` to dynamically bind any extra attributes (e.g., ARIA attributes, event listeners)
 * to the underlying `<button>` element.
 */
import { useAttrs } from 'vue'

defineOptions({ name: 'BaseButton' })

interface Props {
  /** The button type ("button", "submit", or "reset"). */
  type?: 'button' | 'submit' | 'reset'
  /** Additional CSS classes for the button element. */
  className?: string
}

const props = defineProps<Props>()
const attrs = useAttrs() // Dynamically bind any additional attributes.
</script>

<template>
  <button :type="props.type ?? 'button'" :class="props.className" v-bind="attrs">
    <!-- Slot for icon or image -->
    <slot name="icon" />
    <!-- Slot for button text/content -->
    <slot name="content" />
  </button>
</template>
