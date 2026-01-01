<script setup>
import "primeicons/primeicons.css";
import ServiceCard from "../components/Cards/ServiceCard.vue";
import services from "../data/service-data.json";
</script>

<template>
  <!-- HERO SECTION -->
  <section
    id="hero"
    class="w-[clamp(300px,50vw,100vw)] mx-auto relative py-10 flex flex-col"
  >
    <div
      class="absolute -top-5 h-full rounded-full opacity-15 bg-white blur-[100px]"
    ></div>

    <h1 class="text-center lg:text-6xl">Your trusted partner in bookkeeping</h1>

    <p class="text-light text-center mt-5 lg:mt-10">
      Simplifying Your Finances So You Can Focus on Growing Your Business.
    </p>

    <button
      class="group relative overflow-hidden bg-white py-3 px-6 text-primary rounded-lg mt-10 lg:mt-20 self-center flex items-center gap-2"
    >
      <div
        class="flex items-center bg-white absolute h-full w-full -left-100 group-hover:left-0 transition-all duration-700"
      >
        <i
          class="pi pi-arrow-right mx-auto text-light-blue"
          style="font-size: 13px"
        />
      </div>
      <p class="font-medium">Get Free Consultation</p>
    </button>
  </section>

  <!-- SERVICES SECTION -->
  <section id="services" class="relative mt-20 py-5 lg:px-50">
    <h2 class="font-bold mb-10">Services</h2>

    <div
      class="relative flex flex-col lg:grid gap-6 lg:min-h-[80vh]"
      style="
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-auto-rows: auto;
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
      <div
        class="absolute left-0 top-0 bg-white/10 blur-[200px] h-full w-full -z-10"
      />
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
