<script setup>
import "primeicons/primeicons.css";
import ServiceCard from "../components/ServiceCard.vue";
import services from "../data/service-data.json";
</script>

<template>
  <!-- HERO SECTION -->
  <section id="hero" class="relative py-10 flex flex-col">
    <div
      class="absolute -top-5 h-full w-full rounded-full opacity-15 bg-white blur-[100px]"
    ></div>

    <h1 class="text-center">Your trusted partner in bookkeeping</h1>

    <p class="text-light text-center mt-5">
      Simplifying Your Finances So You Can Focus on Growing Your Business.
    </p>

    <button
      class="bg-white py-3 px-6 text-primary rounded-lg mt-10 self-center flex items-center gap-2"
    >
      <p class="font-medium">Get Free Consultation</p>
      <i class="pi pi-arrow-right" style="font-size: 11px" />
    </button>
  </section>

  <!-- SERVICES SECTION -->
  <section id="services" class="py-5 lg:px-50">
    <h2 class="text-center text-3xl font-bold mb-10">Services</h2>

    <div
      class="flex flex-col lg:grid gap-6 lg:min-h-[80vh]"
      style="
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-auto-rows: 80px;
        grid-template-areas:
          'card1 card1 card2 card3'
          'card1 card1 card2 card3'
          'card1 card1 card2 card3'
          'card1 card1 card6 card6'
          'card4 card5 card6 card6'
          'card4 card5 card6 card6'
          'card4 card5 card6 card6';
      "
    >
      <ServiceCard
        v-for="(service, index) in services"
        :key="service.id"
        :service="service"
        :style="{
          gridArea:
            index === 0
              ? 'card1'
              : index === 1
              ? 'card2'
              : index === 2
              ? 'card3'
              : index === 3
              ? 'card4'
              : index === 4
              ? 'card5'
              : 'card6',
        }"
      />
    </div>
  </section>
</template>
