<script setup>
const props = defineProps({
  text: String,
  onClick: Function,
});
</script>

<template>
  <button
    @click="onClick"
    class="group relative overflow-hidden bg-white py-3 2xl:py-5 px-6 2xl:px-9 text-primary rounded-lg flex items-center gap-2"
  >
    <div
      class="flex items-center bg-white absolute h-full w-full -left-100 group-hover:left-0 transition-all duration-700"
    >
      <i
        class="pi pi-arrow-right mx-auto text-primary/80"
        style="font-size: 13px"
      />
    </div>
    <p class="font-medium 2xl:text-xl">{{ text }}</p>
  </button>
</template>
