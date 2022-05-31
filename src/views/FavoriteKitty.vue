<template>
  <main>
    <app-container>
      <h1 class="visually-hidden">Здесь самые любимые котики</h1>

      <ul class="kitty-list">
        <li v-for="card in storeKitties.favoriteList" :key="card.id">
          <app-card :elem="card"></app-card>
        </li>
      </ul>
    </app-container>
  </main>
</template>

<script>
export default {
  name: 'FavoriteKitty',
}
</script>
<script setup>
import AppContainer from "../components/AppContainer.vue";
import AppCard from "../components/AppCard.vue";
import { useKittyStore } from "../stores/KittiesStore";

const storeKitties = useKittyStore();
</script>
