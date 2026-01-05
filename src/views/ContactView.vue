<script setup>
import { ref } from "vue";
import { usePlanStore } from "../stores/planStore";
import "primeicons/primeicons.css";

const planStore = usePlanStore();

// PRICING OPTIONS
const pricingOptions = [
  { id: "starter", label: "Starter Plan", price: 199 },
  { id: "growth", label: "Growth Plan", price: 349 },
  { id: "premium", label: "Premium Plan", price: 549 },
];

// SELECTED PLAN FROM PRICING
const defaultPlan =
  pricingOptions.find((plan) => plan.id === planStore.id) || pricingOptions[0];
const selectedPlan = ref(defaultPlan.id);

// FORM STATE
const form = ref({
  name: "",
  email: "",
  phone: "",
  occupation: "",
  business: "",
  password: "",
  message: "",
});

function selectPlan(id) {
  if (id !== null) {
    planStore.setPlan(id);
  }

  return console.error("error with selecting price");
}

// SUBMIT HANDLER
function submitForm() {
  form.value = {
    name: "",
    email: "",
    phone: "",
    occupation: "",
    business: "",
    password: "",
    message: "",
  };

  selectedPlan.value = pricingOptions[0].id;

  alert("Your message has been sent!");
}
</script>

<template>
  <section class="w-full py-10 2xl:py-20 lg:mx-auto lg:max-w-300 2xl:max-w-400">
    <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
      <!-- CONTACT -->
      <div class="space-y-6 lg:p-10">
        <div class="lg:mt-10">
          <h1
            class="text-2xl lg:text-5xl 2xl:text-7xl font-bold tracking-tight"
          >
            Bookkeeper's Edge
          </h1>
          <p class="mt-2 2xl:mt-8 2xl:text-xl">
            Professional bookkeeping services tailored to your business.
          </p>
        </div>

        <div class="space-y-3">
          <p class="flex items-center gap-3 2xl:text-xl">
            <i class="pi pi-envelope"></i>
            shaquile.v.clarke@gmail.com
          </p>

          <p class="flex items-center gap-3 2xl:text-xl">
            <i class="pi pi-phone"></i>
            (246) 825-2757
          </p>

          <p class="flex items-center gap-3 2xl:text-xl">
            <i class="pi pi-map-marker"></i>
            Remote Services • Christ Church Barbados
          </p>
        </div>
      </div>

      <!-- CONTACT FORM -->
      <form
        @submit.prevent="submitForm"
        class="bg-white rounded-2xl border shadow-sm p-6 space-y-6 text-primary"
      >
        <h2 class="text-xl font-semibold">Get in Touch</h2>

        <!-- PRICING SELECTION -->
        <div>
          <label class="text-sm font-medium mb-2"> Selected Plan </label>
          <select
            v-model="selectedPlan"
            @change="selectPlan(selectedPlan)"
            class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option
              v-for="option in pricingOptions"
              :key="option.id"
              :value="option.id"
            >
              {{ option.label }}
              ${{ option.price }}
            </option>
          </select>
        </div>

        <!-- NAME & EMAIL -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-medium mb-1">Name (required)</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label class="text-sm font-medium mb-1">Email (required)</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full rounded-lg border px-3 py-2"
            />
          </div>
        </div>

        <!-- OPTIONAL FIELDS -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-medium mb-1"> Phone Number </label>
            <input
              v-model="form.phone"
              type="tel"
              class="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label class="text-sm font-medium mb-1"> Business Name </label>
            <input
              v-model="form.business"
              type="text"
              class="w-full rounded-lg border px-3 py-2"
            />
          </div>
        </div>

        <!-- MESSAGE -->
        <div>
          <label class="text-sm font-medium mb-1"> Message </label>
          <textarea
            v-model="form.message"
            rows="4"
            class="w-full rounded-lg border px-3 py-2"
          ></textarea>
        </div>

        <!-- BUTTON -->
        <button
          type="submit"
          class="w-full md:w-auto px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
