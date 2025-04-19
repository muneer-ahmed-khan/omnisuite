<script setup lang="ts">
/**
 * ChatGroup Component
 *
 * A component that displays a chat interface for group messaging, showing a sidebar with
 * available groups and the active chat conversation.
 *
 * @component
 * @example
 * <ChatGroup />
 */
import { ref } from 'vue'
import { chatGroupData } from './data/chat-group.data'

defineOptions({ name: 'ChatGroup' })

const searchInput = ref('')
</script>

<template>
  <div class="row">
    <!-- Chat Sidebar Column -->
    <div class="col-lg-4 col-xxxl-3">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-sidebar">
        <div class="card-body">
          <!-- Search Box -->
          <form class="search-box position-relative">
            <input
              v-model="searchInput"
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
              v-for="tab in chatGroupData.tabs"
              :key="tab.path"
              :to="tab.path"
              class="text-decoration-none fw-medium transition text-center d-block"
              :class="{ active: tab.path === '/chat-group' }"
            >
              {{ tab.label }}
            </router-link>
          </div>

          <!-- Create Group Button -->
          <div class="create-new-group-btn">
            <button
              type="button"
              class="d-block fs-md-15 fs-lg-16 fw-medium d-block w-100 text-center bg-info border-0 text-white position-relative"
            >
              Create New Group <i class="flaticon-plus"></i>
            </button>
          </div>

          <!-- Groups List -->
          <div class="chat-users-list">
            <div
              v-for="(group, index) in chatGroupData.groups"
              :key="index"
              class="single-user-item position-relative"
              :class="{ active: group.isActive }"
            >
              <div class="d-flex align-items-center">
                <img
                  :src="group.avatar"
                  width="44"
                  height="44"
                  class="rounded-circle"
                  alt="group"
                />
                <div class="ms-12">
                  <span class="title d-block text-black fs-md-15 fs-lg-16 fw-medium">
                    {{ group.name }}
                  </span>
                  <span
                    class="d-block"
                    :class="{ 'text-black': group.isActive, 'text-muted': !group.isActive }"
                  >
                    {{ group.messagePreview }}
                  </span>
                </div>
              </div>
              <span
                v-if="group.unreadCount && group.unreadCount > 0"
                class="dot-badge text-center d-block fs-12 fw-semibold text-white bg-danger rounded-circle"
              >
                {{ group.unreadCount }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Content Column -->
    <div class="col-lg-8 col-xxxl-9">
      <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing chat-group-card chat-card">
        <!-- Chat Header -->
        <div
          class="card-head box-shadow bg-white d-md-flex align-items-center justify-content-between p-15 p-sm-20 p-md-25"
        >
          <div class="d-flex align-items-center">
            <img
              :src="chatGroupData.activeGroup.avatar"
              width="44"
              height="44"
              class="rounded-circle"
              alt="group"
            />
            <div class="ms-15">
              <span class="d-block text-black fs-15 fs-md-16 fs-lg-18 fw-bold">
                {{ chatGroupData.activeGroup.name }}
              </span>
            </div>
          </div>

          <div class="d-flex align-items-center mt-15 mt-md-0">
            <div class="users-list d-flex align-items-center">
              <div
                v-for="(member, index) in chatGroupData.groupMembers"
                :key="index"
                class="rounded-circle text-center"
                :class="{
                  [`bg-${member.backgroundColor}`]: member.backgroundColor,
                  'd-flex align-items-center justify-content-center text-white fs-16 fw-bold':
                    member.initial,
                }"
              >
                <img v-if="member.avatar" :src="member.avatar" class="rounded-circle" alt="user" />
                <template v-else-if="member.initial">
                  {{ member.initial }}
                </template>
              </div>
            </div>

            <!-- Actions Dropdown -->
            <div class="dropdown ms-8">
              <button
                class="dropdown-toggle card-dot-btn lh-1 position-relative top-4 bg-transparent border-0 shadow-none p-0 transition"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="flaticon-dots"></i>
              </button>
              <ul class="dropdown-menu">
                <li v-for="(action, index) in chatGroupData.messageActions" :key="index">
                  <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                    <i :class="action.icon + ' me-8'"></i> {{ action.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Chat Body -->
        <div class="card-body p-15 p-sm-20 p-md-25">
          <div class="chat-list">
            <!-- Today Separator -->
            <div class="chat-item info text-center position-relative">
              <span class="d-inline-block fs-12 text-muted bg-white ps-12 pe-12 lh-1"> Today </span>
            </div>

            <!-- Chat Messages -->
            <template v-for="(message, index) in chatGroupData.messages" :key="index">
              <div class="chat-item position-relative" :class="{ right: message.isOutgoing }">
                <template v-if="!message.isOutgoing">
                  <img
                    :src="message.user?.avatar"
                    width="44"
                    height="44"
                    class="rounded-circle user"
                    alt="user"
                  />
                  <span class="d-block text-black fs-md-15 fs-lg-16 fw-medium mb-10">
                    {{ message.user?.name }}
                    <span class="fs-12 text-muted fw-noarmal ms-5">{{ message.time }}</span>
                  </span>
                </template>
                <template v-else>
                  <span class="fs-12 text-muted fw-noarmal d-block mb-10">{{ message.time }}</span>
                </template>

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
                      <li
                        v-for="(action, actionIndex) in chatGroupData.messageActions"
                        :key="actionIndex"
                      >
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="javascript:void(0);"
                        >
                          <i :class="action.icon + ' me-8'"></i> {{ action.label }}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- Emoji Button -->
                  <div class="emoji">
                    <button type="button" class="bg-transparent p-0 border-0 transition">
                      <i class="ph ph-smiley"></i>
                    </button>
                  </div>
                </div>
              </div>
            </template>
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

              <!-- Message Action Buttons -->
              <div class="buttons-list">
                <button
                  v-for="(button, index) in chatGroupData.messageButtons"
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
