<script setup lang="ts">
/**
 * LogoutContent Component
 *
 * Displays a logout confirmation message.
 *
 * @component
 * @example
 * <LogoutContent />
 */

defineOptions({ name: 'LogoutContent' })
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-9 col-xxl-8 col-xxxl-5">
      <div
        class="card mb-25 border-0 rounded-0 bg-white authentication-card email-confirmation-card"
      >
        <div class="card-body letter-spacing">
          <!-- Icon -->
          <div
            class="icon mb-20 mb-sm-25 mb-md-30 md-lg-35 text-success text-center rounded-circle position-relative ms-auto me-auto"
          >
            <i class="flaticon-lock-1"></i>
          </div>

          <!-- Title -->
          <h4 class="text-black fw-bold mb-0 text-center">You Are Logged Out</h4>

          <!-- Subtitle -->
          <p class="mb-0 fs-md-15 fs-lg-16 text-paragraph text-center sub-text">
            Your mail is verified! Your account is now safe from unwanted activities.
          </p>

          <!-- Call to action -->
          <router-link
            to="/login"
            class="default-btn transition border-0 fw-medium text-white rounded-1 fs-md-15 fs-lg-16 d-block w-100 text-decoration-none text-center mt-15 mt-sm-20 mt-md-25 mt-lg-30"
          >
            Sign In Now
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
