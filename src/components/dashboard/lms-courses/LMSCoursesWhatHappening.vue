<script setup lang="ts">
/**
 * LMSCoursesWhatHappening Component
 * -----------------------------------------------------------------------------
 * Displays a dashboard welcome section with current date, user greeting,
 * and key learning management system statistics including courses,
 * certificates, scores, and hours learned.
 *
 * @usage
 * <LMSCoursesWhatHappening />
 *
 * @note
 * - Uses static data from lms-course.data.ts
 * - Includes reactive date formatting
 * - Image path should be updated according to project structure
 */

import { ref, onMounted } from 'vue'
import { updates, welcomeImage } from './data/lms-courses-what-happening.data'

defineOptions({ name: 'LMSCoursesWhatHappening' })

const formattedDate = ref('')

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
  <div class="card mb-25 border-0 rounded-0 welcome-lms-courses-box">
    <!-- Card body structure remains the same -->
    <div
      class="card-body ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30 ps-xl-40 pe-xl-40 letter-spacing"
    >
      <div class="row align-items-center">
        <div class="col-xxl-6">
          <div class="content">
            <span class="d-block fw-bold mb-5" id="current-date">
              {{ formattedDate }}
            </span>
            <h2 class="fw-semibold mb-8 text-white">
              Welcome Back,
              <span class="fw-bold text-white">Angela Carter!</span>
            </h2>
            <p class="fs-md-15 fs-lg-16">See What’s happening with your courses and students.</p>
            <div class="row list justify-content-center">
              <div class="col-lg-3 col-6 col-sm-3" v-for="update in updates" :key="update.id">
                <div :class="['p-15 mt-15', update.bgClass]">
                  <span class="d-block mb-6 fw-medium text-black-emphasis fs-13 text-uppercase">
                    {{ update.title }}
                  </span>
                  <h4 :class="['mb-0 fw-black', update.class]">
                    {{ update.number }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 text-center text-xxl-end mt-15 mt-md-0">
          <img :src="welcomeImage" class="main-image" alt="welcome-image" />
        </div>
      </div>
    </div>
  </div>
</template>
