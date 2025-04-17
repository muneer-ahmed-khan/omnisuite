<script setup lang="ts">
/**
 * SupportDeskWhatHappening Component
 * -----------------------------------------------------------------------------
 * This component displays a welcome message along with the current date and
 * a summary of various update items. It leverages static update data imported from
 * a separate data file and uses a dynamic date computed on mount.
 *
 * @usage
 * <SupportDeskWhatHappening />
 *
 * @data
 * Static update data is imported from:
 *   - data/what-happening.data.ts
 *
 * @types
 * The structure of update items is defined in:
 *   - types/what-happening.types.ts
 *
 * @note
 * Image paths are resolved using the new URL constructor for proper asset loading.
 */

defineOptions({ name: 'SupportDeskWhatHappening' })

import { ref, onMounted } from 'vue'
import { updates } from './data/support-desk-what-happening.data'

// Reactive variable for storing the formatted current date.
const formattedDate = ref('')

// Resolve image path using the new URL method.
const welcomeImageUrl = new URL('@/assets/images/welcome/welcome2.png', import.meta.url).href

// Setup the formatted date on component mount.
onMounted(() => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const currentDate = new Date()
  formattedDate.value = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
})
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white welcome-support-desk-box">
    <div
      class="card-body p-15 p-sm-20 p-md-25 p-lg-30 pt-xl-50 pb-xl-50 ps-xl-40 ps-xl-40 letter-spacing"
    >
      <div class="row align-items-center">
        <!-- Left Column: Content & Updates -->
        <div class="col-lg-8 col-md-8">
          <div class="content">
            <span class="d-block fw-bold text-primary mb-5" id="current-date">
              {{ formattedDate }}
            </span>
            <h2 class="fw-semibold mb-8">
              Welcome To Adlash,
              <span class="fw-bold">Support Desk!</span>
            </h2>
            <p class="text-black-emphasis fs-md-15 fs-lg-16">
              Here’s what happening in your desk today. Stay updated.
            </p>
            <div class="row list justify-content-center">
              <div class="col-lg-4 col-sm-4" v-for="update in updates" :key="update.id">
                <div :class="['p-15', update.bgClass]">
                  <span class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase">
                    {{ update.title }}
                  </span>
                  <h4 :class="['mb-0 fw-black', update.class]">{{ update.number }}+</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column: Welcome Image -->
        <div class="col-lg-4 col-md-4 text-center mt-15 mt-md-0">
          <img :src="welcomeImageUrl" alt="welcome-image" />
        </div>
      </div>
    </div>
  </div>
</template>
