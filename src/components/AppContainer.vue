<template>
  <div class="container">
    <slot>Page content</slot>
  </div>
</template>

<script>
export default {
  name: "AppContainer",
};
</script>

<style lang="scss">
.container {
  max-width: 1440px;
  padding: 0 62px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 15px;
  }
}
</style>
