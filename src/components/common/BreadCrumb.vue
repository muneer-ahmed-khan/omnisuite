<script setup lang="ts">
/**
 * BreadCrumb Component
 *
 * Renders a breadcrumb navigation that displays:
 * - The current page title.
 * - A navigational path back to the dashboard.
 *
 * @component
 * @example
 * <BreadCrumb page-title="Home" />
 */
defineOptions({ name: 'BreadCrumb' })

interface Props {
  /** The title of the current page displayed in the breadcrumb. */
  pageTitle: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="mb-20 d-sm-flex align-items-center justify-content-between letter-spacing">
    <h4 class="mb-5 mb-sm-0 fw-bold">{{ props.pageTitle }}</h4>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 list-unstyled ps-0">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-decoration-none text-black"> Dashboard </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ props.pageTitle }}
        </li>
      </ol>
    </nav>
  </div>
</template>
