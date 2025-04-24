<!-- File: ProductCarousel.vue -->
<script setup lang="ts">
defineOptions({ name: 'ProductCarousel' })

import { defineProps, toRefs, defineEmits } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Thumbs } from 'swiper/modules'
import type { Product } from './types/product-details.types.ts'
import type { Swiper as SwiperClass } from 'swiper'

/**
 * ProductCarousel component displays main and thumbnail image carousels for product images.
 *
 * @props {Product[]} products - Array of product images and IDs
 * @props {SwiperClass | null} thumbsSwiper - Reference to the thumbnail Swiper instance
 * @emits setThumbsSwiper - Emits the swiper instance when thumbnails are initialized
 */
const props = defineProps<{
  products: Product[]
  thumbsSwiper: SwiperClass | null
}>()
const { products, thumbsSwiper } = toRefs(props)

const emit = defineEmits<{
  (e: 'setThumbsSwiper', swiper: SwiperClass | null): void
}>()

const setThumbsSwiper = (swiper: SwiperClass) => {
  emit('setThumbsSwiper', swiper)
}
</script>

<template>
  <div class="col-lg-5 col-md-9">
    <swiper
      :slidesPerView="1"
      :loop="false"
      :autoplay="{ delay: 4000, disableOnInteraction: true }"
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[Thumbs, Autoplay]"
      class="productDetailsSwiper"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <img :src="product.image" alt="product-details" />
      </swiper-slide>
    </swiper>
  </div>
  <div class="col-lg-2 col-md-3">
    <swiper
      direction="vertical"
      :loop="false"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :spaceBetween="25"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :breakpoints="{
        0: { direction: 'horizontal', spaceBetween: 15 },
        768: { direction: 'vertical', spaceBetween: 25 },
      }"
      :modules="[Thumbs, Autoplay]"
      @swiper="setThumbsSwiper"
      class="productDetailsThumbSwiper"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <img :src="product.image" alt="product-details" />
      </swiper-slide>
    </swiper>
  </div>
</template>
