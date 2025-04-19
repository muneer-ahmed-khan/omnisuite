<script setup lang="ts">
/**
 * AssetsFiles Component
 * -----------------------------------------------------------------------------
 * Displays a grid of asset categories (folders) with file counts and total sizes.
 * Each item supports actions (View/Edit/Delete) via a dropdown menu and links
 * into the file manager.
 *
 * @component
 * @example
 * <AssetsFiles />
 *
 * @data
 * Imported from `assets-files.data.ts`.
 */

import { assetsFilesData, folderIconUrl } from './data/assets-files.data'

defineOptions({ name: 'AssetsFiles' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-sm-20 mb-md-25">Assets</h5>
      <div class="row">
        <div
          class="col-sm-6 col-md-4 col-lg-4 col-xxl-3 col-xxxl-2"
          v-for="asset in assetsFilesData"
          :key="asset.id"
        >
          <div class="bg-gray text-center rounded-1 mb-15 mb-sm-20 mb-md-25 p-15 p-md-20">
            <div class="mb-30 d-flex align-items-center justify-content-between">
              <div class="form-check mb-0">
                <input class="form-check-input shadow-none" type="checkbox" />
              </div>
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
                      <i class="flaticon-view lh-1 me-8 position-relative top-1"></i>
                      View
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                      <i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                      <i class="flaticon-delete lh-1 me-8 position-relative top-1"></i>
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img :src="folderIconUrl" class="d-block ms-auto me-auto mb-15" alt="folder" />
            <router-link
              :to="asset.link"
              class="d-inline-block text-decoration-none text-black fs-md-15 fs-lg-16 fw-medium"
            >
              {{ asset.name }}
            </router-link>
            <div class="mt-30 d-flex align-items-center justify-content-between">
              <span class="d-block fs-md-15 fs-lg-16 text-black-emphasis">{{ asset.files }}</span>
              <span class="d-block fs-md-15 fs-lg-16 text-black-emphasis">{{ asset.size }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-area d-md-flex justify-content-between align-items-center">
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">{{ assetsFilesData.length }}</span> out of
          <span class="fw-bold">100</span> results
        </p>
        <nav class="mt-15 mt-md-0">
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
</template>
