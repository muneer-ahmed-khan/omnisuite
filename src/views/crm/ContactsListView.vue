<script setup lang="ts">
/**
 * ContactsListView.vue
 *
 * Displays the breadcrumb and contact list for CRM contacts.
 * Uses auto-imported components: BreadCrumb and ContactsList.
 */
defineOptions({ name: 'ContactsListView' })
</script>

<template>
  <BreadCrumb page-title="Contacts List" />
  <ContactsList />
</template>
