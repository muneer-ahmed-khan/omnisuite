<script setup lang="ts">
/**
 * LeadDetails.vue
 *
 * Parent wrapper for the lead details page.
 * Renders the LeadsInformation sidebar and four tab panes—TasksList, DealsList,
 * EmailsList, and AttachmentsList—using Bootstrap’s tab markup.
 *
 * Child components are auto‑imported; no explicit imports necessary.
 */
defineOptions({ name: 'LeadDetails' })
</script>

<template>
  <div class="row">
    <div class="col-lg-5 col-xl-4">
      <LeadsInformation />
    </div>
    <div class="col-lg-7 col-xl-8">
      <div class="leads-details-tabs">
        <ul class="nav nav-tabs border-0 mb-25" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100 active"
              id="tasks-tab"
              data-bs-toggle="tab"
              data-bs-target="#tasks-tab-pane"
              type="button"
              role="tab"
              aria-controls="tasks-tab-pane"
              aria-selected="true"
            >
              Tasks
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100"
              id="deals-tab"
              data-bs-toggle="tab"
              data-bs-target="#deals-tab-pane"
              type="button"
              role="tab"
              aria-controls="deals-tab-pane"
              aria-selected="false"
            >
              Deals
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100"
              id="emails-tab"
              data-bs-toggle="tab"
              data-bs-target="#emails-tab-pane"
              type="button"
              role="tab"
              aria-controls="emails-tab-pane"
              aria-selected="false"
            >
              Emails
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100"
              id="attachments-tab"
              data-bs-toggle="tab"
              data-bs-target="#attachments-tab-pane"
              type="button"
              role="tab"
              aria-controls="attachments-tab-pane"
              aria-selected="false"
            >
              Attachments
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="tasks-tab-pane" role="tabpanel" tabindex="0">
            <TasksList />
            <DealsList />
            <EmailsList />
            <AttachmentsList />
          </div>
          <div class="tab-pane fade" id="deals-tab-pane" role="tabpanel" tabindex="0">
            <DealsList />
          </div>
          <div class="tab-pane fade" id="emails-tab-pane" role="tabpanel" tabindex="0">
            <EmailsList />
          </div>
          <div class="tab-pane fade" id="attachments-tab-pane" role="tabpanel" tabindex="0">
            <AttachmentsList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
