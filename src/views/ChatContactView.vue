<script setup lang="ts">
/**
 * ChatContactView
 *
 * This page displays the chat interface along with the breadcrumb.
 * It renders the main `ChatContact` component with static contacts or chat UI.
 */

defineOptions({ name: 'ChatContactView' })
</script>

<template>
  <BreadCrumb page-title="Chat" />
  <ChatContact />
</template>
