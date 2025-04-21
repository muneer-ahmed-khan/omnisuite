<script setup lang="ts">
import { ref } from 'vue'

/**
 * ReadEmailView.vue
 *
 * A page component that displays the breadcrumb and email inbox content.
 * Composed of the BreadCrumb and EmailsContent components.
 */
defineOptions({
  name: 'ReadEmailView',
})

const isComposeModalActive = ref(false)

// Listen for 'compose' event from EmailsSidebar
function handleCompose() {
  isComposeModalActive.value = true
}
</script>

<template>
  <BreadCrumb page-title="Emails" />

  <div class="row">
    <div class="col-lg-4 col-xxl-3">
      <EmailSidebar @compose="handleCompose" />
    </div>
    <div class="col-lg-8 col-xxl-9">
      <ReadEmail />
      <ComposeEmailModal
        :active="isComposeModalActive"
        @close="
          () => {
            isComposeModalActive = false
          }
        "
      />
    </div>
  </div>
</template>
