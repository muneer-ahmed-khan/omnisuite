<script setup lang="ts">
/**
 * ProductDetailsView.vue
 * Page displaying the breadcrumb and the ProductsList view
 */

defineOptions({
  name: 'ProductDetailsView',
})
</script>

<template>
  <BreadCrumb page-title="Product Details" />
  <ProductDetails />
</template>
