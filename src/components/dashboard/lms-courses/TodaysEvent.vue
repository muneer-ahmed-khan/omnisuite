<script setup lang="ts">
/**
 * TodaysEvent Component
 * -----------------------------------------------------------------------------
 * Displays a carousel of today's events with countdown timers and participation options.
 * Implements swiper functionality for event slides management.
 *
 * @usage
 * <TodaysEvent />
 *
 * @note
 * - Uses Swiper.js for carousel functionality
 * - Static data imported from ./data/todays-event.data.ts
 * - Image paths use Vite's asset handling syntax
 */

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { events } from './data/todays-event.data'

defineOptions({ name: 'TodaysEvent' })

const modules = [Autoplay, Pagination]
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white todays-event-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 pt-lg-30 pb-lg-30 ps-lg-25 pe-lg-25 letter-spacing">
      <div class="mb-10 mb-md-25 d-flex justify-content-between">
        <div class="title">
          <h5 class="card-title fw-bold mb-7">Today’s Event</h5>
          <span class="d-block text-black fw-medium">12 Events in all</span>
        </div>
        <div class="todays-event-swiper-pagination"></div>
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
        class="todaysEventSwiper"
      >
        <swiper-slide v-for="event in events" :key="event.id">
          <div>
            <div class="row ms-0 me-0 align-items-center">
              <div class="col-4 ps-0 pe-0">
                <img :src="event.image" alt="event-image" />
              </div>
              <div class="col-8 ps-0 pe-0">
                <div class="content">
                  <router-link
                    to="/event-details"
                    class="d-block fw-bold text-decoration-none text-black"
                  >
                    {{ event.title }}
                  </router-link>
                  <span class="mt-8 text-black fw-medium d-flex align-items-center">
                    <span class="w-6 h-6 d-block bg-white rounded-circle me-8"></span>
                    {{ event.speakers }}
                    <span class="text-black ms-5 fw-normal">Speakers</span>
                  </span>
                  <span class="mt-5 text-black fw-medium d-flex align-items-center">
                    <span class="w-6 h-6 d-block bg-white rounded-circle me-8"></span>
                    {{ event.topics }}
                    <span class="text-black ms-5 fw-normal">Topics</span>
                  </span>
                </div>
              </div>
            </div>
            <span class="fw-medium text-secondary mt-10 mt-md-25 mb-5 mb-md-8 d-block">
              Start
              <span class="fw-bold text-black"> in {{ event.start }} mins </span>
            </span>
            <div
              class="progress"
              role="progressbar"
              :aria-valuenow="event.progress"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar" :style="{ width: event.progress + '%' }"></div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-15 mt-md-30">
              <button type="button" class="fs-13 fw-medium text-black p-0 bg-transparent border-0">
                Skip This
              </button>
              <button
                type="button"
                class="card-link-btn border-0 bg-transparent p-0 text-decoration-none text-primary fw-medium position-relative d-inline-block"
              >
                Join Event
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
