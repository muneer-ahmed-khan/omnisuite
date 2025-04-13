<script setup lang="ts">
/**
 * HeaderRightSide Component
 *
 * Renders all the interactive right-side header elements:
 * - Language selector
 * - Dark/light mode toggle
 * - Apps shortcut dropdown
 * - Email notifications
 * - General notifications
 * - Profile/account dropdown
 *
 * @component
 * @example
 * <HeaderRightSide />
 */

defineOptions({ name: 'HeaderRightSide' })
</script>

<template>
  <div
    class="header-right-side d-flex align-items-center justify-content-center justify-content-md-end"
  >
    <LanguageDropdown />
    <LightDarkSwitchBtn />
    <AppsDropdown />
    <EmailDropdown />
    <NotificationsDropdown />
    <ProfileDropdown />
  </div>
</template>
