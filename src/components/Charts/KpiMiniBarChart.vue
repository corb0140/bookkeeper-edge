<script setup>
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const chartData = {
  labels: props.data.map((_, i) => i),
  datasets: [
    {
      data: props.data,
      backgroundColor: "rgba(96,165,250,0.65)",
      borderRadius: 2,
      barThickness: 6,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};
</script>

<template>
  <div class="h-10 w-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
