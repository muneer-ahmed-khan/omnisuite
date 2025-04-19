<script lang="ts" setup>
/**
 * @component ChatContent
 * @description A comprehensive chat interface component that displays both a sidebar with user list
 * and a chat window with message threads. It provides functionality for searching messages,
 * switching between chat types, viewing message history, and composing new messages.
 *
 * @example
 * <ChatContent />
 */

import { useRoute } from 'vue-router'
import { chatContentData } from './data/chat-content.data'

/**
 * The current route object for navigation handling
 */
const route = useRoute()

const chatUsers = chatContentData.users

const activeUser = chatContentData.activeUser

const chatMessages = chatContentData.messages

const chatTabs = chatContentData.tabs
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
              type="text"
              class="form-control shadow-none text-black rounded-0 border-0"
              placeholder="Search message"
            />
            <button type="submit" class="bg-transparent text-primary transition p-0 border-0">
              <i class="flaticon-search-interface-symbol"></i>
            </button>
          </form>

          <!-- Chat Tabs Navigation -->
          <div class="chat-tabs">
            <router-link
              v-for="tab in chatTabs"
              :key="tab.path"
              :to="tab.path"
              class="text-decoration-none fw-medium transition text-center d-block"
              :class="{ active: route.path === tab.path }"
            >
              {{ tab.label }}
            </router-link>
          </div>

          <!-- Chat Users List -->
          <div class="chat-users-list">
            <div
              v-for="(user, index) in chatUsers"
              :key="index"
              class="single-user-item position-relative"
              :class="{ active: user.isActive }"
            >
              <div class="d-flex align-items-center">
                <img :src="user.avatar" width="44" height="44" class="rounded-circle" alt="user" />
                <div class="ms-12">
                  <span class="title d-block text-black fs-md-15 fs-lg-16 fw-medium">
                    {{ user.name }}
                    <span class="ms-5 text-muted fw-normal fs-12">
                      {{ user.lastSeen }}
                    </span>
                  </span>
                  <span class="d-block" :class="user.isTyping ? 'text-success' : 'text-muted'">
                    {{ user.isTyping ? 'Typing...' : user.lastMessage }}
                  </span>
                </div>
              </div>
              <span
                v-if="user.unreadCount > 0"
                class="dot-badge text-center d-block fs-12 fw-semibold text-white rounded-circle"
                :class="user.unreadCount === 1 ? 'bg-secondary' : 'bg-danger'"
              >
                {{ user.unreadCount }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Main Window -->
    <div class="col-lg-8 col-xxxl-9">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-card">
        <!-- Chat Header -->
        <div
          class="card-head box-shadow bg-white d-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="d-flex align-items-center">
            <img
              :src="activeUser.avatar"
              width="44"
              height="44"
              class="rounded-circle"
              alt="user"
            />
            <div class="ms-15">
              <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium">
                {{ activeUser.name }}
              </span>
              <span class="d-block text-success">{{ activeUser.status }}</span>
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
              <li v-for="(action, index) in activeUser.actions" :key="index">
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                  <i :class="action.icon + ' me-8'"></i> {{ action.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Chat Body -->
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="chat-list">
            <!-- Info Separator (Today) -->
            <div class="chat-item info text-center position-relative">
              <span class="d-inline-block fs-12 text-muted bg-white ps-12 pe-12 lh-1">Today</span>
            </div>

            <!-- Chat Messages -->
            <div
              v-for="(message, index) in chatMessages"
              :key="index"
              class="chat-item position-relative"
              :class="{ right: message.isOutgoing }"
            >
              <!-- User Avatar and Name (only for incoming messages) -->
              <template v-if="!message.isOutgoing">
                <img
                  :src="message.avatar"
                  width="44"
                  height="44"
                  class="rounded-circle user"
                  alt="user"
                />
                <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10">
                  {{ message.sender }}
                  <span class="fs-12 text-muted fw-noarmal ms-5">{{ message.time }}</span>
                </span>
              </template>

              <!-- Only timestamp for outgoing messages -->
              <span v-else class="fs-12 text-muted fw-noarmal d-block mb-10">
                {{ message.time }}
              </span>

              <!-- Message Content -->
              <div class="message position-relative">
                <div class="inner">
                  <p class="fs-md-15 fs-lg-16 lh-base">
                    {{ message.content }}
                  </p>
                </div>

                <!-- Message Actions -->
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
                    <li v-for="(action, actionIndex) in message.actions" :key="actionIndex">
                      <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                        <i :class="action.icon + ' me-8'"></i> {{ action.label }}
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Emoji Reaction -->
                <div class="emoji">
                  <button type="button" class="bg-transparent p-0 border-0 transition">
                    <i class="ph ph-smiley"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Message Input Form -->
          <form>
            <div class="write-your-message position-relative">
              <div class="write-message position-relative">
                <input
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
                  v-for="(button, index) in chatContentData.messageButtons"
                  :key="index"
                  type="button"
                  class="border-0 d-inline-block position-relative text-center transition"
                  :class="{ active: button.isActive }"
                >
                  <i :class="button.icon"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
