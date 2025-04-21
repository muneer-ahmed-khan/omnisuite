<script setup lang="ts">
/**
 * CustomersList.vue
 *
 * A component that displays a list of customers in a tabular format.
 * Includes search, filter, export, and dropdown actions per customer.
 * Data and types are imported from `customers-list.data.ts` and `customers-list.types.ts`.
 */
import { customers } from './data/customers-list.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div
      class="card-head box-shadow bg-white d-lg-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
    >
      <div class="d-sm-flex align-items-center">
        <button
          class="default-btn position-relative transition border-0 fw-medium text-white pt-11 pb-11 ps-25 pe-25 pt-md-12 pb-md-12 ps-md-30 pe-md-30 rounded-1 bg-success fs-md-15 fs-lg-16 d-inline-block me-10 mb-10 mb-lg-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#createNewCustomerModal"
        >
          Add New Customer
          <i class="flaticon-plus position-relative ms-5 fs-12"></i>
        </button>
        <button
          class="default-outline-btn position-relative transition fw-medium text-black pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-30 pe-md-30 rounded-1 bg-transparent fs-md-15 fs-lg-16 d-inline-block mb-10 mb-lg-0"
          type="button"
        >
          Export
          <i class="flaticon-file-1 position-relative ms-5 top-2 fs-15"></i>
        </button>
      </div>
      <div class="d-flex align-items-center">
        <form class="search-box position-relative me-15">
          <input
            type="text"
            class="form-control shadow-none text-black rounded-0 border-0"
            placeholder="Search customer"
          />
          <button type="submit" class="bg-transparent text-primary transition p-0 border-0">
            <i class="flaticon-search-interface-symbol"></i>
          </button>
        </form>
        <button
          class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block"
          type="button"
        >
          <i class="flaticon-dots"></i>
        </button>
      </div>
    </div>

    <!-- Add New Customer Modal -->
    <div
      class="modal fade createNewModal"
      id="createNewCustomerModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-15 p-md-40">
          <div class="modal-header d-block ps-0 pe-0 pt-0 pb-15 pb-md-25">
            <h5 class="modal-title fw-bold text-black">Add New Customer</h5>
          </div>
          <div class="modal-body ps-0 pe-0 pb-0 pt-15 pt-md-25">
            <form>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group mb-15 mb-md-25">
                    <label class="d-block text-black fw-semibold mb-10">Name</label>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="e.g. Johny Vino"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group mb-15 mb-md-25">
                    <label class="d-block text-black fw-semibold mb-10">Display Name</label>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="e.g. Johny"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group mb-15 mb-md-25">
                    <label class="d-block text-black fw-semibold mb-10">Email</label>
                    <input
                      type="email"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="e.g. johny12345@gmail.com"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group mb-15 mb-md-25">
                    <label class="d-block text-black fw-semibold mb-10">Phone No</label>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="e.g. +000 4356 654"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group mb-15 mb-md-25">
                    <label class="d-block text-black fw-semibold mb-10">Country</label>
                    <select class="form-select shadow-none fw-semibold rounded-0">
                      <option selected>Australia</option>
                      <option value="1">Canada</option>
                      <option value="2">Japan</option>
                      <option value="3">Spain</option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group mb-15 mb-md-25">
                    <label class="d-block text-black fw-semibold mb-10">Shipping Address</label>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="e.g. 32 New Castle, UK-12765"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group mb-15 mb-md-25">
                    <label class="d-block text-black fw-semibold mb-10">Billing Address</label>
                    <input
                      type="text"
                      class="form-control shadow-none rounded-0 text-black"
                      placeholder="e.g. 32 New Castle, UK-12765"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <label class="d-block text-black fw-semibold mb-10">Communication</label>
                  <div
                    class="form-check fs-md-15 fs-lg-16 text-black mb-0 d-inline-block me-15 me-md-25"
                  >
                    <input
                      class="form-check-input shadow-none"
                      type="radio"
                      name="communicationRadio"
                      id="emailRadio"
                      checked
                    />
                    <label class="form-check-label" for="emailRadio">Email</label>
                  </div>
                  <div
                    class="form-check fs-md-15 fs-lg-16 text-black mb-0 d-inline-block me-15 me-md-25"
                  >
                    <input
                      class="form-check-input shadow-none"
                      type="radio"
                      name="communicationRadio"
                      id="smsRadio"
                    />
                    <label class="form-check-label" for="smsRadio">SMS</label>
                  </div>
                  <div
                    class="form-check fs-md-15 fs-lg-16 text-black mb-0 d-inline-block me-15 me-md-25"
                  >
                    <input
                      class="form-check-input shadow-none"
                      type="radio"
                      name="communicationRadio"
                      id="phoneRadio"
                    />
                    <label class="form-check-label" for="phoneRadio">Phone</label>
                  </div>
                </div>
              </div>

              <button
                class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 mt-15 mt-md-25"
                type="submit"
              >
                Add Customer
              </button>
            </form>
          </div>

          <button type="button" class="btn-close shadow-none"></button>
        </div>
      </div>
    </div>

    <div class="card-body p-15 p-sm-20 p-md-25">
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0">
                Customer Name
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                EMAIL
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                PHONE
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Received
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Due
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                Last Login
              </th>
              <th class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0">
                STATUS
              </th>
              <th
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer.email">
              <th class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0">
                <div class="d-flex align-items-center">
                  <div class="form-check mb-0">
                    <input class="form-check-input shadow-none" type="checkbox" />
                  </div>
                  <div class="d-flex align-items-center ms-5 fs-md-15 fs-lg-16">
                    <img
                      :src="customer.image"
                      class="rounded-circle me-8"
                      width="24"
                      height="24"
                      alt="user"
                    />
                    {{ customer.name }}
                  </div>
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ customer.email }}</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ customer.phone }}</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">
                {{ customer.received }}
              </td>
              <td class="shadow-none lh-1 fw-medium text-muted">{{ customer.due }}</td>
              <td class="shadow-none lh-1 fw-medium text-muted">{{ customer.lastLogin }}</td>
              <td class="shadow-none lh-1 fw-medium">
                <span
                  :class="`badge text-outline-${customer.status.toLowerCase() === 'active' ? 'success' : 'danger'}`"
                >
                  {{ customer.status }}
                </span>
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
                        <i class="flaticon-view lh-1 me-8 position-relative top-1"></i> View
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                        <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i> Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                        <i class="flaticon-delete lh-1 me-8 position-relative top-1"></i> Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="pagination-area d-md-flex mt-15 mt-sm-20 mt-md-25 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">11</span> out of <span class="fw-bold">134</span> results
        </p>
        <nav class="mt-15 mt-md-0">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <i class="flaticon-chevron-1"></i>
              </a>
            </li>
            <li class="page-item"><a class="page-link active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
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
</template>
