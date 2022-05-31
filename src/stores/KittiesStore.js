import {defineStore} from "pinia";
import {TOKEN, URL_GET} from "../helpers/constant.js";
import {setItem, getItem, removeItem} from "../helpers/storage";

export const useKittyStore = defineStore("KittiesStore", {
    state: () => ({
        kittiesList: [],
        favoriteList: [],
        isLoading: false,
    }),
    getters: {

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
        checkIsFavorite() {
            const length = localStorage.length
            if (length === 0) {
                return
            }
            for (let i = 0; i < length; i++) {
              this.favoriteList = [...this.favoriteList, getItem(localStorage.key(i))]
            }
        },
        getState(id) {
            return this.favoriteList.findIndex((kitty) => kitty.id === id);
        },
        addToFav(kitty) {
            kitty.isFav = true;
            setItem(kitty.id, kitty)
            this.favoriteList.push(kitty);
        },
        removeFromFav(place, kitty) {
            kitty.isFav = false;
            removeItem(kitty.id)
            this.favoriteList.splice(place, 1);
        },
    },
});
