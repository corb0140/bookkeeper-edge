<script setup>
const props = defineProps({
  audience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <span class="relative flex-1 w-full">
    <div
      :style="{ backgroundColor: audience.color }"
      class="absolute top-5 left-8 h-1/2 w-1/2 blur-md opacity-40 rounded-lg"
    />

    <div
      class="bg-light-blue/55 border border-white/20 inset-1 shadow-sm max-w-30 flex flex-col p-5 rounded-lg gap-2 items-center relative z-10"
    >
      <div
        class="rounded-full p-2 bg-white h-10 w-10 flex items-center justify-center"
      >
        <i :class="audience.icon" class="text-light-blue" />
      </div>
      <p class="text-sm text-center">{{ audience.title }}</p>
    </div>
  </span>
</template>
