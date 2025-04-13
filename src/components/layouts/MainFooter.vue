<script setup lang="ts">
/**
 * MainFooter Component
 *
 * Displays copyright info and footer links.
 *
 * @component
 * @example
 * <MainFooter />
 */

defineOptions({ name: 'MainFooter' })

// Footer link type definition
interface FooterLink {
  id: number
  route: string
  text: string
}

// Static list of footer navigation links
const footerLinks: FooterLink[] = [
  { id: 1, route: '/privacy-policy', text: 'Privacy Policy' },
  { id: 2, route: '/terms-conditions', text: 'Terms & Conditions' },
]
</script>

<template>
  <div class="flex-grow-1"></div>

  <footer
    class="footer-area text-center text-md-start bg-white ps-15 pe-15 pt-20 pb-20 ps-md-40 pe-md-40 pt-md-25 pb-md-25"
  >
    <div class="row align-items-center">
      <!-- Left: Copyright -->
      <div class="col-md-6 col-lg-6">
        <p class="text-body-secondary fw-medium mb-0">
          © <span class="fw-bold text-primary">Adlash</span>. All rights reserved by
          <a
            href="https://envytheme.com/"
            class="text-decoration-none fw-bold transition"
            target="_blank"
          >
            EnvyTheme
          </a>
        </p>
      </div>

      <!-- Right: Footer Links -->
      <div class="col-md-6 col-lg-6 text-md-end">
        <ul class="footer-menu ps-0 mb-0 list-unstyled fw-medium">
          <li v-for="link in footerLinks" :key="link.id" class="d-inline-block">
            <router-link
              :to="link.route"
              class="text-decoration-none text-body-secondary transition"
            >
              {{ link.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
