import { defineStore } from "pinia";
import { TOKEN, LIMIT, URL_GET } from "../helpers/constant.js";

export const useKittyStore = defineStore("KittiesStore", {
  state: () => ({
    kittiesList: [],
    isLoading: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getKitties() {
      this.isLoading = true;
      const response = await fetch(URL_GET, {
        method: "GET",
        headers: {
          "x-api-key": TOKEN,
        },
      });
      const result = await response.json();
      console.log(result);
      this.kittiesList = result;
      this.isLoading = false
    },
    increment() {
      // this.counter++;
    },
  },
});
