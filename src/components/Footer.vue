<script setup>
import "primeicons/primeicons.css";

import socials from "../data/social-media.json";
</script>

<template>
  <div
    class="min-h-100 2xl:min-h-150 max-w-full border-t border-t-white/15 flex flex-col px-10 items-center justify-center"
  >
    <div
      class="pb-15 w-full min-h-50 flex flex-col md:flex-row md:justify-around items-center md:items-start gap-10 border-b border-b-white/15"
    >
      <!-- LOGO & LANGUAGE -->
      <div class="flex flex-col w-full md:w-auto h-full gap-2 relative">
        <router-link to="/">
          <img
            class="h-20 w-20 md:hidden"
            src="../assets/imgs/logo.svg"
            alt="image of company logo"
          />

          <img
            class="md:h-25 md:w-25 lg:h-30 lg:w-30 2xl:h-45 2xl:w-45 hidden md:block"
            src="../assets/imgs/logo-text.svg"
            alt="image of company logo"
          />
        </router-link>
      </div>

      <!-- LINKS -->
      <div class="flex flex-col gap-2 w-full md:w-auto">
        <p class="font-bold text-lg lg:text-[16px] 2xl:text-3xl mb-2">
          Bookkeeper's Edge
        </p>

        <ul class="flex lg:flex-col gap-4">
          <li class="lg:text-sm 2xl:text-2xl">
            <router-link to="/pricing">Pricing</router-link>
          </li>
          <li class="lg:text-sm 2xl:text-2xl">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>

      <!-- SOCIAL MEDIA -->
      <div class="flex flex-col w-full md:w-auto gap-2">
        <p class="font-bold text-lg lg:text-[16px] 2xl:text-3xl mb-2">
          Social Media
        </p>
        <div
          v-for="(social, index) in socials"
          :key="index"
          :class="index !== 0 && 'mt-2'"
        >
          <a
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.ariaLabel"
            class="flex items-center gap-4 2xl:gap-6"
          >
            <i
              :class="social.icon"
              class="text-[18px] lg:text-[14px] 2xl:text-2xl"
            />
            <p class="2xl:text-2xl">{{ social.name }}</p>
          </a>
        </div>
      </div>

      <!-- CONTACT -->
      <div class="flex flex-col w-full md:w-auto gap-2">
        <p class="font-bold text-lg lg:text-[16px] 2xl:text-3xl mb-2">
          Contact
        </p>

        <div class="flex flex-col gap-3">
          <span class="flex items-center gap-2 lg:gap-4">
            <i class="pi pi-envelope lg:text-[14px] 2xl:text-xl" />
            <p class="2xl:text-2xl">shaquile.v.clarke@gmail.com</p>
          </span>
          <span class="flex items-center gap-2 lg:gap-4">
            <i class="pi pi-phone lg:text-[14px] 2xl:text-xl" />
            <p class="2xl:text-2xl">(246) 825-2757</p>
          </span>
        </div>
      </div>
    </div>

    <!-- COPYRIGHT & PRIVACY POLICY -->
    <div
      class="w-full py-5 flex flex-col md:flex-row md:justify-between gap-5 text-sm font-light"
    >
      <p class="2xl:text-xl">© 2026 bookkeeper's edge.</p>
      <router-link to="/privacy-policy"
        ><p class="2xl:text-xl">privacy policy</p></router-link
      >
    </div>
  </div>
</template>
