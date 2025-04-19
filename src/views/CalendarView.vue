<script setup lang="ts">
/**
 * CalendarView Component
 *
 * The CalendarPage acts as a container for the Calendar content and displays breadcrumb navigation.
 * It integrates the `BreadCrumb` component and the actual `CalendarContent` view.
 *
 * @component
 * @example
 * <CalendarView />
 */

defineOptions({ name: 'CalendarView' })
</script>

<template>
  <BreadCrumb page-title="Calendar" />
  <CalendarContent />
</template>
