<template>
  <main>
    <app-container>
      <h1>Здесь все котики</h1>
      <ul class="kitty-list">
        <li v-for="card in list">
          <app-card :elem="card"></app-card>
        </li>
      </ul>
      <button class="more-btn">... загружаем еще котиков ...</button>
    </app-container>
  </main>
</template>

<script lang="js">
import AppContainer from "../components/AppContainer.vue";
import AppCard from '../components/AppCard.vue'
import {useKittyStore} from '../stores/KittiesStore'
export default {
  name: 'home',
  components: {
    AppContainer,
    AppCard
  },
  setup() {
    const store = useKittyStore()
    const list = store.getKitties()
    return {
      list
    }
  }

}
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
