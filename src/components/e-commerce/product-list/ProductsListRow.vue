<script setup lang="ts">
// ProductsListRow.vue
// Renders a single row in the products list table

import type { ProductRow } from './types/products-list.types'
const props = defineProps<{ item: ProductRow }>()
</script>

<template>
  <tr>
    <th class="shadow-none fw-medium text-black title ps-0">
      <div class="d-flex align-items-center">
        <div class="form-check mb-0">
          <input class="form-check-input shadow-none" type="checkbox" />
        </div>
        <router-link
          :to="props.item.link"
          class="d-flex align-items-center text-decoration-none text-black ms-8 fs-md-15 fs-lg-16"
        >
          <img :src="props.item.image" class="me-15" width="44" alt="product" />
          {{ props.item.name }}
        </router-link>
      </div>
    </th>
    <td class="shadow-none lh-1 fw-medium text-paragraph">{{ props.item.category }}</td>
    <td class="shadow-none lh-1 fw-medium text-paragraph">
      {{ new Date(props.item.dateAdded).toLocaleDateString() }}
    </td>
    <td class="shadow-none lh-1 fw-medium text-paragraph">${{ props.item.price.toFixed(2) }}</td>
    <td class="shadow-none lh-1 fw-medium text-paragraph">{{ props.item.orders }}</td>
    <td class="shadow-none lh-1 fw-medium text-paragraph">{{ props.item.stock }}</td>
    <td class="shadow-none lh-1 fw-normal text-paragraph">
      <span class="fw-medium">{{ props.item.rating.toFixed(2) }}</span> ({{
        props.item.reviewCount
      }}
      Reviews)
    </td>
    <td class="shadow-none lh-1 fw-medium text-paragraph text-end pe-0">
      <div class="dropdown">
        <button
          class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="flaticon-dots"></i>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);"
              ><i class="flaticon-view lh-1 me-8 position-relative top-1"></i>View</a
            >
          </li>
          <li>
            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);"
              ><i class="flaticon-pen lh-1 me-8 position-relative top-1"></i>Edit</a
            >
          </li>
          <li>
            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);"
              ><i class="flaticon-delete lh-1 me-8 position-relative top-1"></i>Delete</a
            >
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>
