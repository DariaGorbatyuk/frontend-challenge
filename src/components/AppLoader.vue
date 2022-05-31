<template>
  <div class="loader">
    <img src="../assets/loader.svg" alt="Загрузка..." role="img" width="281" height="281"/>
  </div>
</template>

<script>
export default {
  name: "AppLoader"
}
</script>

<style lang="scss">
.loader {
  position: fixed;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: transparent;
}
</style>