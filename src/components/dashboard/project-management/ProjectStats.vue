<script setup lang="ts">
/**
 * @component ProjectStats
 *
 * @description
 * This component renders a card with a table that displays project statistics.
 * Each row in the table shows details for a project including its image, title,
 * team members, budget, due date, progress (with a progress bar), status, and
 * a chart image. Additionally, there is a dropdown for each row providing actions
 * like View, Edit, and Delete. The component leverages auto-imported router-link
 * for navigation.
 *
 * @usage
 * <template>
 *   <ProjectStats />
 * </template>
 *
 * @dataSources
 * - The static project stats data is imported from "data/project-stats.data.ts".
 *
 * @specialLogic
 * - Dynamic image paths are resolved using new URL with import.meta.url.
 * - The list of project statistics is rendered using a v-for loop.
 */

defineOptions({ name: 'ProjectStats' })

import { projectStats } from './data/project-stats.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Project Stats</h5>
        <router-link
          to="/projects-grid"
          class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5"
        >
          View Details
        </router-link>
      </div>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                PROJECT
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                TEAM MEMBERS
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                BUDGET
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                DUE DATE
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                PROGRESS
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                STATUS
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                CHART
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stat in projectStats" :key="stat.id">
              <th class="shadow-none title lh-1 fw-medium fs-md-15 fs-lg-16 ps-0">
                <div class="d-flex align-items-center">
                  <img
                    :src="stat.image"
                    width="37"
                    height="37"
                    class="rounded-1 me-10"
                    alt="project-image"
                  />
                  <span class="d-block">{{ stat.title }}</span>
                </div>
              </th>
              <td class="shadow-none lh-1">
                <div class="users-list d-flex align-items-center">
                  <div
                    v-for="team in stat.teamMembers"
                    :key="team.id"
                    class="rounded-circle text-center"
                  >
                    <img :src="team.image" class="rounded-circle" alt="user" />
                  </div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">${{ stat.budget }}</td>
              <td class="shadow-none lh-1 fw-bold text-body-tertiary">
                {{ stat.dueDate }}
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <div
                  class="progress"
                  role="progressbar"
                  :aria-valuenow="stat.progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" :style="{ width: stat.progress + '%' }"></div>
                </div>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span :class="['badge fs-13', stat.class]">{{ stat.status }}</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary">
                <img :src="stat.chartImage" alt="chart" />
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                        <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                        View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                        <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                        <i class="flaticon-delete lh-1 me-8 position-relative top-1"></i>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
