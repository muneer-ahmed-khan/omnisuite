<script setup lang="ts">
/**
 * AverageSpeedOfAnswer Component
 * -----------------------------------------------------------------------------
 * This component displays a card summarizing the average speed at which
 * incoming calls are answered by the support team. It shows the current
 * average speed and includes a brief description about the metric.
 *
 * @usage
 * <AverageSpeedOfAnswer />
 *
 * @note
 * The component uses static values for the average speed of answer and
 * is styled with pre-defined classes to ensure consistency with the project's UI.
 */

defineOptions({ name: 'AverageSpeedOfAnswer' })
</script>

<template>
  <div class="card mb-25 border-0 rounded-0 bg-white time-duration-box">
    <div class="card-body letter-spacing">
      <div class="icon position-relative lh-1 text-primary">
        <i class="flaticon-copy"></i>
      </div>
      <div class="content">
        <span class="d-block fw-bold text-dark-emphasis mb-1"> Average Speed Of Answer </span>
        <h2 class="mb-0 fw-black">1 min 12s</h2>
      </div>
      <p class="mb-0 fw-medium">Measure how quickly support staff answer incoming calls.</p>
    </div>
  </div>
</template>
