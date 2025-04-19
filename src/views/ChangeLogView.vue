<script setup lang="ts">
/**
 * ChangeLogView
 * -----------------------------------------------------------------------------
 * This page displays the changelog using the `ChangeLog` component and a breadcrumb
 * at the top for navigational context.
 *
 * @component
 * @example
 * <ChangeLogView />
 */

defineOptions({ name: 'ChangeLogView' })
</script>

<template>
  <BreadCrumb page-title="ChangeLog" />
  <ChangeLog />
</template>
