<template>
  <div class="movie-card" @click="showModal(movie.id)">
    <img :src="movie.img" alt="movie-poster" style="width:200px" />
    <p class="movie-name">{{movie.name}}</p>
    <p class="movie-year">{{movie.year}}</p>
    <toogle-favorite-button :movie="movie" />
  </div>
</template>

<script>
import { eventBus } from "./eventBus.js";
import ToogleFavoriteButton from "./ToogleFavoriteButton.vue";

export default {
  name: "card",

  components: { ToogleFavoriteButton },

  props: {
    movie: { type: Object },
  },

  methods: {
    showModal(id) {
      eventBus.$emit("show-modal", true, id);
    },
  },
};
</script>
