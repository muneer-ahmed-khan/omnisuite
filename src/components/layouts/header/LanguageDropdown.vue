<script setup lang="ts">
/**
 * LanguageDropdown Component
 *
 * A dropdown component for selecting language preferences.
 * Uses BaseDropdown and BaseButton to provide a flexible and styled UI.
 *
 * Features:
 * - Displays a list of languages with associated flags.
 * - Shows a language code (ENG) as trigger content.
 * - Flag icons are loaded from assets.
 *
 * @component
 * @example
 * <LanguageDropdown />
 */
import { languageOptions } from './data/language-dropdown.data'

defineOptions({ name: 'LanguageDropdown' })
</script>

<template>
  <BaseDropdown
    dropdownClass="language-dropdown"
    menuClass="rounded-0 bg-white border-0 start-auto end-0"
    menuId="language-dropdown-menu"
  >
    <!-- Trigger Slot -->
    <template #trigger="{ menuId }">
      <BaseButton
        type="button"
        className="dropdown-toggle fw-medium position-relative pt-0 pb-0 bg-transparent border-0 transition lh-1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        :aria-controls="menuId"
      >
        <template #icon>
          <i class="flaticon-translate"></i>
        </template>
        <template #content> ENG </template>
      </BaseButton>
    </template>

    <!-- Menu Slot -->
    <template #menu>
      <div>
        <div class="title d-flex align-items-center justify-content-between">
          <span class="text-black fw-bold">Choose Language</span>
        </div>

        <ul class="ps-0 mb-0 list-unstyled dropdown-body">
          <li
            v-for="(language, index) in languageOptions"
            :key="index"
            class="position-relative fw-semibold text-black-emphasis"
          >
            <img
              :src="language.flagSrc"
              width="30"
              height="30"
              class="rounded-circle position-absolute"
              :alt="language.flagAlt"
            />
            {{ language.text }}
            <a
              href="#"
              class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"
            ></a>
          </li>
        </ul>
      </div>
    </template>
  </BaseDropdown>
</template>
