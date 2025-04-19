<script setup lang="ts">
/**
 * @file FileManagerPage.vue
 * @description Layout page for the File Manager. It displays recent files, document files, and asset files,
 * using three separate reusable child components. It also includes a breadcrumb for page navigation.
 */

defineOptions({
  name: 'FileManager',
})
</script>

<template>
  <!-- Breadcrumb navigation for the File Manager page -->
  <BreadCrumb page-title="File Manager" />

  <!-- Section showing recently accessed files -->
  <RecentFiles />

  <!-- Section listing document-related files -->
  <DocumentsFiles />

  <!-- Section listing asset/media files -->
  <AssetsFiles />
</template>
