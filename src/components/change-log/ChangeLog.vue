<script setup lang="ts">
/**
 * ChangeLog Component
 *
 * Displays a changelog of updates, fixes, and additions along with version history.
 * The data is statically sourced from `change-log.data.ts`.
 *
 * @component
 * @example
 * <ChangeLog />
 */

import { changelogEntries, versionHistory } from './data/change-log.data'

defineOptions({ name: 'ChangeLog' })
</script>

<template>
  <div class="row">
    <!-- Changelog Details -->
    <div class="col-md-8">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <div class="mb-15 mb-sm-20 mb-md-25">
            <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">
              Version 1.0 - May 15, 2023
            </h5>
          </div>

          <div v-for="(entry, index) in changelogEntries" :key="index">
            <div
              class="border-top border-success mb-15 mb-20 mt-15 mt-lg-20 border-opacity-10"
            ></div>
            <span class="badge" :class="`text-bg-${entry.color} fs-13`">{{ entry.type }}</span>
            <span class="d-flex align-items-center fs-md-15 fs-lg-16 fw-medium text-black mt-12">
              <span
                class="w-6 h-6 rounded-circle me-10"
                :class="`bg-${entry.color} d-inline-block`"
              ></span>
              {{ entry.description }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Version History -->
    <div class="col-md-4">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
          <h5 class="card-title fw-bold mb-0 fs-15 fs-md-16 fs-lg-18">Version History</h5>
          <div
            class="border-top border-success mb-15 mb-sm-20 mb-md-25 mt-5 mt-sm-10 mt-md-15 border-opacity-10"
          ></div>

          <div
            class="d-flex align-items-center justify-content-between mt-10"
            v-for="(item, index) in versionHistory"
            :key="index"
          >
            <span class="d-block fs-md-15 text-black fw-medium"> Version {{ item.version }} </span>
            <span class="d-block fs-md-15 text-paragraph fw-medium">
              {{ item.date }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
