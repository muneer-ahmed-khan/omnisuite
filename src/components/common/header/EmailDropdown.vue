<script setup lang="ts">
/**
 * EmailDropdown Component
 *
 * A dropdown component that displays recent message notifications.
 * Useful for dashboards or communication hubs.
 *
 * Features:
 * - Displays avatars, names, time stamps, and message previews.
 * - Uses BaseDropdown and BaseButton for consistent layout/styling.
 *
 * @component
 * @example
 * <EmailDropdown />
 */

defineOptions({ name: 'EmailDropdown' })

import { messages } from './data/email-dropdown.data'
</script>

<template>
  <BaseDropdown
    dropdownClass="email-dropdown"
    menuClass="rounded-0 bg-white border-0 start-auto end-0"
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
          <i class="flaticon-email-2"></i>
        </template>
        <template #content>
          <span
            class="dot-badge position-absolute fw-bold rounded-circle text-white bg-success d-inline-block"
          >
            1
          </span>
        </template>
      </BaseButton>
    </template>

    <!-- Menu Slot -->
    <template #menu>
      <div class="title d-flex align-items-center justify-content-between">
        <span class="text-black fw-bold"> Messages <span class="text-muted">(03)</span> </span>
        <router-link
          to="/chat"
          class="text-decoration-none link-btn transition fw-medium text-primary"
        >
          Mark all As Read
        </router-link>
      </div>

      <ul class="ps-0 mb-0 list-unstyled dropdown-body">
        <li
          v-for="message in messages"
          :key="message.id"
          class="position-relative"
          :class="{ 'text-muted': !message.unread }"
        >
          <img
            :src="message.image"
            width="45"
            height="45"
            class="rounded-circle position-absolute"
            alt="user"
          />
          <span class="d-block fw-semibold text-black-emphasis">
            {{ message.name }}
            <span class="ms-5 text-muted fw-normal">
              {{ message.timeAgo }}
            </span>
          </span>
          {{ message.messageSnippet }}
          <router-link
            to="/chat"
            class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"
          ></router-link>
          <span
            v-if="message.unread"
            class="unread d-inline-block rounded-circle bg-primary position-absolute w-10 h-10"
          ></span>
        </li>
      </ul>

      <div class="text-center dropdown-footer">
        <router-link
          to="/chat"
          class="link-btn text-decoration-none position-relative d-inline-block transition fw-medium text-primary"
        >
          View All Messages
        </router-link>
      </div>
    </template>
  </BaseDropdown>
</template>
