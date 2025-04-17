<script setup lang="ts">
/**
 * CRMSystemPage Component
 * -----------------------------------------------------------------------------
 * This component serves as the main dashboard for the CRM System, aggregating
 * multiple widgets that cover different aspects of customer relationship management:
 *   - New contacts, users, and leads
 *   - Top lead sources and outreach recommendations
 *   - Top performers and revenue targets by country
 *   - To‑do list and recent leads
 *   - Call leads statistics and campaign performance
 *   - Average call duration metrics
 *   - Client payment status overview
 *
 * @usage
 * <CRMSystemPage />
 *
 * @components (auto‑imported)
 *   - NewContact
 *   - NewUsers
 *   - NewLeads
 *   - MostLead
 *   - ForBetterOutreach
 *   - TopPerformer
 *   - RevenueTargetByCountry
 *   - CRMToDoLists
 *   - RecentLeads
 *   - CallLeads
 *   - CampaignsChart
 *   - AverageCallDuration
 *   - ClientPaymentStatus
 *
 * @layout
 * A two‑column responsive grid:
 *   - Left (9/12): stacked rows of summary cards and charts
 *   - Right (3/12): vertical list of call‑and‑campaign widgets and metrics
 */
defineOptions({ name: 'CRMSystemPage' })
</script>

<template>
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div class="col-lg-4"><NewContact /></div>
        <div class="col-lg-4"><NewUsers /></div>
        <div class="col-lg-4"><NewLeads /></div>
      </div>
      <div class="row">
        <div class="col-lg-8"><MostLead /></div>
        <div class="col-lg-4"><ForBetterOutreach /></div>
      </div>
      <div class="row">
        <div class="col-lg-4"><TopPerformer /></div>
        <div class="col-lg-8"><RevenueTargetByCountry /></div>
      </div>
      <div class="row">
        <div class="col-lg-5"><CRMToDoList /></div>
        <div class="col-lg-7"><RecentLeads /></div>
      </div>
    </div>
    <div class="col-xxl-3">
      <CallLeads />
      <CampaignsChart />
      <AverageCallDuration />
      <ClientPaymentStatus />
    </div>
  </div>
</template>
