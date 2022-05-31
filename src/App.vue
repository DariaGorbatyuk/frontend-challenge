<template>
  <the-header></the-header>
  <RouterView/>
</template>
<script setup>
import TheHeader from "./components/TheHeader.vue";
import {useKittyStore} from "./stores/KittiesStore";
const store = useKittyStore()
store.getKitties()
store.checkIsFavorite()
</script>

<style lang="scss">
@import "./assets/base.css";

</style>
