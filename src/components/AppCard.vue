<template>
  <div class="card">
    <img :src="elem.url" alt="Котик" :width="elem.width" :height="elem.height"/>
    <button aria-label="heart" class="card__btn" @click.prevent="toggleFavorite($event, elem)" @mouseenter="isHover = true"
            @mouseleave="isHover = false">
      <icon-heart :isFav="elem.isFav" :isHover="isHover"></icon-heart>
    </button>
  </div>
</template>

<script>
export default {
  name: "AppCard",
};
</script>
<script setup>
import IconHeart from "./icons/icon-heart.vue";
import {useKittyStore} from "../stores/KittiesStore";
import {computed, ref} from "vue";

const props = defineProps({
  elem: {
    type: Object,
    required: true,
  },
});

const kittyStore = useKittyStore();

function toggleFavorite(evt, kitty) {
  const state = kittyStore.getState(kitty.id);
  state === -1 ? kittyStore.addToFav(kitty) : kittyStore.removeFromFav(state, kitty)
}


const isHover = ref(false);
</script>

<style lang="scss">
.card {
  position: relative;
  z-index: 1;
  transition: all 300ms linear;
  height: 100%;

  &:hover {
    box-shadow: 0 6px 5px rgba(0, 0, 0, 0.24), 0 9px 18px rgba(0, 0, 0, 0.18);
    transform: scale(1.05);

    .card__btn {
      visibility: visible;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
}

.card__btn {
  position: absolute;
  bottom: 23px;
  right: 17px;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  visibility: hidden;

  svg {
    fill: var(--cinnabar);
  }

  &:active {
    svg {
      fill: var(--orange-red);
    }
  }
}
</style>
