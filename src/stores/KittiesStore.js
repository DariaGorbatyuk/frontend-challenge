import { defineStore } from "pinia";
import { TOKEN, URL_GET } from "../helpers/constant.js";

export const useKittyStore = defineStore("KittiesStore", {
  state: () => ({
    kittiesList: [],
    favoriteList: [],
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
      this.kittiesList = [...this.kittiesList, ...result];
      this.isLoading = false;
    },
    getState(id) {
      return this.favoriteList.findIndex((kitty) => kitty.id === id);
    },
    addToFav(kitty) {
      kitty.isFav = true;
      this.favoriteList.push(kitty);
    },
    removeFromFav(place, kitty) {
      kitty.isFav = false;
      this.favoriteList.splice(place, 1);
    },
  },
});
