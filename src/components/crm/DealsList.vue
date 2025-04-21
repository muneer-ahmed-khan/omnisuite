<script setup lang="ts">
/**
 * DealsList.vue
 *
 * Renders a deals table with action dropdowns.
 */
import { deals } from './data/deals-list.data'

/**
 * Returns the badge class for a given deal status.
 */
const badgeClass = (status: string) => {
  switch (status) {
    case 'Won Deal':
      return 'text-outline-success'
    case 'New Deal':
      return 'text-outline-info'
    case 'Cancelled':
      return 'text-outline-danger'
    default:
      return ''
  }
}

defineOptions({ name: 'DealsList' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
    >
      <h5 class="card-title fw-bold mb-0">Deals</h5>
      <div class="d-flex align-items-center mt-10 mt-md-0">
        <form class="search-box position-relative me-15">
          <input
            type="text"
            class="form-control shadow-none text-black rounded-0 border-0"
            placeholder="Search deal"
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
                Deal Name
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Amount
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Status
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Probability
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Closing Date
              </th>
              <th
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="deal in deals" :key="deal.id">
              <th class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0">
                <div class="form-check d-flex align-items-center mb-0">
                  <input class="form-check-input shadow-none me-8 mt-0" type="checkbox" />
                  {{ deal.name }}
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ deal.amount }}</td>
              <td class="shadow-none lh-1 fw-medium">
                <span class="badge" :class="badgeClass(deal.status)">{{ deal.status }}</span>
              </td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ deal.probability }}</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ deal.closingDate }}</td>
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
        <div class="d-md-flex mt-15 mt-md-25 mb-0 justify-content-between align-items-center">
          <a
            href="#"
            class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block"
            data-bs-toggle="modal"
            data-bs-target="#createNewDealModal"
            >Add A New Deal</a
          >
          <div class="pagination-area d-md-flex align-items-center mt-10 mt-md-0">
            <p class="mb-0 text-paragraph">
              Showing <span class="fw-bold">11</span> out of
              <span class="fw-bold">134</span> results
            </p>
            <nav class="mt-12 mt-md-0 ms-md-20">
              <ul class="pagination mb-0">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <i class="flaticon-chevron-1"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <i class="flaticon-chevron"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
