<script setup lang="ts">
/**
 * UnsolvedTickets Component
 * -----------------------------------------------------------------------------
 * Displays a table of support tickets that have not yet been resolved,
 * including client name, subject, status, priority, and assigned agent.
 *
 * @usage
 * <UnsolvedTickets />
 *
 * @note
 * The ticket data is imported from an external data file to keep the
 * component clean and maintainable. Images are dynamically referenced.
 */

import { unsolvedTicketsData } from './data/unsolved-tickets-data'
defineOptions({ name: 'UnsolvedTickets' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <div class="mb-15 mb-md-25 d-sm-flex align-items-center justify-content-between">
        <h6 class="card-title fw-bold mb-0">Unsolved Tickets</h6>
        <div class="d-flex align-items-center mt-12 mt-md-0">
          <form class="me-15">
            <div class="input-group">
              <input
                type="text"
                class="form-control shadow-none fw-medium ps-12 pt-8 pb-8 pe-12 letter-spacing"
                placeholder="Search"
              />
              <button
                class="default-btn position-relative transition border-0 text-white ps-12 pe-12 rounded-1"
                type="button"
              >
                <i class="flaticon-search-interface-symbol position-relative"></i>
              </button>
            </div>
          </form>
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
                  <i class="flaticon-view lh-1 me-8"></i> View
                </a>
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="flaticon-pen lh-1 me-8"></i> Edit
                </a>
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="flaticon-delete lh-1 me-8"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0">
                CLIENT
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                SUBJECT
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                STATUS
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                PRIORITY
              </th>
              <th
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              >
                AGENT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ticket, index) in unsolvedTicketsData" :key="index">
              <th class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0">
                <div class="d-flex align-items-center">
                  <div class="form-check mb-0">
                    <input class="form-check-input shadow-none" type="checkbox" />
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      :src="ticket.image"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    {{ ticket.client }}
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium">
                <router-link to="/ticket-preview" class="text-decoration-none">
                  {{ ticket.subject }}
                </router-link>
              </td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge" :class="ticket.statusVariant">{{ ticket.status }}</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-uppercase" :class="ticket.priorityColor">
                {{ ticket.priority }}
              </td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0">
                <select class="form-select shadow-none rounded-0 fs-md-15 fs-lg-16 fw-medium">
                  <option
                    v-for="(agent, idx) in ticket.agents"
                    :key="idx"
                    :selected="agent === ticket.selectedAgent"
                  >
                    {{ agent }}
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
