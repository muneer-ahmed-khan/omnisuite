<script setup lang="ts">
/**
 * EcommercePage Component
 * -----------------------------------------------------------------------------
 * This component is designed to display a comprehensive dashboard for the ecommerce
 * section of the application. It organizes various sections into a structured layout,
 * including a left column with analytics such as "What Happening", expected earnings,
 * average daily sales, revenue, and new customers, a center column with stats boxes
 * and weekly sales, and bottom rows with additional components for sales by POS location,
 * top selling products, website visitors, products orders, and stock report.
 *
 * @usage
 * <EcommercePage />
 *
 * @components
 * The component makes use of the following auto-imported components:
 *   - WhatHappening
 *   - ExpectedEarnings
 *   - AverageDailySales
 *   - RevenueThisMonth
 *   - NewCustomersThisMonth
 *   - StatsBoxes
 *   - WeeklySales
 *   - ProductsOrders
 *   - StockReport
 * and manually imported bottom row components:
 *   - SalesByPOSLocation
 *   - TopSellingProducts
 *   - WebsiteVisitors
 *
 * @logic
 * The component uses a bottomRowComponents array to dynamically render the bottom row
 * components using a v-for loop for improved maintainability.
 */

import SalesByPOSLocation from '@/components/dashboard/ecommerce/SalesByPOSLocation.vue'
import TopSellingProducts from '@/components/dashboard/ecommerce/TopSellingProducts.vue'
import WebsiteVisitors from '@/components/dashboard/ecommerce/WebsiteVisitors.vue'

// Declare the component name using defineOptions
defineOptions({ name: 'EcommercePage' })

// Array containing the bottom row components for dynamic rendering via v-for.
const bottomRowComponents = [SalesByPOSLocation, TopSellingProducts, WebsiteVisitors]
</script>

<template>
  <div class="row">
    <!-- Left Column -->
    <div class="col-xxl-7 col-xxxl-6">
      <!-- Main analytics components -->
      <EcommerceWhatHappening />

      <!-- Sub-grid for earnings, sales, revenue and new customers -->
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
      <!-- Stats and weekly sales components -->
      <StatsBoxes />
      <WeeklySales />
    </div>

    <!-- Bottom Rows: Dynamically rendered components -->
    <div class="col-xxl-4" v-for="(Component, index) in bottomRowComponents" :key="index">
      <component :is="Component" />
    </div>

    <!-- Additional Bottom Components -->
    <div class="col-xxl-6">
      <ProductsOrders />
    </div>
    <div class="col-xxl-6">
      <StockReport />
    </div>
  </div>
</template>
