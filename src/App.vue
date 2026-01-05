<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

import { motion, useScroll } from "motion-v";
const { scrollYProgress } = useScroll();

const scrollIndicator = {
  scaleX: scrollYProgress,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "10px",
  originX: 0,
  backgroundColor: "hsl(219, 57%, 48%)",
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <Navbar />
    </header>

    <main class="p-5">
      <router-view />
    </main>

    <motion.div id="scroll-indicator" :style="scrollIndicator" />

    <footer class="mt-auto">
      <Footer />
    </footer>
  </div>
</template>
