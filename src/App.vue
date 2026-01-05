<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="p-5">
    <router-view />
  </main>

  <footer class="">
    <Footer />
  </footer>
</template>
