<template>
  <main>
    <app-container>
      <h1 class="visually-hidden">Здесь все котики</h1>
      <ul class="kitty-list">
        <li v-for="card in storeKitties.kittiesList" :key="card.id">
          <app-card :elem="card"></app-card>
        </li>
      </ul>
      <button class="more-btn" @click.prevent="getMoreKitty">... загружаем еще котиков ...</button>
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
import { onMounted } from "vue";
onMounted(async () => {
  storeKitties.getKitties();
});

function getMoreKitty() {
  storeKitties.getKitties();
}
</script>
<script>
export default {
  name: "all-kitty",
};
</script>
<style lang="scss">
.kitty-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  column-gap: 31px;
  row-gap: 51px;
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
