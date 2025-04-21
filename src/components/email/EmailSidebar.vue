<script setup lang="ts">
/**
 * EmailsSidebar.vue
 *
 * Renders the email sidebar with mailbox folders and filters, including a Compose button.
 * Static data imported from `emails-sidebar.data.ts`.
 */

defineOptions({ name: 'EmailsSidebar' })

import { mailboxItems, filterItems } from './data/emails-sidebar.data'
import { defineEmits } from 'vue'

const emit = defineEmits<{ (e: 'compose'): void }>()

function handleCompose() {
  emit('compose')
}
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white box-shadow emails-sidebar-box">
    <div class="card-body p-15 p-sm-20 p-md-25 letter-spacing">
      <form class="search-box position-relative mb-15">
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
        class="d-block text-center w-100 bg-primary border-0 box-shadow fw-medium text-white rounded-1 pt-12 pb-12 ps-25 pe-25"
        @click="handleCompose"
      >
        Compose Email
      </button>

      <span
        class="sub-title text-uppercase mt-20 mt-md-30 mb-15 mb-md-20 fw-medium fs-13 text-muted d-block"
      >
        MailBox
      </span>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li v-for="item in mailboxItems" :key="item.label">
          <component
            :is="item.route ? 'router-link' : 'a'"
            :to="item.route"
            href="javascript:void(0);"
            class="d-block text-decoration-none lh-1 transition"
            :class="{ active: item.isActive }"
          >
            <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
              <i :class="item.icon"></i>
              {{ item.label }}
            </div>
            <span
              v-if="item.count"
              :class="[
                item.badgeColor,
                'rounded-circle dot-badge bg-danger text-white d-inline-block text-center fs-12 fw-semibold',
              ]"
            >
              {{ item.count }}
            </span>
          </component>
        </li>
      </ul>

      <span
        class="sub-title text-uppercase mt-20 mt-md-30 mb-15 mb-md-20 fw-medium fs-13 text-muted d-block"
      >
        Filters
      </span>
      <ul class="list ps-0 mb-0 list-unstyled">
        <li v-for="filter in filterItems" :key="filter.label">
          <a href="javascript:void(0);" class="d-block text-decoration-none lh-1 transition">
            <div class="title fs-md-15 fs-lg-16 fw-medium text-black">
              <i :class="filter.icon"></i>
              {{ filter.label }}
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
