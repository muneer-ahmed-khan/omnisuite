<script setup lang="ts">
defineOptions({ name: 'LogoutPage' })
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import LogoutContent from '@/components/logout/LogoutContent.vue'
</script>

<template>
  <BreadCrumb PageTitle="Logout" />
  <LogoutContent />
</template>
