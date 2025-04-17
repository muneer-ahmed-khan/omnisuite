<script setup lang="ts">
/**
 * StatsItem Component
 *
 * Displays a collection of dashboard statistics including Active Projects, Total Task,
 * Productivity, and Total Members with progress indicators and user avatars.
 *
 * @component
 * @example
 * <StatsItem />
 *
 * Static Data:
 * - Card data for Active Projects, Total Task, and Productivity are imported from the data file.
 * - Member card data for Total Members is also imported from the data file.
 */

import { statsCardsData, membersCardData } from './data/stats-item.data'

defineOptions({ name: 'StatsItem' })
</script>

<template>
  <div class="row">
    <!-- Statistics cards: Active Projects, Total Task, Productivity -->
    <div v-for="(item, index) in statsCardsData" :key="index" class="col-xxl-3 col-sm-6">
      <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <!-- Top row: Icon and title with badge -->
          <div class="d-flex align-items-center justify-content-between">
            <div :class="['icon', 'position-relative', item.iconColor, 'rounded-1', 'text-center']">
              <i :class="item.icon"></i>
            </div>
            <div class="title text-end">
              <span class="d-block fw-bold text-dark-emphasis mb-5">
                {{ item.title }}
              </span>
              <div class="d-flex align-items-center justify-content-end">
                <h3 class="fw-black mb-0 me-10">{{ item.value }}</h3>
                <span :class="['fw-bold', item.badgeColor, 'text-badge', 'd-inline-block']">
                  <i
                    :class="[
                      'flaticon-up-arrow',
                      'fs-11',
                      'lh-1',
                      'position-relative',
                      'top-1',
                      item.badgeIcon,
                    ]"
                    v-if="item.badgeIcon"
                  ></i>
                  {{ item.badgeValue }}
                </span>
              </div>
              <span class="d-block fw-medium text-dark-emphasis mt-5">
                {{ item.subtitle }}
                <span class="fw-bold">{{ item.subtitleValue }}</span>
              </span>
            </div>
          </div>
          <!-- Middle row: Bottom label and progress percentage -->
          <div
            class="mt-15 mt-md-25 mb-5 mb-md-8 d-flex justify-content-between align-items-center"
          >
            <span class="fw-medium text-secondary">
              <!-- Expecting bottomLabel to include a numeric value and text e.g., "44 pending" -->
              <span class="fw-bold text-black">{{ item.bottomLabel.split(' ')[0] }}</span>
              {{ item.bottomLabel.replace(item.bottomLabel.split(' ')[0], '') }}
            </span>
            <span class="text-primary fw-semibold">{{ item.bottomValue }}</span>
          </div>
          <!-- Progress bar -->
          <div
            class="progress"
            role="progressbar"
            :aria-valuenow="item.progress"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar"
              :class="item.progressBarClass"
              :style="{ width: item.progress + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Members card with user avatars -->
    <div class="col-xxl-3 col-sm-6">
      <div class="card mb-25 border-0 rounded-0 bg-white stats-item">
        <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
          <div class="d-flex align-items-center justify-content-between">
            <div
              :class="[
                'icon',
                'position-relative',
                membersCardData.iconColor,
                'rounded-1',
                'text-center',
              ]"
            >
              <i :class="membersCardData.icon"></i>
            </div>
            <div class="title text-end">
              <span class="d-block fw-bold text-dark-emphasis mb-5">
                {{ membersCardData.title }}
              </span>
              <div class="d-flex align-items-center justify-content-end">
                <h3 class="fw-black mb-0 me-10">{{ membersCardData.value }}</h3>
                <span
                  :class="['fw-bold', membersCardData.badgeColor, 'text-badge', 'd-inline-block']"
                >
                  <i
                    :class="[
                      'flaticon-up-arrow',
                      'fs-11',
                      'lh-1',
                      'position-relative',
                      'top-1',
                      membersCardData.badgeIcon,
                    ]"
                    v-if="membersCardData.badgeIcon"
                  ></i>
                  {{ membersCardData.badgeValue }}
                </span>
              </div>
              <span class="d-block fw-medium text-dark-emphasis mt-5">
                Working:
                <span class="fw-bold">{{ membersCardData.working }}</span>
              </span>
            </div>
          </div>
          <!-- User avatars list -->
          <div class="mt-15 mt-md-20 users-list d-flex align-items-center">
            <template v-for="(user, idx) in membersCardData.avatars" :key="idx">
              <div v-if="user.type === 'image'" class="rounded-circle text-center">
                <img :src="user.src" class="rounded-circle" alt="user" />
              </div>
              <div
                v-else
                :class="[
                  'rounded-circle',
                  'text-center',
                  'd-flex',
                  'align-items-center',
                  'justify-content-center',
                  'text-white',
                  user.textSize,
                  'fw-bold',
                  user.bg,
                ]"
              >
                {{ user.label }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
