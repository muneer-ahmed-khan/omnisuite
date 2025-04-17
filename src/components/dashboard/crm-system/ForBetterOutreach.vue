<script setup lang="ts">
/**
 * ForBetterOutreach Component
 * -----------------------------------------------------------------------------
 * Displays a promotional card encouraging users to enhance their marketing
 * campaigns for better outreach. Features a headline, a link to account
 * settings, and an illustrative image.
 *
 * @usage
 * <ForBetterOutreach />
 *
 * @data
 * - `outreachImage`: URL of the contact illustration, imported from a data file.
 */

import { outreachImage } from './data/for-better-outreach.data'

defineOptions({ name: 'ForBetterOutreach' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 campaign-contact-box">
    <div class="card-body letter-spacing position-relative">
      <h2 class="fw-medium text-white mb-0">
        Enhance Your <strong class="fw-black">Campaign</strong> For Better Outreach
        <router-link
          to="/account-settings"
          class="text-white text-decoration-none lh-1 position-relative ms-5 top-3"
        >
          <i class="flaticon-right-arrow-1"></i>
        </router-link>
      </h2>
      <img :src="outreachImage" alt="contact-image" />
    </div>
  </div>
</template>
