import { defineStore } from "pinia";

export const usePlanStore = defineStore("price", {
  state: () => ({
    id: "",
  }),
  actions: {
    setPlan(id) {
      this.id = id;
    },
  },
  persist: true,
});
