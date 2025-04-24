<script setup lang="ts">
/**
 * ImageUpload.vue
 * Component for dragging/dropping or clicking to upload an image, with preview and server upload.
 */
import { ref } from 'vue'

defineOptions({
  name: 'ImageUpload',
})

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const imageUrl = ref<string>('')

/**
 * Handles file input change, saves the selected file, and previews it.
 */
function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  selectedFile.value = input.files?.[0] ?? null
  previewImage()
}

/**
 * Generates a preview URL for the selected file.
 */
function previewImage() {
  if (selectedFile.value) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageUrl.value = e.target?.result as string
    }
    reader.readAsDataURL(selectedFile.value)
  } else {
    imageUrl.value = ''
  }
}

/**
 * Uploads the selected image to the server endpoint.
 */
async function uploadImage() {
  if (!selectedFile.value) return

  const formData = new FormData()
  formData.append('image', selectedFile.value)

  try {
    const response = await fetch('/upload-endpoint', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      const data = await response.json()
      imageUrl.value = data.imageUrl
    } else {
      console.error('Image upload failed.')
    }
  } catch (error) {
    console.error('Error uploading image:', error)
  }
}
</script>

<template>
  <div class="file-upload text-center position-relative">
    <img :src="imageUrl" alt="Uploaded Image" class="preview-image" />
    <span class="d-block text-muted">
      Drop Files Here Or
      <span @click="uploadImage" class="text-black fw-medium position-relative">
        Click To Upload
      </span>
    </span>
    <input
      type="file"
      class="d-block shadow-none border-0 position-absolute start-0 end-0 top-0 bottom-0 z-1 opacity-0"
      ref="fileInput"
      @change="handleFileChange"
    />
  </div>
</template>

<style scoped>
.preview-image {
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 30px;
}
</style>
