<script setup lang="ts">
/**
 * LeadDetailsView.vue
 *
 * Page component that displays the Lead Details view,
 * with a breadcrumb for navigation.
 *
 */

defineOptions({ name: 'LeadDetailsView' })
</script>

<template>
  <BreadCrumb page-title="Lead Details" />
  <LeadDetails />
</template>
