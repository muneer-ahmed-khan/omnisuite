<script setup lang="ts">
// ProductCard.vue
// Renders a single product card

import type { Product } from './types/products-grid.types'
const props = defineProps<{ product: Product }>()
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white single-product-box">
    <div class="card-body p-0 letter-spacing">
      <div class="image position-relative">
        <router-link :to="props.product.link" class="d-block">
          <img :src="props.product.image" alt="product" />
        </router-link>
        <button
          class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
          type="button"
        >
          <i :class="props.product.favIcon"></i>
        </button>
      </div>
      <div class="content p-20">
        <h4 class="mb-10 fw-semibold fs-15 fs-md-16 fs-lg-18">
          <router-link :to="props.product.link" class="text-decoration-none text-black">
            {{ props.product.name }}
          </router-link>
        </h4>
        <div class="reviews d-flex align-items-center">
          <div class="rating lh-1">
            <i v-for="(cls, i) in props.product.starClasses" :key="i" :class="cls"></i>
          </div>
          <span class="text-black fw-bold fs-13 ms-5 me-5">
            {{ props.product.ratingValue.toFixed(1) }}
          </span>
          <span class="text-muted fw-medium fs-13">
            ({{ props.product.reviewCount }} Reviews)
          </span>
        </div>
        <div class="mt-10 price d-flex align-items-center">
          <span class="text-primary fw-bold fs-md-15 fs-lg-16">
            ${{ props.product.price.current }}
          </span>
          <template v-if="props.product.price.original">
            <span class="text-muted fs-13 fw-medium ms-5 me-8">
              ${{ props.product.price.original }}
            </span>
            <span class="text-success fw-medium">
              <span class="fw-black">{{ props.product.price.discount }}%</span> Off
            </span>
          </template>
        </div>
        <button
          type="button"
          class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
        >
          Add To Cart
          <i class="flaticon-shopping-cart-2 transition"></i>
        </button>
      </div>
    </div>
  </div>
</template>
