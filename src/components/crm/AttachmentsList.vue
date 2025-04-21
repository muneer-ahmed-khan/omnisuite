<!-- AttachmentsList.vue -->

<script setup lang="ts">
/**
 * AttachmentsList.vue
 *
 * Shows a list of attachments with optional previews.
 */
import { attachments } from './data/attachments-list.data'

defineOptions({ name: 'AttachmentsList' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white attachments-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-md-20 mb-lg-25 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Attachments</h5>
      </div>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li v-for="file in attachments" :key="file.id">
          <span class="fw-medium d-block fs-md-15 fs-lg-16">
            <i :class="`${file.iconClass} lh-1 position-relative text-primary top-2 me-5`"></i>
            {{ file.name }}
          </span>
          <div class="d-flex align-items-center text-muted mt-5">
            <span class="d-block">{{ file.size }}</span>
            <span class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"></span>
            <span class="d-block">{{ file.uploader }}</span>
            <span class="w-6 h-6 rounded-circle bg-muted ms-8 me-8"></span>
            <span class="d-block">{{ file.date }}</span>
          </div>
          <img
            v-if="file.previewUrl"
            :src="file.previewUrl"
            alt="preview"
            width="100"
            class="mt-10"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
