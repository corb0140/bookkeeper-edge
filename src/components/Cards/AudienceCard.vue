<script setup>
const props = defineProps({
  audience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <span class="relative flex-1 w-full 2xl:w-50">
    <div
      :style="{ backgroundColor: audience.color }"
      class="absolute top-5 left-8 h-1/2 w-1/2 blur-xl opacity-15 rounded-lg"
    />

    <div
      class="bg-white/5 border border-white/20 inset-1 shadow-sm max-w-30 2xl:max-w-60 flex flex-col p-5 2xl:p-8 rounded-lg gap-2 items-center relative z-10"
    >
      <div
        class="rounded-full p-2 bg-white h-10 2xl:h-20 w-10 2xl:w-20 flex items-center justify-center"
      >
        <i :class="audience.icon" class="text-light-blue text-2xl" />
      </div>
      <p class="text-sm text-center 2xl:text-xl 2xl:mt-1">
        {{ audience.title }}
      </p>
    </div>
  </span>
</template>
