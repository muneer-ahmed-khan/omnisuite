<script setup lang="ts">
import SalesByPOSLocation from '@/components/dashboard/SalesByPOSLocation.vue'
import TopSellingProducts from '@/components/dashboard/TopSellingProducts.vue'
import WebsiteVisitors from '@/components/dashboard/WebsiteVisitors.vue'

defineOptions({ name: 'EcommercePage' })

const bottomRowComponents = [SalesByPOSLocation, TopSellingProducts, WebsiteVisitors]
</script>

<template>
  <div class="row">
    <!-- Left Column -->
    <div class="col-xxl-7 col-xxxl-6">
      <WhatHappening />

      <div class="row">
        <div class="col-lg-6 col-xxxl-6 col-md-6">
          <ExpectedEarnings />
        </div>
        <div class="col-lg-6 col-xxxl-6 col-md-6">
          <AverageDailySales />
        </div>
        <div class="col-xl-12 col-lg-6 col-xxxl-6 col-md-12">
          <RevenueThisMonth />
        </div>
        <div class="col-xl-12 col-lg-6 col-xxxl-6 col-md-12">
          <NewCustomersThisMonth />
        </div>
      </div>
    </div>

    <!-- Center Column -->
    <div class="col-xxl-5 col-xxxl-6">
      <StatsBoxes />
      <WeeklySales />
    </div>

    <!-- Bottom Rows -->
    <div class="col-xxl-4" v-for="(Component, index) in bottomRowComponents" :key="index">
      <component :is="Component" />
    </div>

    <div class="col-xxl-6">
      <ProductsOrders />
    </div>
    <div class="col-xxl-6">
      <StockReport />
    </div>
  </div>
</template>
