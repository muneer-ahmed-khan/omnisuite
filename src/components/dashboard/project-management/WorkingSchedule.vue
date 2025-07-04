<script setup lang="ts">
/**
 * @component WorkingSchedule
 *
 * @description
 * This component displays a working schedule card that shows:
 * - A header with a title and a select dropdown for filtering by day.
 * - A list of schedule dates.
 * - A section with today's schedule info along with an "Add A Schedule" action.
 * - A dynamically rendered list of schedule items (loaded from static data) that displays
 *   schedule details including time, title, lead information, and a link to view more details.
 *
 * @usage
 * <template>
 *   <WorkingSchedule />
 * </template>
 *
 * @dataSources
 * - The schedule data is imported from "data/working-schedule.data.ts", which is based on
 *   the provided JSON data.
 *
 * @specialLogic
 * - The schedule list is rendered dynamically using a v‑for loop.
 * - Styles and markup structure are preserved as in the original design.
 */

defineOptions({ name: 'WorkingSchedule' })

import { schedules } from './data/working-schedule.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white working-schedule-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-15 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Working Schedule</h5>
        <div
          class="card-select mt-10 mt-sm-0 d-inline-block d-sm-flex align-items-center ps-10 pe-10 pt-5 pb-5"
        >
          <span class="fw-medium text-muted me-8">Show</span>
          <select
            class="form-select shadow-none text-black border-0 ps-0 pt-0 pb-0 pe-20 fs-14 fw-medium"
          >
            <option value="1" class="fw-medium" selected>All</option>
            <option value="2" class="fw-medium">Sat</option>
            <option value="3" class="fw-medium">Sun</option>
            <option value="4" class="fw-medium">Mon</option>
            <option value="5" class="fw-medium">Tue</option>
            <option value="6" class="fw-medium">Wed</option>
            <option value="7" class="fw-medium">Thu</option>
            <option value="8" class="fw-medium">Fri</option>
          </select>
        </div>
      </div>
      <ul class="schedule-date-list ps-0 mb-0 list-unstyled d-flex flex-wrap text-center">
        <li class="col text-black fw-medium">
          <span class="d-block fw-bold text-dark-emphasis">Sat</span>
          04
        </li>
        <li class="col text-black fw-medium">
          <span class="d-block fw-bold text-dark-emphasis">Sun</span>
          05
        </li>
        <li class="col text-black fw-medium">
          <span class="d-block fw-bold text-dark-emphasis">Mon</span>
          06
        </li>
        <li class="col text-black fw-medium active">
          <span class="d-block fw-bold text-dark-emphasis">Tue</span>
          07
        </li>
        <li class="col text-black fw-medium">
          <span class="d-block fw-bold text-dark-emphasis">Wed</span>
          08
        </li>
        <li class="col text-black fw-medium">
          <span class="d-block fw-bold text-dark-emphasis">Thu</span>
          09
        </li>
        <li class="col text-black fw-medium">
          <span class="d-block fw-bold text-dark-emphasis">Fri</span>
          10
        </li>
      </ul>
      <div class="mt-15 mt-md-20 mb-12 d-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Todays Schedule</h6>
        <a
          href="javascript:void(0);"
          class="card-link-btn text-decoration-none text-primary fw-medium position-relative"
        >
          Add A Schedule
        </a>
      </div>
      <ul class="info-list ps-0 mb-0 list-unstyled">
        <li class="d-inline-block">
          <div class="d-flex align-items-center">
            <span class="d-block w-10 h-10 bg-primary rounded-circle me-8"></span>
            <span class="fw-bold">
              2
              <span class="text-muted fw-semibold">Meetings</span>
            </span>
          </div>
        </li>
        <li class="d-inline-block">
          <div class="d-flex align-items-center">
            <span class="d-block w-10 h-10 bg-success rounded-circle me-8"></span>
            <span class="fw-bold">
              2
              <span class="text-muted fw-semibold">Discussion</span>
            </span>
          </div>
        </li>
        <li class="d-inline-block">
          <div class="d-flex align-items-center">
            <span class="d-block w-10 h-10 bg-info rounded-circle me-8"></span>
            <span class="fw-bold">
              1
              <span class="text-muted fw-semibold">Reviews</span>
            </span>
          </div>
        </li>
      </ul>
      <div class="schedule-list mt-15 mt-md-20">
        <div
          v-for="schedule in schedules"
          :key="schedule.id"
          :class="[
            'list-item pt-15 pb-15 pt-md-20 pb-md-20 ps-20 pe-15 position-relative d-sm-flex justify-content-between align-items-center',
            schedule.bgClass,
          ]"
        >
          <div class="content">
            <div class="d-flex align-items-center mb-5">
              <h6 class="fw-medium mb-0">
                {{ schedule.time }}
              </h6>
              <div
                :class="[
                  'ms-10 icon rounded-circle text-center position-relative',
                  schedule.iconClass,
                ]"
              >
                <i class="flaticon-bell-2"></i>
              </div>
            </div>
            <span class="d-block text-black fw-semibold fs-md-15 mb-1">
              {{ schedule.title }}
            </span>
            <span class="d-block text-muted fs-12 fw-medium">
              Lead by <span :class="schedule.class">{{ schedule.leadBy }}</span>
            </span>
          </div>
          <router-link
            to="/project-details"
            class="card-btn bg-white d-inline-block fw-medium text-decoration-none transition ps-15 pe-15 pt-7 pb-7 border-0 mt-12 mt-sm-0"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
