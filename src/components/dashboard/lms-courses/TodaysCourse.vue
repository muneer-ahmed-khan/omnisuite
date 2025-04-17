<script setup lang="ts">
/**
 * TodaysCourse Component
 * -----------------------------------------------------------------------------
 * Displays a carousel of today's courses with progress tracking and navigation.
 * Includes swiper functionality for course slides management.
 *
 * @usage
 * <TodaysCourse />
 *
 * @note
 * - Uses Swiper.js for carousel functionality
 * - Static data imported from ./data/todays-course.data.ts
 * - Image paths should be verified based on project structure
 */

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { courses } from './data/todays-course.data'

defineOptions({ name: 'TodaysCourse' })

const modules = [Autoplay, Pagination]
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white todays-course-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 pt-lg-30 pb-lg-30 ps-lg-25 pe-lg-25 letter-spacing">
      <div class="mb-10 mb-md-25 d-flex justify-content-between">
        <div class="title">
          <h5 class="card-title fw-bold mb-7">Today’s Course</h5>
          <span class="d-block text-muted fw-medium"> 4 lessons, 3 hours 45 minutes </span>
        </div>
        <div class="todays-course-swiper-pagination"></div>
      </div>
      <swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="todaysCourseSwiper"
      >
        <swiper-slide v-for="course in courses" :key="course.id">
          <div class="row ms-0 me-0 align-items-center">
            <div class="col-4 ps-0 pe-0">
              <img :src="course.image" alt="course-image" />
            </div>
            <div class="col-8 ps-0 pe-0">
              <div class="content">
                <router-link
                  to="/course-details"
                  class="d-block fw-bold text-decoration-none text-black-emphasis"
                >
                  {{ course.title }}
                </router-link>
                <span class="text-black mt-8 fw-medium d-flex align-items-center">
                  <span class="w-6 h-6 d-block bg-info rounded-circle me-8 opacity-50"></span>
                  {{ course.mins }}
                  <span class="text-muted ms-5 fw-normal">Mins</span>
                </span>
                <span class="mt-5 text-black fw-medium d-flex align-items-center">
                  <span class="w-6 h-6 d-block bg-info rounded-circle me-8 opacity-50"></span>
                  {{ course.topics }}
                  <span class="text-muted ms-5 fw-normal">Topics</span>
                </span>
              </div>
            </div>
          </div>
          <span class="fw-medium text-secondary mt-10 mt-md-25 mb-5 mb-md-8 d-block">
            Goal
            <span class="fw-bold text-black"> {{ course.goal }} </span>
          </span>
          <div
            class="progress"
            role="progressbar"
            :aria-valuenow="course.progress"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" :style="{ width: course.progress + '%' }"></div>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-30">
            <button
              type="button"
              class="fs-13 fw-medium text-dark-emphasis p-0 bg-transparent border-0"
            >
              Skip This
            </button>
            <button
              type="button"
              class="card-link-btn border-0 bg-transparent p-0 text-decoration-none text-primary fw-medium position-relative d-inline-block"
            >
              Continue
            </button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
