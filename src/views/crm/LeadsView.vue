<script setup lang="ts">
/**
 * LeadsView
 *
 * This page serves as the entry point for the CRM Leads module.
 * It includes a breadcrumb for navigation context and the main content
 * from the `LeadsContent` component which displays and manages CRM leads.
 *
 * Components:
 * - BreadCrumb: Displays the current page title as a breadcrumb.
 * - LeadsContent: Handles the layout and data for the leads table and interactions.
 */

defineOptions({ name: 'LeadsPage' })
</script>

<template>
  <BreadCrumb page-title="Leads" />
  <LeadsContent />
</template>
