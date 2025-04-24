<script setup lang="ts">
defineOptions({ name: 'QuantitySelector' })
import { defineProps, toRefs, defineEmits } from 'vue'
/**
 * QuantitySelector component handles item quantity selection and "Add To Cart" button.
 *
 * @v-model modelValue - the current quantity value, emits 'update:modelValue' on change.
 */
const props = defineProps<{ modelValue: number }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const { modelValue } = toRefs(props)

const increment = () => {
  if (modelValue.value < 10) {
    emit('update:modelValue', modelValue.value + 1)
  }
}

const decrement = () => {
  if (modelValue.value > 1) {
    emit('update:modelValue', modelValue.value - 1)
  }
}
</script>

<template>
  <div class="input-counter d-flex align-items-center">
    <div class="number-counter me-15" id="number-counter">
      <button type="button" @click="decrement">
        <i class="flaticon-minus"></i>
      </button>
      <input type="number" :value="modelValue" readonly />
      <button type="button" @click="increment">
        <i class="flaticon-plus"></i>
      </button>
    </div>
    <button
      class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-20 pe-20 pt-md-11 pb-md-11 ps-md-25 pe-md-25 ps-xl-40 pe-xl-40 rounded-1"
      type="submit"
    >
      Add To Cart
    </button>
  </div>
</template>
