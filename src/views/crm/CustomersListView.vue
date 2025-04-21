<script setup lang="ts">
/**
 * CustomersListView.vue
 *
 * A page component for rendering the full customer list section.
 * Displays a breadcrumb and the customer list table.
 * All components are auto-imported.
 */

defineOptions({
  name: 'CustomersListView',
})
</script>

<template>
  <BreadCrumb page-title="Customers List" />
  <CustomersList />
</template>
