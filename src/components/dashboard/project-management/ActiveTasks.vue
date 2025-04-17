<script setup lang="ts">
/**
 * ActiveTasks Component
 * -----------------------------------------------------------------------------
 * This component displays a list of active tasks along with relevant details such
 * as task category, associated users, and progress percentage. The tasks are
 * grouped by their category and each task shows a list of users (via avatar images)
 * and progress status.
 *
 * @usage
 * <ActiveTasks />
 *
 * @data
 * The data is statically imported from the file:
 *   - data/active-tasks.data.ts
 * and follows the type definition from:
 *   - types/active-tasks.types.ts
 *
 * @logic
 * - Uses v-for for iterating over tasks and their user lists, ensuring clean and
 *   maintainable markup.
 * - Image paths are resolved using the new URL constructor to properly link assets.
 *
 * @note
 * For Axios chart data requests elsewhere in the project, use the defined AxiosOption
 * type for proper typing of the response data.
 */

defineOptions({ name: 'ActiveTasks' })

import { tasks } from './data/active-tasks.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white active-tasks-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">Active Tasks</h5>
        <div class="card-buttons">
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 active"
          >
            Day
          </a>
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Week
          </a>
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Month
          </a>
          <a
            href="javascript:void(0);"
            class="card-btn mt-10 mt-sm-0 d-inline-block fw-medium text-decoration-none transition ps-10 pe-10 pt-5 pb-5 ms-5"
          >
            Year 2023
          </a>
        </div>
      </div>
      <ul class="active-tasks-list ps-0 list-unstyled mb-0">
        <li
          class="active-task-list-item d-sm-flex align-items-center"
          v-for="task in tasks"
          :key="task.id"
        >
          <span class="d-block fs-md-15 fs-lg-16 text-black fw-medium">
            {{ task.category }}
          </span>
          <div
            class="task-info mt-8 mt-sm-0 d-flex justify-content-between align-items-center pe-15"
          >
            <div :class="['users-list d-flex align-items-center pe-15 pe-md-40', task.bgClass]">
              <div class="rounded-circle text-center" v-for="user in task.usersList" :key="user.id">
                <img :src="user.image" class="rounded-circle" alt="user" />
              </div>
              <span class="fw-medium d-block text-white ms-20">
                {{ task.title }}
              </span>
            </div>
            <span :class="['fw-bold', task.class]"> {{ task.percent }}% </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
