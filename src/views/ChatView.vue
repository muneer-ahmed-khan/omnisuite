<script lang="ts" setup>
/**
 * @component ChatView
 * @description The main chat page component that displays the chat interface with breadcrumb navigation.
 * It integrates the BreadCrumb component for navigation and ChatContent component to display the chat functionality.
 *
 * @example
 * <ChatView />
 */

defineOptions({
  name: 'ChatView',
})
</script>

<template>
  <BreadCrumb page-title="Chat" />
  <ChatContent />
</template>
