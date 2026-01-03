<script setup>
import "primeicons/primeicons.css";

import socials from "../data/social-media.json";
</script>

<template>
  <div
    class="mt-20 min-h-100 w-full border-t border-t-light-blue/80 flex flex-col px-10 items-center justify-center"
  >
    <div
      class="w-full py-5 min-h-50 flex flex-col lg:flex-row lg:justify-around items-center lg:items-start gap-10 border-b border-b-light-blue/80"
    >
      <!-- LOGO & LANGUAGE -->
      <div
        class="flex flex-col items-center lg:items-start h-full gap-2 relative"
      >
        <router-link to="/">
          <img
            class="h-20 w-20 lg:h-15 lg:w-15"
            src="../assets/imgs/logo.svg"
            alt="image of company logo"
          />
        </router-link>

        <div class="lg:mt-2 flex items-center gap-4">
          <i class="pi pi-language text-[22px] lg:text-[18px]" />
          <p class="text-lg lg:text-[16px]">English</p>
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-col gap-2 w-full lg:w-auto">
        <p class="font-bold text-lg lg:text-[16px] mb-2">Bookkeeper's Edge</p>

        <ul class="flex lg:flex-col gap-4">
          <li class="lg:text-sm">
            <router-link to="/pricing">Pricing</router-link>
          </li>
          <li class="lg:text-sm">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>

      <!-- SOCIAL MEDIA -->
      <div class="flex flex-col w-full lg:w-auto gap-2">
        <p class="font-bold text-lg lg:text-[16px] mb-2">Social Media</p>
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
            class="flex items-center gap-4"
          >
            <i :class="social.icon" class="text-[18px] lg:text-[14px]" />
            <p>{{ social.name }}</p>
          </a>
        </div>
      </div>

      <!-- CONTACT -->
      <div class="flex flex-col w-full lg:w-auto gap-2">
        <p class="font-bold text-lg lg:text-[16px] mb-2">Contact</p>

        <div class="flex flex-col gap-3">
          <span class="flex items-center gap-2 lg:gap-4">
            <i class="pi pi-envelope lg:text-[14px]" />
            Shaquile.v.clarke@gmail.com
          </span>
          <span class="flex items-center gap-2 lg:gap-4">
            <i class="pi pi-phone lg:text-[14px]" /> xxx xxx-xxxx
          </span>
        </div>
      </div>
    </div>

    <!-- COPYRIGHT & PRIVACY POLICY -->
    <div
      class="w-full py-5 flex flex-col lg:flex-row lg:justify-between gap-5 text-sm font-light"
    >
      <p>© 2026 bookkeeper's edge. All rights reserved</p>
      <router-link to="/privacy-policy">privacy policy</router-link>
    </div>
  </div>
</template>
