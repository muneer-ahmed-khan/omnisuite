<script setup lang="ts">
/**
 * AddProduct.vue
 * Form component for creating a new product with rich text editors and image upload.
 */
import { ref } from 'vue'
import { categoryOptions } from './data/add-product.data'

defineOptions({
  name: 'AddProduct',
})

// Form fields
const productName = ref<string>('')
const subText = ref<string>('')
const description = ref<string>('')
const selectedCategory = ref<string>(categoryOptions[0].value)
const price = ref<number | null>(null)
const discount = ref<number | null>(null)
const stock = ref<number | null>(null)
const orders = ref<number | null>(null)
const metaTitle = ref<string>('')
const metaKeyword = ref<string>('')
const metaDescription = ref<string>('')

// Quill modules
import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from 'quill-image-uploader'
import axios from 'axios'

const modules = {
  module: BlotFormatter,
  ImageUploader,
  options: {
    upload: (file: Blob) => {
      return new Promise<string>((resolve, reject) => {
        const formData = new FormData()
        formData.append('image', file)
        axios
          .post('/upload-image', formData)
          .then((res) => resolve(res.data.url))
          .catch(() => reject('Upload failed'))
      })
    },
  },
}

/**
 * Handles the form submission to create a new product.
 */
function onSubmit() {
  console.log({
    productName: productName.value,
    subText: subText.value,
    description: description.value,
    selectedCategory: selectedCategory.value,
    price: price.value,
    discount: discount.value,
    stock: stock.value,
    orders: orders.value,
    metaTitle: metaTitle.value,
    metaKeyword: metaKeyword.value,
    metaDescription: metaDescription.value,
  })
}
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white add-product-box">
    <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30 letter-spacing">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Product Name</label>
              <input
                v-model="productName"
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Sensung Smart Watch"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Sub Text</label>
              <input
                v-model="subText"
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Sensung Smart Watch"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Product Description</label>
              <div class="mb-0">
                <QuillEditor
                  v-model="description"
                  :modules="modules"
                  theme="snow"
                  placeholder="Write your product description"
                  toolbar="full"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Select Category</label>
              <select
                v-model="selectedCategory"
                class="form-select shadow-none fw-semibold rounded-0"
              >
                <option v-for="opt in categoryOptions" :key="opt.value" :value="opt.value">
                  {{ opt.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Price</label>
              <div class="input-group">
                <span class="input-group-text rounded-0 fs-14 fw-bold text-primary">$</span>
                <input
                  v-model="price"
                  type="number"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="e.g. 120.00"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Discount</label>
              <div class="input-group">
                <span class="input-group-text rounded-0 fs-14 fw-bold text-primary">%</span>
                <input
                  v-model="discount"
                  type="number"
                  class="form-control shadow-none rounded-0 text-black"
                  placeholder="e.g. 15"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Stock</label>
              <input
                v-model="stock"
                type="number"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. 50"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Orders</label>
              <input
                v-model="orders"
                type="number"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. 30"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Product Image</label>
              <ImageUpload />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Meta Title</label>
              <input
                v-model="metaTitle"
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Sensung Smart Watch"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Meta Keyword</label>
              <input
                v-model="metaKeyword"
                type="text"
                class="form-control shadow-none rounded-0 text-black"
                placeholder="e.g. Sensung Smart Watch"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-15 mb-sm-20 mb-md-25">
              <label class="d-block text-black fw-semibold mb-10">Meta Description</label>
              <div class="mb-0">
                <QuillEditor
                  v-model="metaDescription"
                  :modules="modules"
                  theme="snow"
                  placeholder="Write your meta description"
                  toolbar="full"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <button
              class="default-btn transition border-0 fw-medium text-white pt-10 pb-10 ps-25 pe-25 pt-md-11 pb-md-11 ps-md-35 pe-md-35 rounded-1 fs-md-15 fs-lg-16"
              type="submit"
            >
              Create Product
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
