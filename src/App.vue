<template>
  <the-header></the-header>
  <RouterView />
</template>
<script lang="js">

import TheHeader from "./components/TheHeader.vue"

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
@import "./assets/base.css";
</style>
