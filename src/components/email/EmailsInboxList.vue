<script setup lang="ts">
/**
 * EmailsList.vue
 *
 * Displays the email inbox list, toolbar actions, and pagination UI.
 * Matches original HTML/CSS layout exactly.
 */

defineOptions({ name: 'EmailsList' })

import { emailItems } from './data/emails-inbox-list.data'
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white box-shadow emails-list-box letter-spacing">
    <div
      class="card-head box-shadow bg-white d-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
    >
      <div class="left d-flex align-items-center">
        <div class="form-check mb-0 me-10">
          <input class="form-check-input shadow-none" type="checkbox" />
        </div>
        <button class="bg-transparent p-0 border-0 lh-1 text-muted position-relative top-2">
          <i class="flaticon-logout"></i>
        </button>
      </div>
      <div class="right d-flex align-items-center">
        <ul class="info-list mb-0 list-unstyled position-relative top-3 me-10">
          <li class="d-inline-block">
            <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
              <i class="flaticon-copy"></i>
            </button>
          </li>
          <li class="d-inline-block">
            <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
              <i class="flaticon-delete"></i>
            </button>
          </li>
          <li class="d-inline-block">
            <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
              <i class="flaticon-star-3"></i>
            </button>
          </li>
          <li class="d-inline-block">
            <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
              <i class="flaticon-price-tag-1"></i>
            </button>
          </li>
        </ul>
        <button
          class="dot-btn lh-1 position-relative top-1 bg-transparent border-0 shadow-none p-0 transition mt-10 mt-sm-0"
        >
          <i class="flaticon-dots"></i>
        </button>
      </div>
    </div>

    <div class="card-body p-0">
      <div class="emails-list ps-0 mb-0 list-unstyled">
        <div
          v-for="email in emailItems"
          :key="email.id"
          :class="['email-item position-relative', { 'bg-color': email.isBgColor }]"
        >
          <div class="row align-items-center">
            <div class="col-xxl-4">
              <div class="email-info d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="form-check mb-0">
                    <input class="form-check-input shadow-none" type="checkbox" />
                  </div>
                  <button
                    class="bg-transparent p-0 border-0 text-muted lh-1 ms-2 position-relative top-1 fs-20"
                  >
                    <i
                      :class="email.starType === 'warning' ? 'flaticon-star-1' : 'flaticon-star-3'"
                    ></i>
                  </button>
                  <div class="d-flex align-items-center user ms-15">
                    <img
                      :src="email.user.image"
                      width="24"
                      height="24"
                      class="rounded-circle"
                      :alt="email.user.alt"
                    />
                    <span class="fs-md-15 fs-xxxl-16 fw-bold ms-7 lh-1">{{ email.user.name }}</span>
                  </div>
                </div>
                <span v-if="email.badge" class="badge text-outline-success">{{ email.badge }}</span>
              </div>
            </div>
            <div class="col-xxl-7">
              <div class="email-title">
                <p class="d-block mb-0 fs-md-15 fs-xxxl-16 fw-medium text-black">
                  {{ email.title }}
                  <span v-if="email.snippet" class="fw-normal text-muted"
                    >- {{ email.snippet }}</span
                  >
                </p>
                <div v-if="email.attachments" class="buttons-list">
                  <a
                    v-for="att in email.attachments"
                    :key="att.name"
                    href="#"
                    target="_blank"
                    class="d-inline-block text-decoration-none text-black position-relative transition"
                  >
                    <i class="flaticon-gallery-1"></i> {{ att.name }}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-1 text-xxl-end">
              <span class="d-block text-black fs-13 time">{{ email.time }}</span>
            </div>
          </div>
          <router-link
            to="/read-email"
            class="link-btn position-absolute start-0 end-0 top-0 bottom-0 d-block"
          ></router-link>
          <ul class="info-list ps-0 mb-0 list-unstyled">
            <li class="d-inline-block">
              <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
                <i class="flaticon-copy"></i>
              </button>
            </li>
            <li class="d-inline-block">
              <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
                <i class="flaticon-delete"></i>
              </button>
            </li>
            <li class="d-inline-block">
              <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
                <i class="flaticon-star-3"></i>
              </button>
            </li>
            <li class="d-inline-block">
              <button class="bg-transparent border-0 p-0 text-paragraph lh-1">
                <i class="flaticon-price-tag-1"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pagination-area d-md-flex ps-15 ps-sm-20 ps-md-25 pe-15 pe-sm-20 pe-md-25 mt-15 mt-sm-20 mb-15 mb-sm-20 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">{{ emailItems.length }}</span> out of
          <span class="fw-bold">{{ emailItems.length }}</span> results
        </p>
        <nav class="mt-15 mt-md-0">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous"
                ><i class="flaticon-chevron-1"></i
              ></a>
            </li>
            <li class="page-item"><a class="page-link active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next"><i class="flaticon-chevron"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
