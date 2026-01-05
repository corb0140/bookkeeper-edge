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
      <h1 class="text-3xl md:text-4xl font-bold">
        Bookkeeping Plans That Fit Your Business
      </h1>
      <p class="mt-4 max-w-2xl mx-auto">
        Flexible bookkeeping plans designed to support your business at every
        stage.
      </p>
    </div>

    <!-- Pricing Cards -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        class="bg-white rounded-2xl shadow-sm p-6 flex flex-col relative"
        v-for="data in pricing"
        :key="data.id"
        :class="data.id === 'growth' && 'border-3 border-blue-300 lg:top-3'"
      >
        <span
          :class="
            data.id === 'growth' &&
            'absolute top-4 right-4 text-xs bg-primary text-white px-3 py-1 rounded-full'
          "
        >
          {{ data.badge }}
        </span>

        <h2 class="text-xl font-semibold text-gray-800">{{ data.name }}</h2>

        <p class="text-gray-500 mt-2">
          {{ data.description }}
        </p>

        <div class="my-6">
          <span class="text-4xl font-bold text-gray-800">
            ${{ data.price }}
          </span>
          <span class="text-gray-500">/{{ data.billing }}</span>
        </div>

        <ul class="space-y-3 text-gray-600 flex-1">
          <li
            class="flex items-center gap-3"
            v-for="(feature, index) in data.features"
            :key="index"
          >
            <i :class="feature.icon" class="text-primary" />
            {{ feature.label }}
          </li>
        </ul>

        <button
          class="mt-10 w-full py-3 rounded-xl bg-primary text-white hover:bg-gray-900 transition"
          @click="selectPlan(data.id)"
        >
          {{ data.cta }}
        </button>
      </div>
    </div>
  </section>
</template>
