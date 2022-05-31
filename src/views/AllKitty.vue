<template>
  <main>
    <app-container>
      <h1 class="visually-hidden">Здесь все котики</h1>
      <ul class="kitty-list" ref="kittyList">
        <li v-for="card in storeKitties.kittiesList" :key="card.id">
          <app-card :elem="card"></app-card>
        </li>
      </ul>
      <button v-if="storeKitties.kittiesList.length > 0" class="more-btn" @click.prevent="getMoreKitty">... загружаем еще котиков ...</button>
      <app-loader v-if="storeKitties.isLoading"></app-loader>
    </app-container>
  </main>
</template>

<script setup>
import AppContainer from "../components/AppContainer.vue";
import AppCard from "../components/AppCard.vue";
import { useKittyStore } from "../stores/KittiesStore";
import AppLoader from "../components/AppLoader.vue";
const storeKitties = useKittyStore();
import { onMounted, ref } from "vue";

function getMoreKitty() {
  storeKitties.getKitties();
}

const kittyList = ref(null);
const observer = new IntersectionObserver(getMoreKitty,{

});
console.log(kittyList.value)
</script>
<script>
import {useKittyStore} from "../stores/KittiesStore";
import {onMounted} from "vue";

export default {
  name: "all-kitty",
};
</script>
<style lang="scss">
.kitty-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  column-gap: 31px;
  row-gap: 51px;
  padding-left: 0;
}

.more-btn {
  background-color: transparent;
  color: inherit;
  font: inherit;
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  cursor: pointer;
}
</style>
