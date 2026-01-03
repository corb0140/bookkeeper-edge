import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue";
import Pricing from "../views/PricingView.vue";
import Contact from "../views/ContactView.vue";
import PrivacyPolicy from "../views/PrivacyPolicyView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/pricing", component: Pricing },
  { path: "/contact", component: Contact },
  { path: "/privacy-policy", component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
