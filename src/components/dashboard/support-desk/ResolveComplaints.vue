<script setup lang="ts">
/**
 * ResolveComplaints Component
 * -----------------------------------------------------------------------------
 * This component displays a card that summarizes the average resolution
 * time for complaints. It shows the current resolve time as well as the goal
 * time and displays a progress bar to visualize performance.
 *
 * @usage
 * <ResolveComplaints />
 *
 * @note
 * This component uses static values for the time to resolve and goal times.
 * It is styled with pre-defined classes to ensure consistency across the project.
 */

defineOptions({ name: 'ResolveComplaints' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white time-duration-box">
    <div class="card-body letter-spacing">
      <div class="icon position-relative lh-1 text-info-light">
        <i class="flaticon-clock"></i>
      </div>
      <div class="content">
        <span class="d-block fw-bold text-dark-emphasis mb-1"> Time To Resolve Complaints </span>
        <h2 class="mb-0 fw-black">8 min 30s</h2>
      </div>
      <span class="fw-medium text-secondary d-block mb-5 mb-md-8">
        Goal
        <span class="fw-bold text-black">7 min 10 sec</span>
      </span>
      <div
        class="progress"
        role="progressbar"
        aria-valuenow="42"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar bg-info-light" style="width: 75%"></div>
      </div>
    </div>
  </div>
</template>
