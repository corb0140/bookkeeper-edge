<script setup>
import { ref } from "vue";
import { motion } from "motion-v";
import FinancialLineChart from "../Charts/FinancialLineChart.vue";
import MonthlyBarChart from "../Charts/MonthlyBarChart.vue";
import MonthlyKpiBlock from "../MonthlyKpiBlock.vue";

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
  index: Number,
});

const expanded = ref(false);
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: 50 }"
    :whileInView="{
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        easing: 'ease-in',
      },
    }"
    :inViewOptions="{ once: true }"
    class="bg-white/2 border border-white/20 backdrop-blur-lg rounded-xl p-6 cursor-pointer hover:scale-102 hover:shadow-sm transition-transform duration-300 flex flex-col"
  >
    <!-- ICON & TITLE -->
    <div class="flex items-center gap-4 mb-4">
      <div
        class="p-2 flex items-center justify-center rounded-full text-white text-2xl shadow-md"
      >
        <i :class="service.icon"></i>
      </div>

      <h3 class="flex-1 font-semibold text-xl grow">
        {{ service.title }}
      </h3>
    </div>

    <!-- DESCRIPTION -->
    <p class="text-sm text-gray-200 mb-4">{{ service.description }}</p>

    <!-- MINI CHART / ILLUSTRATION -->
    <div class="mb-4 w-full h-full">
      <FinancialLineChart v-if="service.title === 'Financial Reporting'" />

      <div v-if="service.title === 'Monthly Bookkeeping'">
        <MonthlyKpiBlock />
        <MonthlyBarChart class="mt-5" />
      </div>
    </div>

    <!-- DETAILS -->
    <button
      @click="expanded = !expanded"
      class="text-blue-400 text-sm font-medium mt-auto hover:underline self-start"
    >
      {{ expanded ? "Hide Details" : "Learn More" }}
    </button>

    <p v-if="expanded" class="text-gray-300 text-sm">{{ service.details }}</p>
  </motion.div>
</template>
