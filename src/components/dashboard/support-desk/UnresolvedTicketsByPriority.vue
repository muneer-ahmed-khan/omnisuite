<script setup lang="ts">
/**
 * UnresolvedTicketsByPriority Component
 * -----------------------------------------------------------------------------
 * This component displays unresolved tickets by priority in a bar chart.
 * It shows the total unresolved tickets across four priority levels
 * (Urgent, High, Medium, Low) and provides a visual representation
 * using a bar chart.
 *
 * @usage
 * <UnresolvedTicketsByPriority />
 *
 * @note
 * The static data for unresolved tickets and chart configuration is imported
 * from separate files.
 */

import {
  unresolvedTicketsData,
  unresolvedTicketsChart,
} from './data/unresolved-tickets-by-priority.data'

defineOptions({ name: 'UnresolvedTicketsByPriority' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white unresolved-tickets-box">
    <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
      <div class="mb-md-10 d-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Unresolved Tickets By Priority</h6>
        <div class="dropdown">
          <button
            class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
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
      </div>
      <div class="row">
        <div class="col-lg-9 col-xxxl-10 col-md-10">
          <div id="unresolvedTicketsChart" class="chart">
            <apexchart
              type="bar"
              height="337"
              :options="unresolvedTicketsChart"
              :series="unresolvedTicketsData"
            ></apexchart>
          </div>
        </div>
        <div class="col-lg-3 col-xxxl-2 col-md-2">
          <ul class="list ps-0 mb-0 mt-15 mt-md-25 list-unstyled">
            <li v-for="(ticket, index) in unresolvedTicketsData" :key="index">
              <div class="d-flex align-items-center mb-5">
                <span
                  :class="`d-block w-10 h-10 bg-primary rounded-circle opacity-${(index + 1) * 25}`"
                ></span>
                <span class="fs-12 fw-medium text-black-emphasis text-uppercase lh-1 ms-8">
                  {{ ticket.name }}
                </span>
              </div>
              <h4 class="mb-0 fw-black">{{ ticket.data.reduce((sum, num) => sum + num, 0) }}</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
