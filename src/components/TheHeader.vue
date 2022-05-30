<template>
  <header class="header">
    <app-container>
      <ul class="header__list">
        <li class="header__item">
          <router-link :to="{ name: 'allKitty' }" exact class="header__link"
            >Все котики</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'favorite' }" class="header__link"
            >Любимые котики</router-link
          >
        </li>
      </ul>
    </app-container>
  </header>
</template>

<script>
import AppContainer from "./AppContainer.vue";

export default {
  name: "TheHeader",
  components: {
    AppContainer,
  },
};
</script>

<style lang="scss">
.header {
  background-color: var(--dodger-blue);
}

.header__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.header__link {
  text-decoration: none;
  color: var(--white);
  opacity: 0.7;
  font: inherit;
  padding: 23px 10px;
  display: flex;

  &.active-exact {
    opacity: 1;
    background-color: var(--dodger-blue-1);
  }
}
</style>
