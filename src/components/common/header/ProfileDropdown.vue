<script setup lang="ts">
/**
 * ProfileDropdown Component
 *
 * Renders a profile dropdown commonly used in admin dashboards or user profile areas.
 * It leverages auto-imported BaseDropdown and BaseButton components to display a trigger
 * button (with an avatar, user name, and role) and a dropdown menu containing navigation links.
 *
 * @component
 * @example
 * <ProfileDropdown />
 *
 * The component uses Bootstrap’s dropdown functionality. The trigger button includes attributes
 * such as data-bs-toggle="dropdown", aria-expanded, and aria-controls for Bootstrap's JS.
 *
 * Static Data:
 * The menu items are imported from the static data file.
 *
 * Slots:
 * - trigger: Provides the button that toggles the dropdown.
 * - menu: Contains the dropdown menu items.
 */
import { profileDropdownItems } from './data/profile-dropdown.data'

defineOptions({ name: 'ProfileDropdown' })
</script>

<template>
  <BaseDropdown
    dropdownClass="profile-dropdown"
    menuClass="rounded-0 bg-white border-0 start-auto end-0"
    menuId="profile-dropdown-menu"
  >
    <!-- Trigger Slot: Renders the button that toggles the dropdown -->
    <template #trigger="{ menuId }">
      <BaseButton
        className="dropdown-toggle text-start fs-14 text-black-emphasis d-flex align-items-center p-0 position-relative bg-transparent border-0 transition lh-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        :aria-controls="menuId"
      >
        <!-- Icon Slot: Display the admin avatar -->
        <template #icon>
          <img src="@/assets/images/admin.jpg" class="rounded" width="44" height="44" alt="admin" />
        </template>
        <!-- Content Slot: Display the admin name and role -->
        <template #content>
          <span class="title d-none d-lg-block ms-10 ms-lg-15">
            <span class="d-block fw-bold mb-5 mb-md-8">Victor James</span>
            <span class="text-body-emphasis fw-semibold fs-13">Admin</span>
          </span>
        </template>
      </BaseButton>
    </template>

    <!-- Menu Slot: Renders the dropdown menu with navigation items -->
    <template #menu>
      <ul class="ps-0 mb-0 list-unstyled dropdown-body">
        <li
          v-for="item in profileDropdownItems"
          :key="item.text"
          class="text-body-secondary fw-semibold transition position-relative"
        >
          <i :class="item.icon"></i>
          {{ item.text }}
          <router-link
            :to="item.route"
            class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"
          ></router-link>
        </li>
      </ul>
    </template>
  </BaseDropdown>
</template>
