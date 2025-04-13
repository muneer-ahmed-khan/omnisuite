<script setup lang="ts">
/**
 * AppsDropdown Component
 *
 * Displays quick links to popular apps (GitHub, Slack, Dropbox, etc.)
 * inside a dropdown using BaseDropdown and BaseButton.
 *
 * @component
 * @example
 * <AppsDropdown />
 */
import { apps } from './data/apps-dropdown.data'

defineOptions({ name: 'AppsDropdown' })
</script>

<template>
  <BaseDropdown
    dropdownClass="apps-dropdown"
    menuClass="pb-0 rounded-0 bg-white border-0 start-auto end-0"
  >
    <!-- Trigger Slot -->
    <template #trigger="{ menuId }">
      <BaseButton
        type="button"
        className="dropdown-toggle p-0 position-relative bg-transparent border-0 transition lh-1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        :aria-controls="menuId"
      >
        <template #icon>
          <i class="flaticon-dashboard"></i>
        </template>
      </BaseButton>
    </template>

    <!-- Menu Slot -->
    <template #menu>
      <div class="title d-flex align-items-center justify-content-between">
        <span class="text-black fw-bold">Apps &amp; Social</span>
      </div>
      <ul class="ps-0 mb-0 list-unstyled dropdown-body">
        <li
          v-for="app in apps"
          :key="app.id"
          class="position-relative fw-semibold text-black-emphasis"
        >
          <div class="icon rounded-circle position-absolute text-center">
            <img :src="app.image" :alt="app.alt" />
          </div>
          {{ app.name }}
          <a
            :href="app.href"
            target="_blank"
            rel="noopener noreferrer"
            class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"
          ></a>
        </li>
      </ul>
    </template>
  </BaseDropdown>
</template>
