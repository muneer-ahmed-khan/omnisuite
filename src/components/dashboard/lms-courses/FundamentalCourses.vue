<script setup lang="ts">
/**
 * FundamentalCourses Component
 * -----------------------------------------------------------------------------
 * Displays a list of fundamental courses, each with an icon, title, description,
 * lesson count, student count, and duration. Data is statically imported to keep
 * the component focused on rendering logic.
 *
 * @usage
 * <FundamentalCourses />
 *
 * @data
 * - Imported from `@/data/fundamental-courses.data.ts`
 */

import { fundamentalCourses } from './data/fundamental-courses.data'

defineOptions({ name: 'FundamentalCourses' })
</script>

<template>
  <div class="row">
    <div class="col-lg-6" v-for="course in fundamentalCourses" :key="course.id">
      <div
        :class="['card mb-25 border-0 rounded-0 letter-spacing courses-list-box', course.bgClass]"
      >
        <div class="card-body">
          <div class="title position-relative mb-8 mb-md-10">
            <div
              :class="['icon text-center rounded-circle position-relative', course.bgClassImage]"
            >
              <img
                :src="course.image"
                class="position-absolute start-0 end-0 ms-auto me-auto"
                alt="icon"
              />
            </div>
            <h6 class="mb-0 text-black fw-bold">
              {{ course.title }}
            </h6>
          </div>
          <p class="fs-md-15 fs-lg-16 text-black-emphasis mb-15 fw-medium">
            {{ course.shortDesc }}
          </p>
          <ul class="list ps-0 mb-0 list-unstyled">
            <li class="d-inline-block bg-white fs-13 text-muted fw-medium">
              <span class="fw-bold text-primary">{{ course.lessons }}</span>
              Lessons
            </li>
            <li class="d-inline-block bg-white fs-13 text-muted fw-medium">
              <span class="fw-bold text-primary">{{ course.students }}</span>
              Students
            </li>
            <li class="d-inline-block bg-white fs-13 text-muted fw-medium">
              <span class="fw-bold text-primary">{{ course.mins }}</span>
              Mins
            </li>
          </ul>
        </div>
        <router-link
          to="/course-details"
          class="link-btn d-block text-decoration-none text-primary fw-medium position-relative"
        >
          <span class="d-inline-block position-relative">View Details</span>
          <i class="ph ph-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
