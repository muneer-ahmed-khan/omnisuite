<script setup lang="ts">
// ProductsListTable.vue
// Wraps header, table, and rows

import type { ProductRow } from './types/products-list.types'
const props = defineProps<{ rows: ProductRow[] }>()
</script>

<template>
  <div class="card-body p-15 p-sm-20 p-md-25">
    <div class="table-responsive">
      <table class="table text-nowrap align-middle mb-0">
        <thead>
          <tr>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
            >
              Product Name
            </th>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
            >
              Category
            </th>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
            >
              Date Added
            </th>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
            >
              Price
            </th>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
            >
              Orders
            </th>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
            >
              Stock
            </th>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
            >
              Rating
            </th>
            <th
              scope="col"
              class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductsListRow v-for="r in props.rows" :key="r.id" :item="r" />
        </tbody>
      </table>
    </div>
  </div>
</template>
