<template>
  <main>
    <app-container>
      <h1>Здесь все котики</h1>
      <ul class="kitty-list">
        <li v-for="card in storeKitties.kittiesList" :key="card.id">
          <app-card :elem="card"></app-card>
        </li>
      </ul>
      <button class="more-btn">... загружаем еще котиков ...</button>
      <div class="loader" v-if="storeKitties.isLoading">
        <img src="../assets/loader.svg" alt="Загрузка..." role="img" width="281" height="281"/>
      </div>
    </app-container>
  </main>
</template>

<script setup>
import AppContainer from "../components/AppContainer.vue";
import AppCard from "../components/AppCard.vue";
import { useKittyStore } from "../stores/KittiesStore";
import { onMounted } from "vue";
const storeKitties = useKittyStore();

onMounted(async () => {
  storeKitties.getKitties();
});
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
