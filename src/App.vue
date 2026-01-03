<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="max-w-screen">
    <header class="">
      <Navbar />
    </header>

    <main class="p-5">
      <router-view />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
