<script setup lang="ts">
/**
 * RecentFiles Component
 *
 * A table displaying a list of recent files with relevant details such as owner, size, and listed date.
 * The component dynamically renders data passed from a separate data file.
 *
 * @component
 * @example
 * <RecentFiles />
 *
 * Data:
 * - Displays a list of recent files with their respective name, owner, file size, listed date, and file item.
 * - The component is designed to be reusable and easily extended with additional file-related functionality.
 */

import { recentFilesData } from './data/recent-files.data'

// Define component options
defineOptions({ name: 'RecentFiles' })

// No props for this component as data is imported directly
const files = recentFilesData
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-sm-20 mb-md-25">Recent Files</h5>
      <div class="table-responsive">
        <table class="table text-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
              >
                Name
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Owner
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                File Size
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                Listed Date
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
              >
                File Item
              </th>
              <th
                scope="col"
                class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in files" :key="file.name">
              <th class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0">
                <div class="d-flex align-items-center fs-md-15 fs-lg-16 fw-medium">
                  <img :src="file.iconUrl" width="25" class="me-12" alt="folder-image" />
                  {{ file.name }}
                </div>
              </th>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ file.owner }}</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ file.fileSize }}</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ file.listedDate }}</td>
              <td class="shadow-none lh-1 fw-medium text-black-emphasis">{{ file.fileItem }}</td>
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
          Showing <span class="fw-bold">05</span> out of <span class="fw-bold">100</span> results
        </p>
        <nav class="mt-15 mt-md-0">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous"
                ><i class="flaticon-chevron-1"></i
              ></a>
            </li>
            <li class="page-item"><a class="page-link active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next"><i class="flaticon-chevron"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
