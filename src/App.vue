<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <Navbar />
    </header>

    <main class="p-5">
      <router-view />
    </main>

    <footer class="mt-auto">
      <Footer />
    </footer>
  </div>
</template>
