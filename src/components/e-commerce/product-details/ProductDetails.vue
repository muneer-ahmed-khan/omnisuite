<script setup lang="ts">
defineOptions({ name: 'ProductDetails' })

import { ref } from 'vue'
import { reviewsTab, products, productInfo, descriptionTab } from './data/product-details.data'
import type { Swiper as SwiperClass } from 'swiper'

/**
 * ProductDetails component displays product details including image carousel, info, and reviews.
 */
const thumbsSwiper = ref<SwiperClass | null>(null)
function setThumbsSwiper(swiper: SwiperClass) {
  thumbsSwiper.value = swiper
}

const itemNumber = ref<number>(1)
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing product-details-box">
    <div class="card-body">
      <div class="row align-items-center">
        <ProductCarousel
          :products="products"
          :thumbsSwiper="thumbsSwiper"
          @setThumbsSwiper="setThumbsSwiper"
        />
        <div class="col-lg-5 col-md-12">
          <div class="product-details-content">
            <h3 class="text-black fw-semibold" v-html="productInfo.title" />
            <div class="reviews d-flex align-items-center">
              <RatingStars :rating="productInfo.rating" />
              <span class="text-black fw-bold fs-13 ms-5 me-5"> {{ productInfo.rating }}.0 </span>
              <span class="text-muted fw-medium fs-13">
                ({{ productInfo.reviewsCount }} Reviews)
              </span>
            </div>
            <div class="mt-10 mb-12 mb-md-15 price d-flex align-items-center">
              <span class="text-primary fw-bold fs-md-15 fs-lg-16">
                {{ productInfo.price }}
              </span>
            </div>
            <p class="text-paragraph fs-md-15 fs-xxxl-16 lh-base">
              {{ productInfo.description }}
            </p>
            <InfoList :items="productInfo.infoList" />
            <div class="box">
              <p class="text-paragraph fs-md-15 fs-xxxl-16 lh-base">
                From only
                <span class="text-black fw-medium">
                  {{ productInfo.finance.monthly }}
                </span>
                per month with
                <span class="text-black fw-medium">
                  {{ productInfo.finance.rate }}
                </span>
                finance options.
                <router-link
                  :to="productInfo.finance.link"
                  class="text-decoration-none text-black fw-medium position-relative"
                >
                  {{ productInfo.finance.linkText }}
                </router-link>
                {{ productInfo.finance.suffix }}
              </p>
            </div>
            <span class="d-block text-paragraph">
              <span class="text-success"
                ><i class="ph ph-check lh-1 fs-16 position-relative top-1 me-1"></i>
                {{ productInfo.stock.status }}
              </span>
              - Order within {{ productInfo.stock.orderWithin }} for
              <span class="text-black">{{ productInfo.stock.delivery }}</span>
            </span>
            <div class="buttons-list d-sm-flex align-items-center">
              <QuantitySelector v-model="itemNumber" />
            </div>
          </div>
        </div>
      </div>

      <div class="product-details-tabs">
        <ul class="nav nav-tabs border-0 rounded-0" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fw-semibold d-block position-relative border-0 rounded-0 active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description-tab-pane"
              type="button"
              role="tab"
              aria-controls="description-tab-pane"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fw-semibold d-block position-relative border-0 rounded-0"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews-tab-pane"
              type="button"
              role="tab"
              aria-controls="reviews-tab-pane"
              aria-selected="false"
            >
              Reviews
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="description-tab-pane"
            role="tabpanel"
            tabindex="0"
          >
            <DescriptionTab :description="descriptionTab" />
          </div>
          <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" tabindex="0">
            <div class="product-reviews">
              <h3 class="text-black mb-5 fw-bold">
                {{ reviewsTab.overallRating }}
              </h3>
              <span class="d-block fs-md-15 fs-lg-16 fw-medium mb-8"> Overall Rating </span>
              <div class="reviews d-flex align-items-center">
                <RatingStars :rating="reviewsTab.rating" />
                <span class="text-black fw-bold fs-13 ms-5 me-5"> {{ reviewsTab.rating }}.0 </span>
                <span class="text-muted fw-medium fs-13">
                  ({{ reviewsTab.reviewsCount }} Reviews)
                </span>
              </div>
              <div class="rating-count">
                <StarRatingCount
                  v-for="item in reviewsTab.ratingCounts"
                  :key="item.star"
                  :star="item.star"
                  :count="item.count"
                  :percent="item.percent"
                />
              </div>
              <div class="row reviews-list">
                <ReviewItem
                  v-for="review in reviewsTab.reviewList"
                  :key="review.user.name"
                  :review="review"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
