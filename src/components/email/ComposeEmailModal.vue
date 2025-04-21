<script setup lang="ts">
/**
 * ComposeEmailModal.vue
 *
 * A modal component for composing and sending emails.
 * Uses Quill with blot formatter and image uploader extensions.
 */

defineOptions({ name: 'ComposeEmailModal' })

import { ref, defineProps, defineEmits } from 'vue'
import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from 'quill-image-uploader'
import axios from 'axios'

const props = defineProps<{ active: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const message = ref('')

function closeModal() {
  emit('close')
}

function sendEmail() {
  console.log('Sending:', message.value)
  closeModal()
}

const modules = {
  name: 'blotFormatter',
  module: BlotFormatter,
  ImageUploader,
  options: {
    upload: (file: File) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('image', file)

        axios
          .post('/upload-image', formData)
          .then((res) => resolve(res.data.url))
          .catch((err) => {
            console.error('Upload failed', err)
            reject('Upload failed')
          })
      })
    },
  },
}
</script>

<template>
  <div :class="['compose-email-modal', { active: props.active }]">
    <div class="compose-email-modal-dialog">
      <div
        class="compose-email-modal-header d-flex align-items-center justify-content-between p-15 ps-sm-20 p-md-25"
      >
        <h5 class="mb-0 text-black fw-bold">New Message</h5>
        <button class="close-btn bg-transparent border-0 p-0" type="button" @click="closeModal">
          <i class="flaticon-close"></i>
        </button>
      </div>
      <div class="compose-email-modal-body p-15 ps-sm-20 p-md-25">
        <form @submit.prevent="sendEmail">
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">To</label>
            <input
              type="email"
              class="form-control shadow-none rounded-0 text-black"
              placeholder="e.g. johny12345@gmail.com"
              required
            />
          </div>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">Subject</label>
            <input
              type="text"
              class="form-control shadow-none rounded-0 text-black"
              placeholder="e.g. Our visual design can lead you"
              required
            />
          </div>
          <div class="form-group mb-15 mb-md-25">
            <label class="d-block text-black fw-semibold mb-10">Write Message</label>
            <QuillEditor
              v-model:content="message"
              content-type="html"
              theme="snow"
              :modules="modules"
              placeholder="Write your message here"
            />
          </div>
          <button
            class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16"
            type="submit"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
