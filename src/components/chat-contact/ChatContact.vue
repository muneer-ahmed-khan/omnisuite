<script setup lang="ts">
/**
 * ChatContact Component
 *
 * A component that displays a contact chat interface with a sidebar of contacts
 * organized alphabetically and a main chat area showing the conversation history.
 * The component includes search functionality, user filtering, and message interactions.
 */
import { ref, computed } from 'vue'
import { users, messages } from './data/chat-contact.data'
import type { User } from './types/chat-contact.types'
const searchQuery = ref('')
const currentMessage = ref('')

/**
 * Filters users based on search query
 */
const filteredUsers = computed(() => {
  if (!searchQuery.value) return users

  return users.filter((user) => user.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

/**
 * Groups users by first letter for alphabetical organization
 */
const groupedUsers = computed(() => {
  const groups: Record<string, User[]> = {}

  filteredUsers.value.forEach((user) => {
    const firstLetter = user.name.charAt(0).toUpperCase()
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(user)
  })

  return groups
})

/**
 * Sends a new message
 */
const sendMessage = () => {
  if (!currentMessage.value.trim()) return

  // Add new message to messages array
  // This would normally be handled by an API call

  currentMessage.value = ''
}
</script>

<template>
  <div class="row">
    <!-- Chat Sidebar -->
    <div class="col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-sidebar">
        <div class="card-body">
          <!-- Search Box -->
          <form class="search-box position-relative">
            <input
              v-model="searchQuery"
              type="text"
              class="form-control shadow-none text-black rounded-0 border-0"
              placeholder="Search message"
            />
            <button type="submit" class="bg-transparent text-primary transition p-0 border-0">
              <i class="flaticon-search-interface-symbol"></i>
            </button>
          </form>

          <!-- Chat Tabs -->
          <div class="chat-tabs">
            <router-link
              to="/chat"
              class="text-decoration-none fw-medium transition text-center d-block"
            >
              Private
            </router-link>
            <router-link
              to="/chat-group"
              class="text-decoration-none fw-medium transition text-center d-block"
            >
              Group
            </router-link>
            <router-link
              to="/chat-contact"
              class="active text-decoration-none fw-medium transition text-center d-block"
            >
              Contact
            </router-link>
          </div>

          <!-- Contact List -->
          <div class="chat-users-list">
            <template v-for="(usersInGroup, letter) in groupedUsers" :key="letter">
              <!-- Alphabet Divider -->
              <div class="box">
                <span class="d-inline-block rounded-circle text-center text-primary fw-bold">
                  {{ letter }}
                </span>
              </div>

              <!-- Users -->
              <div
                v-for="user in usersInGroup"
                :key="user.id"
                class="single-user-item pt-15 pb-15 position-relative"
                :class="{ active: user.isActive }"
              >
                <div class="d-flex align-items-center">
                  <img
                    :src="user.avatar"
                    width="30"
                    height="30"
                    class="rounded-circle"
                    alt="user"
                  />
                  <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium ms-12">
                    {{ user.name }}
                  </span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Main Area -->
    <div class="col-lg-8 col-xxxl-9">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-card">
        <!-- Chat Header -->
        <div
          class="card-head box-shadow bg-white d-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="d-flex align-items-center">
            <img
              src="../../assets/images/user/user6.jpg"
              width="44"
              height="44"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-15">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium"> Adam Smith </span>
              <span class="d-block text-success">Active Now</span>
            </div>
          </div>
          <div class="dropdown">
            <button
              class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="flaticon-dots"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="ph-bold ph-speaker-simple-slash me-8"></i> Mute Chat
                </a>
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="ph-bold ph-trash me-8"></i> Delete
                </a>
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i class="ph-bold ph-warning-circle me-8"></i> Block
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Chat Body -->
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="chat-list">
            <template v-for="(messageGroup, date) in messages" :key="date">
              <!-- Date Divider -->
              <div v-if="date !== 'Today'" class="chat-item info text-center position-relative">
                <span class="d-inline-block fs-12 text-muted bg-white ps-12 pe-12 lh-1">
                  {{ date }}
                </span>
              </div>

              <!-- Messages -->
              <template v-for="(message, index) in messageGroup" :key="index">
                <!-- Other User's Message -->
                <div v-if="!message.isOwn" class="chat-item position-relative">
                  <img
                    v-if="index === 0 || messageGroup[index - 1].isOwn"
                    :src="message.user.avatar"
                    width="44"
                    height="44"
                    class="rounded-circle user"
                    alt="user"
                  />
                  <span
                    v-if="index === 0 || messageGroup[index - 1].isOwn"
                    class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10"
                  >
                    {{ message.user.name }}
                    <span class="fs-12 text-muted fw-noarmal ms-5">{{ message.time }}</span>
                  </span>
                  <div class="message position-relative">
                    <div class="inner">
                      <p class="fs-md-15 fs-lg-16 lh-base">
                        {{ message.text }}
                      </p>
                    </div>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="flaticon-dots"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="ph-bold ph-speaker-simple-slash me-8"></i> Mute Chat
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="ph-bold ph-trash me-8"></i> Delete
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="ph-bold ph-warning-circle me-8"></i> Block
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="emoji">
                      <button type="button" class="bg-transparent p-0 border-0 transition">
                        <i class="ph ph-smiley"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Current User's Message -->
                <div v-else class="chat-item position-relative right">
                  <span
                    v-if="index === 0 || !messageGroup[index - 1].isOwn"
                    class="fs-12 text-muted fw-noarmal d-block mb-10"
                  >
                    {{ message.time }}
                  </span>
                  <div class="message position-relative">
                    <div class="inner">
                      <p class="fs-md-15 fs-lg-16 lh-base">
                        {{ message.text }}
                      </p>
                    </div>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="flaticon-dots"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="ph-bold ph-speaker-simple-slash me-8"></i> Mute Chat
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="ph-bold ph-trash me-8"></i> Delete
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item d-flex align-items-center"
                            href="javascript:void(0);"
                          >
                            <i class="ph-bold ph-warning-circle me-8"></i> Block
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="emoji">
                      <button type="button" class="bg-transparent p-0 border-0 transition">
                        <i class="ph ph-smiley"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </template>

              <!-- Today Divider -->
              <div v-if="date === 'Today'" class="chat-item info text-center position-relative">
                <span class="d-inline-block fs-12 text-muted bg-white ps-12 pe-12 lh-1">
                  Today
                </span>
              </div>
            </template>
          </div>

          <!-- Message Input -->
          <form @submit.prevent="sendMessage">
            <div class="write-your-message position-relative">
              <div class="write-message position-relative">
                <input
                  v-model="currentMessage"
                  type="text"
                  class="input-message d-block w-100 text-black fs-14"
                  placeholder="Type your message here"
                />
                <button type="button" class="bg-transparent p-0 border-0 transition">
                  <i class="ph ph-smiley"></i>
                </button>
              </div>
              <div class="buttons-list">
                <button
                  type="button"
                  class="border-0 d-inline-block position-relative text-center transition"
                >
                  <i class="flaticon-gallery-1"></i>
                </button>
                <button
                  type="button"
                  class="border-0 d-inline-block position-relative text-center transition"
                >
                  <i class="flaticon-link-1"></i>
                </button>
                <button
                  type="submit"
                  class="border-0 d-inline-block position-relative text-center transition active"
                >
                  <i class="flaticon-airplane"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
