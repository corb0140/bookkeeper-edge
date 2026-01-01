<script setup>
import MonthlyKpiCard from "./Cards/MonthlyKpiCard.vue";
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <MonthlyKpiCard
      title="Income"
      year="2026"
      prefix="$"
      value="124,500"
      :change="12.4"
      :chartData="[8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 35]"
    />

    <MonthlyKpiCard
      title="Expenses"
      year="2026"
      prefix="$"
      value="78,200"
      :change="-6.2"
      :chartData="[12, 11, 10, 9, 9, 8, 7, 7, 6, 5, 5, 3]"
    />

    <MonthlyKpiCard
      title="Clients"
      year="2026"
      value="42"
      :change="9.1"
      :chartData="[3, 4, 5, 6, 6, 7, 8, 12, 13, 15, 18, 22]"
    />
  </div>
</template>
