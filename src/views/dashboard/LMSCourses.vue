<script setup lang="ts">
/**
 * LMSCoursesPage Component
 * -----------------------------------------------------------------------------
 * This component presents an overview of the LMS dashboard featuring a variety
 * of sections that cover different aspects of learning operations. These include:
 *   - Current highlights and news relevant to learning.
 *   - Today’s scheduled courses and events.
 *   - Average enrollment rate trends.
 *   - Course categories and student progress insights.
 *   - Ongoing and fundamental courses.
 *   - Course performance progress and a to-do list.
 *
 * @usage
 * <LMSCoursesPage />
 *
 * @components (auto-imported or imported directly)
 *   - LMSCoursesWhatHappening
 *   - TodaysCourse
 *   - TodaysEvent
 *   - AverageEnrollmentRate
 *   - CategoriesCourses
 *   - StudentsProgress
 *   - CoursesClass
 *   - FundamentalCourses
 *   - PerformanceProgress
 *   - ToDoList
 *
 * @layout
 * The dashboard is organized into a responsive grid layout where:
 *   - The top section features "LMSCoursesWhatHappening".
 *   - The next row shows today’s courses and events side by side.
 *   - The right side displays average enrollment rate.
 *   - The bottom rows feature a variety of course-related insights in a
 *     two-column responsive layout including student progress, categories,
 *     class details, and a to-do list.
 */

defineOptions({
  name: 'LMSCoursesPage',
})
</script>

<template>
  <LMSCoursesWhatHappening />

  <div class="row">
    <div class="col-xxl-6">
      <div class="row">
        <div class="col-lg-6">
          <TodaysCourse />
        </div>
        <div class="col-lg-6">
          <TodaysEvent />
        </div>
      </div>
    </div>

    <div class="col-xxl-6">
      <AverageEnrollmentRate />
    </div>

    <div class="col-xxl-4">
      <CategoriesCourses />
      <StudentsProgress />
    </div>

    <div class="col-xxl-8">
      <CoursesClass />
      <FundamentalCourses />
      <div class="row">
        <div class="col-lg-6 col-xxxl-5">
          <PerformanceProgress />
        </div>
        <div class="col-lg-6 col-xxxl-7">
          <ToDoList :list="4" />
        </div>
      </div>
    </div>
  </div>
</template>
