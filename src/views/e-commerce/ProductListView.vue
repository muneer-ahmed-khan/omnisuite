<script setup lang="ts">
/**
 * ProductListView.vue
 * Page displaying the breadcrumb and the ProductsList view
 */

defineOptions({
  name: 'ProductListView',
})
</script>

<template>
  <BreadCrumb page-title="Products List" />
  <ProductsList />
</template>
