<script setup>
import { ref } from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const expanded = ref(false);
</script>

<template>
  <div
    class="bg-white/2 border border-light-blue/70 backdrop-blur-lg rounded-xl p-6 cursor-pointer hover:scale-102 hover:shadow-sm transition-transform duration-300 flex flex-col"
  >
    <!-- ICON & TITLE -->
    <div class="flex items-center gap-4 mb-4">
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl shadow-md"
      >
        <i :class="service.icon"></i>
      </div>
      <h3 class="font-semibold text-xl">{{ service.title }}</h3>
    </div>

    <!-- DESCRIPTION -->
    <p class="text-sm text-gray-200 mb-4">{{ service.description }}</p>

    <!-- MINI CHART / ILLUSTRATION -->
    <!-- <div class="mb-4 w-full h-20"></div> -->

    <!-- DETAILS -->
    <button
      @click="expanded = !expanded"
      class="text-blue-400 text-sm font-medium hover:underline self-start"
    >
      {{ expanded ? "Hide Details" : "Learn More" }}
    </button>
    <p v-if="expanded" class="text-gray-300 text-sm">{{ service.details }}</p>
  </div>
</template>
