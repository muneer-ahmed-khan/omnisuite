import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import theme plugins
import { createBootstrap } from 'bootstrap-vue-next'
import VueApexCharts from 'vue3-apexcharts'
import { QuillEditor } from '@vueup/vue-quill'
import Vue3Prism from 'vue3-prism/lib/Vue3Prism.common.js'

// Import CSS styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'swiper/css'
import 'swiper/css/bundle'
import 'flatpickr/dist/flatpickr.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import 'vue3-prism/lib/Vue3Prism.css'

import './assets/custom.scss'

const app = createApp(App)

// Use global plugins and register components
app.use(createPinia())
app.use(router)
app.use(createBootstrap)
app.use(VueApexCharts)
app.use(Vue3Prism)
app.component('QuillEditor', QuillEditor)

app.mount('#app')
