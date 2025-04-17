<script setup lang="ts">
/**
 * SupportDesk Component
 * -----------------------------------------------------------------------------
 * This component presents an overview of the support desk dashboard featuring a variety
 * of sections that cover different aspects of support operations. These include, but
 * are not limited to:
 *   - What is happening on the support desk.
 *   - Complaint resolution status.
 *   - Average speed of answering tickets.
 *   - Tickets charts and related stats.
 *   - Performance insights of top help agents.
 *   - Breakdown of unresolved tickets by priority.
 *   - Customer satisfaction metrics.
 *   - A list of unsolved tickets.
 *   - A to-do list for pending tasks.
 *
 * @usage
 * <SupportDesk />
 *
 * @components (auto-imported)
 *   - SupportDeskWhatHappening
 *   - ResolveComplaints
 *   - AverageSpeedOfAnswer
 *   - TicketsChart
 *   - NumberOfTickets
 *   - TopPerformerHelpAgent
 *   - UnresolvedTicketsByPriority
 *   - CustomerSatisfaction
 *   - UnsolvedTickets
 *   - ToDoList
 *
 * @layout
 * The dashboard is organized into a responsive grid layout where:
 *   - The top row divides the view between a "SupportDeskWhatHappening" section and a sub-row containing
 *     "ResolveComplaints" and "AverageSpeedOfAnswer".
 *   - Subsequent rows display ticket metrics and performance insights.
 *   - Layout is designed to be responsive based on the screen size.
 */

defineOptions({
  name: 'SupportDesk',
})
</script>

<template>
  <div class="row">
    <div class="col-xxl-7">
      <SupportDeskWhatHappening />
    </div>
    <div class="col-xxl-5">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <ResolveComplaints />
        </div>
        <div class="col-lg-6 col-md-6">
          <AverageSpeedOfAnswer />
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <TicketsChart />
    </div>
    <div class="col-xxl-6">
      <NumberOfTickets />
    </div>
    <div class="col-xxl-3">
      <TopPerformerHelpAgent />
    </div>
    <div class="col-xxl-6">
      <UnresolvedTicketsByPriority />
    </div>
    <div class="col-xxl-3">
      <CustomerSatisfaction />
    </div>
    <div class="col-xxl-8">
      <UnsolvedTickets />
    </div>
    <div class="col-xxl-4">
      <ToDoList />
    </div>
  </div>
</template>
