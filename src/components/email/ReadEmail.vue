<script setup lang="ts">
/**
 * ReadEmail component
 *
 * The ReadEmail component displays the details of an email message, including
 * the sender, recipient, subject, content, and options for replying and forwarding.
 *
 * It is used in the ReadEmailPage component to show the content of a specific email.
 */

import { emailData } from "./data/read-email.data";
import type { EmailData } from "./types/read-email.types";

// Declare a constant to hold the email data
const email: EmailData = emailData;

defineOptions({
  name: "ReadEmail",
});
</script>

<template>

    <div class="card mb-25 border-0 rounded-0 bg-white box-shadow letter-spacing read-email-box">
      <div class="card-head border-bottom d-flex align-items-center bg-white p-15 p-sm-20 p-md-25">
        <router-link to="/emails" class="link-btn lh-1 text-decoration-none">
          <i class="ph ph-caret-left"></i>
        </router-link>
        <h5 class="mb-0 text-black fw-bold">{{ email.subject }}</h5>
      </div>
      <div class="card-body p-15 p-sm-20 p-md-25">
        <div class="email-info d-md-flex justify-content-between">
          <div class="d-flex align-items-center">
            <img :src="email.sender.avatar" width="45" height="45" class="rounded-circle" alt="user" />
            <div class="title ms-10">
              <span class="d-block mb-5 fs-16 fw-medium text-black">{{ email.sender.name }}
                <span class="ms-5 text-muted fw-normal fs-14 position-relative">
                  <i class="ph ph-caret-left lh-1"></i>{{ email.sender.email }}
                  <i class="ph ph-caret-right lh-1"></i>
                </span>
              </span>
              <div class="d-flex align-items-center">
                <div class="info position-relative">
                  <span class="d-block text-muted fs-13">To: {{ email.recipient.email }}</span>
                </div>
                <span class="d-block text-black fs-13 ms-20">{{ email.date }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="email-details">
          <h6 class="text-black fw-medium d-block">{{ email.content.greeting }}</h6>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base" v-for="(body, index) in email.content.body" :key="index">
            {{ body }}
          </p>
          <h6 class="text-black fw-medium d-block">Checklists/Sub-tasks</h6>
          <p class="fs-md-15 fs-lg-16 text-paragraph lh-base">
            <ul>
              <li v-for="(item, index) in email.content.checklists" :key="index">{{ item }}</li>
            </ul>
          </p>
          <span class="d-block fs-md-15 fs-lg-16 text-paragraph mb-1">{{ email.senderSignature }}</span>
          <span class="d-block fs-md-15 fs-lg-16 text-black">{{ email.senderName }}</span>
        </div>
        <div class="email-buttons">
          <button class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16">
            Reply
          </button>
          <button class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16 bg-success">
            Forward
          </button>
        </div>
      </div>
    </div>
</template>
