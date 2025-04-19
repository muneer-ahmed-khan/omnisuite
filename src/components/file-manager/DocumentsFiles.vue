n
<script setup lang="ts">
/**
 * DocumentsFiles Component
 *
 * A component that displays a list of document files with icons and names. Each document is clickable and links to a file manager page.
 * The component dynamically renders data passed from a separate data file for improved scalability and maintainability.
 *
 * @component
 * @example
 * <DocumentsFiles />
 *
 * Data:
 * - Displays document file icons and names.
 * - The component is structured to render the documents in a grid layout, with each document linking to a file manager page.
 */

import { defineOptions } from 'vue'
import { documentsFilesData } from './data/documents-files.data'

// Define component options
defineOptions({ name: 'DocumentsFiles' })

// No props for this component as data is imported directly
const files = documentsFilesData
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
      <h5 class="card-title fw-bold mb-15 mb-sm-20 mb-md-25">Documents</h5>
      <div class="row">
        <div
          v-for="file in files"
          :key="file.name"
          class="col-sm-6 col-md-4 col-lg-4 col-xxl-3 col-xxxl-2"
        >
          <div
            class="bg-gray text-center rounded-1 mb-15 mb-sm-20 mb-md-25 pt-35 pb-35 ps-15 pe-15"
          >
            <img :src="file.iconUrl" class="d-block ms-auto me-auto mb-15" :alt="file.iconAlt" />
            <router-link
              :to="file.link"
              class="d-inline-block text-decoration-none text-black fs-md-15 fs-lg-16 fw-medium"
            >
              {{ file.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="pagination-area d-md-flex justify-content-between align-items-center">
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">12</span> out of <span class="fw-bold">100</span> results
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
