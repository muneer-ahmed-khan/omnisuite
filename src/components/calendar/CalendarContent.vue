<script setup lang="ts">
/**
 * CalendarContent Component
 *
 * This component renders a FullCalendar instance with a side panel.
 * It uses `@fullcalendar/core`, `dayGridPlugin`, and `timeGridPlugin`.
 *
 * Events are imported from an external static data file.
 */

import { onMounted } from 'vue'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import { calendarEvents } from './data/calendar-events.data'
// import TodaysSchedule from './TodaysSchedule.vue'

defineOptions({ name: 'CalendarContent' })

onMounted(() => {
  const calendarEl = document.getElementById('calendar')
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      initialDate: '2023-08-12',
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      events: calendarEvents,
    })
    calendar.render()
  }
})
</script>

<template>
  <div class="row">
    <div class="col-xxxl-9">
      <div class="card mb-25 border-0 rounded-0 bg-white calendar-card">
        <div class="card-body p-15 p-sm-20 p-sm-25 p-lg-30 letter-spacing">
          <div id="calendar"></div>
        </div>
      </div>
    </div>
    <div class="col-xxxl-3">
      <button
        type="button"
        class="default-btn mb-25 border-0 transition d-block w-100 text-center position-relative text-white fs-md-15 fs-lg-16 fw-medium pt-18 pb-18 ps-15 pe-15"
      >
        Create New Event
        <i class="flaticon-plus lh-1 fs-13 position-relative top-1 ms-5"></i>
      </button>
      <TodaysSchedule />
    </div>
  </div>
</template>
