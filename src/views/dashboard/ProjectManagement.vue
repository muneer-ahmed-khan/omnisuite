<script setup lang="ts">
/**
 * ProjectManagementPage Component
 * -----------------------------------------------------------------------------
 * This component provides an overview of project management features including
 * task statistics, task overviews, project distributions, recent activities,
 * working schedules, project stats, and to-do and active tasks lists.
 *
 * @usage
 * <ProjectManagementPage />
 *
 * @components
 * Auto-imported components used in this layout:
 *   - StatsItem
 *   - TaskOverview
 *   - ProjectDistribution
 *   - RecentActivity
 *   - WorkingSchedule
 *   - ProjectStats
 *   - ToDoList
 *   - ActiveTasks
 *
 * @layout
 * - A primary row layout that includes two main columns: one for task overview along
 *   with project distribution and recent activities, and another for working schedule.
 * - Followed by a project stats section.
 * - And a final row that splits the screen between a to-do list and active tasks.
 *
 * @note
 * This component follows the Vue 3 Composition API standards and uses the <script setup>
 * syntax to simplify the component structure.
 */

defineOptions({
  name: 'ProjectManagementPage',
})
</script>

<template>
  <!-- Stats Section -->
  <StatsItem />

  <!-- Main Row with Task Overview and Working Schedule -->
  <div class="row">
    <!-- Left Column: Task Overview and Subsections -->
    <div class="col-xxl-7 col-xxxl-8">
      <TaskOverview />

      <!-- Sub-row with Project Distribution and Recent Activity -->
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <ProjectDistribution />
        </div>
        <div class="col-lg-6 col-md-12">
          <RecentActivity />
        </div>
      </div>
    </div>

    <!-- Right Column: Working Schedule -->
    <div class="col-xxl-5 col-xxxl-4">
      <WorkingSchedule />
    </div>
  </div>

  <!-- Project Stats Section -->
  <ProjectStats />

  <!-- Bottom Row: To-Do List and Active Tasks -->
  <div class="row">
    <div class="col-lg-5 col-xxl-4">
      <ToDoList />
    </div>
    <div class="col-lg-7 col-xxl-8">
      <ActiveTasks />
    </div>
  </div>
</template>
