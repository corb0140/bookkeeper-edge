<script setup>
import "primeicons/primeicons.css";
import pricing from "../data/pricing-data.json";
import { usePlanStore } from "../stores/planStore";
import { useRouter } from "vue-router";

const router = useRouter();
const planStore = usePlanStore();

function selectPlan(id) {
  if (id !== null) {
    planStore.setPlan(id);

    return router.push("/contact");
  }

  return console.error("error with selecting price");
}
</script>

<template>
  <section class="w-full px-4 py-12">
    <!-- Header -->
    <div class="max-w-5xl mx-auto text-center mb-12">
      <h1 class="text-3xl md:text-4xl 2xl:text-6xl font-bold">
        Bookkeeping Plans That Fit Your Business
      </h1>
      <p class="mt-4 2xl:mt-10 max-w-2xl mx-auto 2xl:text-xl">
        Flexible bookkeeping plans designed to support your business at every
        stage.
      </p>
    </div>

    <!-- Pricing Cards -->
    <div
      class="max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        class="bg-white rounded-2xl shadow-sm p-6 flex flex-col relative"
        v-for="data in pricing"
        :key="data.id"
        :class="data.id === 'growth' && 'border-3 border-light-blue lg:top-4'"
      >
        <span
          :class="
            data.id === 'growth' &&
            'absolute top-4 right-4 text-xs 2xl:text-sm bg-primary text-white px-3 py-1 2xl:py-2 rounded-lg'
          "
        >
          {{ data.badge }}
        </span>

        <h2 class="text-xl 2xl:text-4xl font-semibold text-gray-800">
          {{ data.name }}
        </h2>

        <p class="text-gray-500 mt-2 2xl:text-xl">
          {{ data.description }}
        </p>

        <div class="my-6">
          <span class="text-4xl font-bold text-gray-800">
            ${{ data.price }}
          </span>
          <span class="text-gray-500 2xl:text-xl">/{{ data.billing }}</span>
        </div>

        <ul class="space-y-3 text-gray-600 flex-1">
          <li
            class="flex items-center gap-3"
            v-for="(feature, index) in data.features"
            :key="index"
          >
            <i :class="feature.icon" class="text-primary 2xl:text-xl" />
            <p class="2xl:text-xl">{{ feature.label }}</p>
          </li>
        </ul>

        <button
          class="mt-10 w-full py-3 2xl:py-5 rounded-xl bg-primary text-white hover:bg-light-blue transition"
          @click="selectPlan(data.id)"
        >
          {{ data.cta }}
        </button>
      </div>
    </div>
  </section>
</template>
