<script setup lang="ts">
/**
 * TasksList.vue
 *
 * Renders a card list of tasks with edit/delete controls.
 */
import { tasks } from './data/tasks-list.data'

defineOptions({ name: 'TasksList' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white to-do-list-box letter-spacing">
    <div
      class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
    >
      <h5 class="card-title fw-bold mb-0">Tasks</h5>
      <div class="d-flex align-items-center mt-10 mt-md-0">
        <form class="search-box position-relative me-15">
          <input
            type="text"
            class="form-control shadow-none text-black rounded-0 border-0"
            placeholder="Search task"
          />
          <button type="submit" class="bg-transparent text-primary transition p-0 border-0">
            <i class="flaticon-search-interface-symbol"></i>
          </button>
        </form>
        <button
          type="button"
          class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block"
        >
          <i class="flaticon-dots"></i>
        </button>
      </div>
    </div>
    <div
      class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
    >
      <ul class="to-do-list ps-0 list-unstyled mb-0">
        <li
          v-for="task in tasks"
          :key="task.id"
          class="to-do-list-item d-sm-flex align-items-center justify-content-between"
        >
          <div class="form-check form-check-primary mb-0 fs-md-15 fs-lg-16 text-black fw-medium">
            <input class="form-check-input shadow-none" type="checkbox" :id="task.id" />
            <label class="form-check-label" :for="task.id">{{ task.title }}</label>
            <span class="fs-12 text-muted fw-normal ms-5">{{ task.date }}</span>
          </div>
          <div class="action-buttons mt-10 mt-sm-0 d-flex align-items-center">
            <button class="bg-transparent p-0 border-0 text-black transition lh-1">
              <i class="ph-duotone ph-pen"></i>
            </button>
            <button class="bg-transparent p-0 border-0 text-black transition lh-1 ms-10 ms-md-20">
              <i class="ph-duotone ph-trash"></i>
            </button>
          </div>
        </li>
      </ul>
      <a
        href="#"
        class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block mt-10 mt-sm-25"
        data-bs-toggle="modal"
        data-bs-target="#createNewTaskModal"
        >Add A New Task</a
      >
    </div>
  </div>
</template>
