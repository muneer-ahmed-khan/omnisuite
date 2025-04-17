<script setup lang="ts">
/**
 * @component ToDoList
 * @description
 * Displays a styled to-do list using static data from `to-do-list.data.ts`.
 * Each task includes a label, status color, and dropdown options.
 */

import { toDoList } from './data/to-do-list.data'

defineProps({
  list: Number,
})

defineOptions({
  name: 'ToDoList',
})
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white to-do-list-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between">
        <h5 class="card-title fw-bold mb-0">To Do List</h5>
        <router-link
          to="/to-do-list"
          class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-10 mt-sm-0"
        >
          Add A New Task
        </router-link>
      </div>

      <ul class="to-do-list ps-0 list-unstyled mb-0">
        <li
          class="to-do-list-item ps-8 pe-5 d-flex align-items-center justify-content-between"
          v-for="list in toDoList"
          :key="list.id"
        >
          <div :class="['form-check mb-0 fs-md-15 fs-lg-16 text-black fw-medium', list.class]">
            <input class="form-check-input shadow-none" type="checkbox" :id="'task' + list.id" />
            <label class="form-check-label" :for="'task' + list.id">
              {{ list.label }}
            </label>
          </div>
          <div class="dropdown">
            <button
              class="dropdown-toggle position-relative top-2 lh-1 bg-transparent border-0 shadow-none p-0 transition"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="flaticon-dots"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="flaticon-view lh-1 me-8"></i>
                  View
                </a>
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="flaticon-pen lh-1 me-8"></i>
                  Edit
                </a>
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="flaticon-delete lh-1 me-8"></i>
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
