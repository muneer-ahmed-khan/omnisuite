<script setup lang="ts">
/**
 * ToDoList Component
 * -----------------------------------------------------------------------------
 * Displays a list of tasks with checkboxes and optional dropdown actions.
 * Tasks are imported from a static data file.
 *
 * @usage
 * <ToDoList />
 */

import { toDoList } from './data/crm-to-do-list.data'
import type { ToDoListItem } from './types/crm-to-do-list.types'

const lists: ToDoListItem[] = toDoList

defineOptions({ name: 'ToDoList' })
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

      <ul class="to-do-list style-three ps-0 list-unstyled mb-0">
        <li
          class="to-do-list-item d-flex align-items-center justify-content-between"
          v-for="list in lists"
          :key="list.id"
        >
          <div>
            <div :class="['form-check mb-0 fs-md-15 fs-lg-16 text-black fw-medium', list.class]">
              <input class="form-check-input shadow-none" type="checkbox" :id="'task' + list.id" />
              <label class="form-check-label" :for="'task' + list.id">
                {{ list.label }}
              </label>
            </div>
            <span class="d-block text-muted mt-5 ms-30">
              {{ list.shortText }}
            </span>
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
