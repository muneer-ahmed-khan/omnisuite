<script setup lang="ts">
/**
 * EmailsList.vue
 *
 * Renders an emails table with status badges.
 */
import { emails } from './data/emails-list.data'

const badgeClass = (status: string) =>
  ({
    Bounce: 'text-outline-warning',
    Draft: 'text-outline-info',
    Spam: 'text-outline-danger',
    Sent: 'text-outline-success',
    Delivered: 'text-outline-primary',
  })[status] || ''

defineOptions({ name: 'EmailsList' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
    >
      <h5 class="card-title fw-bold mb-0">Emails</h5>
      <div class="d-flex align-items-center mt-10 mt-md-0">
        <form class="search-box position-relative me-15">
          <input
            type="text"
            class="form-control shadow-none text-black rounded-0 border-0"
            placeholder="Search email"
          />
          <button type="submit" class="bg-transparent text-primary transition p-0 border-0">
            <i class="flaticon-search-interface-symbol"></i>
          </button>
        </form>
        <button
          type="button"
          class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block mt-10 mt-sm-0"
        >
          <i class="flaticon-dots"></i>
        </button>
      </div>
    </div>
    <div
      class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
    >
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0">
                Subject
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Sent By
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Status
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Date
              </th>
              <th
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="email in emails" :key="email.id">
              <th
                class="shadow-none lh-1 fw-medium text-black-emphasis title fs-md-15 fs-lg-16 ps-0"
              >
                {{ email.subject }}
                <span class="d-block fs-13 mt-10 text-muted fw-normal">{{ email.from }}</span>
              </th>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ email.sender }}</td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge" :class="badgeClass(email.status)">{{ email.status }}</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ email.date }}</td>
              <td class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                    data-bs-toggle="dropdown"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="#"
                        ><i class="flaticon-view lh-1 me-8 position-relative top-1"></i>View</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="#"
                        ><i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>Edit</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="#"
                        ><i class="flaticon-delete lh-1 me-8 position-relative top-1"></i>Delete</a
                      >
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
