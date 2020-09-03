<template>
  <button @click="toogleFavorite(movie.id)" :class="{'is-favorite': isFavorite}" class="star-button">&#9733;</button>
</template>

<script>
import { eventBus } from "./eventBus.js";
import StarButton from "./StarButton.vue";

export default {
  name: "star-button",

  props: {
    movie: { type: Object },
  },

  data() {
    return {
      isFavorite: this.movie.isFavorite,
    };
  },

  methods: {
    toogleFavorite(id) {
      this.isFavorite = !this.isFavorite;
      eventBus.$emit("toogle-favorite", this.isFavorite, id);
    },
  },
};
</script>
