<script setup>
import KpiMiniBarChart from "../Charts/KpiMiniBarChart.vue";

const props = defineProps({
  title: String,
  year: String,
  value: [String, Number],
  prefix: {
    type: String,
    default: "",
  },
  change: Number,
  chartData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-2 p-2">
    <!-- HEADER -->
    <div class="flex justify-between text-xs text-gray-400">
      <span>{{ title }}</span>
      <span>{{ year }}</span>
    </div>

    <!-- VALUE -->
    <div class="text-lg font-semibold">{{ prefix }}{{ value }}</div>

    <!-- CHART -->
    <KpiMiniBarChart :data="chartData" />

    <!-- PERCENTAGE -->
    <div
      class="text-xs font-medium"
      :class="change >= 0 ? 'text-green-400' : 'text-red-400'"
    >
      {{ change >= 0 ? "+" : "" }}{{ change }}%
    </div>
  </div>
</template>
