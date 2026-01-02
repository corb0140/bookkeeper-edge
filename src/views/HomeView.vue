<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import "primeicons/primeicons.css";

const router = useRouter();

import MainButton from "../components/MainButton.vue";
import ServiceCard from "../components/Cards/ServiceCard.vue";
import services from "../data/service-data.json";
import AudienceCard from "../components/Cards/AudienceCard.vue";
import audiences from "../data/target-audience-data.json";
import trustContent from "../data/trust-content.json";
import TestimonialCard from "../components/Cards/TestimonialCard.vue";
import testimonials from "../data/testimonials.json";

const openId = ref(null);

function toggleActiveId(id) {
  openId.value = openId.value === id ? null : id;
}

function navigateTo(path) {
  router.push(path);
}
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

    <MainButton
      :onClick="() => navigateTo('/contact')"
      text="Get Free Consultation"
      class="self-center"
    />
  </section>

  <!-- SERVICES SECTION -->
  <section id="services" class="relative mt-20 lg:px-50">
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

  <!-- TARGET AUDIENCE -->
  <section
    id="target-audience"
    class="mt-20 py-5 lg:px-50 flex flex-col items-center"
  >
    <div class="w-full md:w-[clamp(30vw,50vw,80vw)]">
      <h2 class="font-bold mb-10 text-center not-lg:text-2xl">
        Who I Can Help
      </h2>

      <p class="text-center">
        I help small business owners, freelancers, and service professionals
        manage their finances so they can focus on growing their business. I
        provide accurate, organized, and stress free bookkeeping.
      </p>
    </div>

    <div class="flex flex-col lg:flex-row items-center gap-5 mt-10">
      <div class="text-sm flex lg:flex-col gap-3 w-full">
        <AudienceCard
          v-for="audience in audiences.slice(0, 2)"
          :key="audience.id"
          :audience="audience"
        />
      </div>

      <div class="text-sm flex lg:flex-col gap-3 w-full lg:mt-5">
        <AudienceCard
          v-for="audience in audiences.slice(2, 4)"
          :key="audience.id"
          :audience="audience"
        />
      </div>

      <div class="text-sm flex lg:flex-col gap-3 w-full">
        <AudienceCard
          v-for="audience in audiences.slice(4, 6)"
          :key="audience.id"
          :audience="audience"
        />
      </div>
    </div>
  </section>

  <!-- TRUST SECTION -->
  <section id="trust" class="mt-20 py-5 lg:px-50 flex flex-col items-center">
    <div class="w-full">
      <h2 class="font-bold mb-10 text-center not-lg:text-2xl">
        Why Trust Bookkeeper's Edge
      </h2>

      <p class="text-center max-w-150 mx-auto">
        I provide dependable bookkeeping services built on accuracy, trust, and
        personalized support for your business.
      </p>
    </div>

    <!-- ACCORDION -->
    <div
      class="flex flex-col items-center gap-2 mt-8 w-full md:w-[70%] cursor-pointer"
      v-for="trust in trustContent"
      :key="trust.id"
      @click="toggleActiveId(trust.id)"
    >
      <!-- HEADER -->
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-3">
          <i class="pi pi-check-circle text-green"></i>
          <span class="font-medium">{{ trust.title }}</span>
        </div>

        <i
          class="pi"
          :class="openId === trust.id ? 'pi-chevron-up' : 'pi-chevron-down'"
        ></i>
      </div>

      <!-- CONTENT -->
      <transition name="accordion">
        <p v-if="openId === trust.id" class="mt-3 w-full">
          {{ trust.description }}
        </p>
      </transition>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section
    id="trust"
    class="mt-20 lg:mt-40 py-5 lg:px-50 flex flex-col lg:flex-row items-center lg:gap-x-15 lg:h-[70vh] w-full"
  >
    <div class="h-full flex flex-col items-start gap-4">
      <h2
        class="font-bold not-lg:mb-10 lg:mt-5 text-center mx-auto md:text-[clamp(1rem,4.5rem,3rem)]"
      >
        What Clients Say
      </h2>

      <p class="not-lg:text-center max-w-150">
        Trusted by small business owners who value accuracy, reliability, and
        peace of mind.
      </p>

      <MainButton
        :onClick="() => navigateTo('/')"
        text="See More Testimonials"
        class="mx-auto lg:mx-0"
      />
    </div>

    <div class="not-lg:mt-10 h-full md:flex md:gap-2 lg:block">
      <TestimonialCard
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.id"
        :testimonial="testimonial"
        class="flex-1"
        :class="
          index === 0
            ? 'lg:w-[clamp(50%,40vw,520px)]'
            : index === 1
            ? 'relative lg:w-[clamp(250px,20vw,400px)] lg:left-65 lg:bottom-5 z-10'
            : 'relative lg:w-[clamp(200px,300px,400px)] lg:left-5 lg:bottom-40 lg:min-h-60'
        "
      />
    </div>
  </section>
</template>

<style scoped>
.accordion-enter-active {
  transition: opacity 0.25s ease-in, transform 0.25s ease-in;
}

.accordion-leave-active {
  transition: opacity 0s ease-out, transform 0s ease-out;
}

.accordion-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.accordion-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
