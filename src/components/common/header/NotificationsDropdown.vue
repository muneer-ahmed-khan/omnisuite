<script setup lang="ts">
/**
 * NotificationsDropdown Component
 *
 * This component displays a notifications dropdown—ideal for dashboards or notification centers.
 * It uses the auto-imported BaseDropdown component to wrap the dropdown structure and the BaseButton
 * component to render a consistent trigger button. Bootstrap's JavaScript manages the dropdown behavior,
 * including state, ARIA attributes, and positioning via Popper.js, while this component provides a
 * customizable template for notifications.
 *
 * Features:
 * - The trigger button displays a bell icon with a notification count badge.
 * - The dropdown menu shows a header with a "Clear All" action, a list of notifications, and a footer link.
 * - Uses BaseButton for the trigger to ensure consistent styling and reusability.
 *
 * Props (inherited from BaseDropdown):
 * - dropdownClass?: string - Additional CSS classes for the dropdown container.
 * - menuClass?: string     - Additional CSS classes for the dropdown menu.
 * - menuId?: string        - A unique ID for the dropdown menu, linked via ARIA attributes.
 *
 * @component
 * @example
 * <NotificationsDropdown />
 */
import { notificationItems } from './data/notifications-dropdown.data'

defineOptions({ name: 'NotificationsDropdown' })
</script>

<template>
  <BaseDropdown
    dropdownClass="notification-dropdown"
    menuClass="rounded-0 bg-white border-0 start-auto end-0"
    menuId="notifications-dropdown-menu"
  >
    <!-- Trigger Slot: Uses BaseButton for a consistent, reusable trigger -->
    <template #trigger="{ menuId }">
      <BaseButton
        className="dropdown-toggle p-0 position-relative bg-transparent border-0 transition lh-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        :aria-controls="menuId"
      >
        <!-- Icon Slot: Renders the bell icon and notification badge -->
        <template #icon>
          <i class="flaticon-bell-2"></i>
          <span
            class="dot-badge position-absolute fw-bold rounded-circle text-white bg-primary d-inline-block"
          >
            3
          </span>
        </template>
        <!-- Content Slot: Optional text content (omitted in this design) -->
        <template #content>
          <!-- No additional text provided -->
        </template>
      </BaseButton>
    </template>

    <!-- Menu Slot: Renders the dropdown menu content -->
    <template #menu>
      <div>
        <!-- Header Area: Title and "Clear All" action -->
        <div class="title d-flex align-items-center justify-content-between">
          <span class="text-black fw-bold">
            Notifications <span class="text-muted">(03)</span>
          </span>
          <router-link
            to="/notifications"
            class="text-decoration-none link-btn transition text-primary fw-medium"
          >
            Clear All
          </router-link>
        </div>

        <!-- List of Notification Items -->
        <ul class="ps-0 mb-0 list-unstyled dropdown-body">
          <li
            v-for="(notification, index) in notificationItems"
            :key="index"
            class="text-muted position-relative"
          >
            <div class="icon rounded-circle position-absolute text-center">
              <i :class="notification.icon"></i>
            </div>
            <span class="d-block text-black-emphasis">
              <template v-if="notification.prefix">
                {{ notification.prefix }}
              </template>
              <strong class="fw-semibold">{{ notification.emphasis }}</strong>
              <template v-if="notification.suffix">
                {{ notification.suffix }}
              </template>
            </span>
            {{ notification.time }}
            <router-link
              to="/notifications"
              class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"
            ></router-link>
            <span
              v-if="notification.unread"
              class="unread d-inline-block rounded-circle bg-primary position-absolute w-10 h-10"
            ></span>
          </li>
        </ul>

        <!-- Footer Area: "See All Notifications" link -->
        <div class="text-center dropdown-footer">
          <router-link
            to="/notifications"
            class="link-btn text-decoration-none text-primary position-relative d-inline-block transition fw-medium"
          >
            See All Notifications
          </router-link>
        </div>
      </div>
    </template>
  </BaseDropdown>
</template>
