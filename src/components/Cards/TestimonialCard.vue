<script setup>
const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    :class="
      testimonial.name !== 'Jason L.'
        ? 'bg-white group hover:z-10'
        : 'bg-white/2 border border-white/20 shadow-[0px_0px_10px_rgb(0,0,0,0.1)] backdrop-blur-xs group hover:bg-white transition-all duration-300'
    "
    class="rounded-xl p-6 flex flex-col min-h-45 not-lg:mt-5"
  >
    <p
      :class="
        testimonial.name !== 'Jason L.'
          ? 'text-primary'
          : 'text-white group-hover:text-primary transition-all duration-300'
      "
      class="text-sm mb-4"
    >
      “{{ testimonial.quote }}”
    </p>

    <div
      :class="
        testimonial.name !== 'Jason L.'
          ? 'text-primary'
          : 'text-white group-hover:primary transition-all duration-300'
      "
      class="mt-auto font-medium lg:text-sm text-primary"
    >
      {{ testimonial.name }}

      <span
        :class="
          testimonial.name !== 'Jason L.'
            ? 'text-gray-500'
            : 'text-silver group-hover:text-gray-500 transition-all duration-300'
        "
        class="block mt-0.5 text-xs md:text-sm"
      >
        {{ testimonial.businessType }}
      </span>
    </div>
  </div>
</template>
