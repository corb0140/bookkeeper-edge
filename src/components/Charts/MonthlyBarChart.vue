<script setup>
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [18, 22, 20, 26, 30, 34, 40, 42, 48, 53, 59, 55],
      backgroundColor: "rgba(96,165,250,0.6)",
      borderRadius: 4,
      barThickness: 12,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.parsed.y} reports`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#9CA3AF",
        font: { size: 10 },
      },
      border: { display: true },
    },
    y: {
      grid: {
        color: "rgba(255,255,255,0.08)",
      },
      ticks: {
        color: "#9CA3AF",
        font: { size: 10 },
      },
      border: { display: true },
    },
  },
};
</script>

<template>
  <div class="relative w-full h-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
