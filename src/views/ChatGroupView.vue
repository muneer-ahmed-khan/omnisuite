<script setup lang="ts">
/**
 * ChatGroupView Component
 *
 * A page component that displays the chat group interface with a breadcrumb navigation.
 * It serves as a container for the ChatGroupView component and includes page navigation.
 *
 * @component
 * @example
 * <ChatGroupView />
 */

defineOptions({ name: 'ChatGroupView' })
</script>

<template>
  <BreadCrumb page-title="Chat" />
  <ChatGroup />
</template>
