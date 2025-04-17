<script setup lang="ts">
/**
 * TicketsChart Component
 * -----------------------------------------------------------------------------
 * Renders a grid of ticket status cards (On Hold, Due Today, Closed, Answered)
 * using chart-based stats pulled from their respective child components.
 */

defineOptions({ name: 'TicketsChart' })
</script>

<template>
  <div class="row">
    <div class="col-lg-6 col-sm-6">
      <OnHoldTicket />
    </div>
    <div class="col-lg-6 col-sm-6">
      <DueTicketsToday />
    </div>
    <div class="col-lg-6 col-sm-6">
      <ClosedTickets />
    </div>
    <div class="col-lg-6 col-sm-6">
      <AnsweredTickets />
    </div>
  </div>
</template>
