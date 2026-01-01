<script setup>
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [1200, 1800, 1600, 2200, 2600, 3100],
      borderColor: "#60A5FA",
      backgroundColor: "rgba(96,165,250,0.12)",
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: "#60A5FA",
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
        label: (ctx) => `$${ctx.parsed.y.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#9CA3AF",
        font: { size: 10 },
      },
      border: {
        display: true,
      },
    },
    y: {
      grid: {
        color: "rgba(255,255,255,0.08)",
      },
      ticks: {
        color: "#9CA3AF",
        font: { size: 10 },
        callback: (value) => `$${value / 1000}k`,
      },
      border: {
        display: true,
      },
    },
  },
};
</script>

<template>
  <div class="relative w-full h-full">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
