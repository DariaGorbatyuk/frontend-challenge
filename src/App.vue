<template>
  <the-header></the-header>
  <RouterView/>
</template>
<script setup>
import TheHeader from "./components/TheHeader.vue";

</script>

<style lang="scss">
@import "./assets/base.css";


.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
