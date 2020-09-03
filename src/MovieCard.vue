<template>
  <div class="movie-card" @click="showModal(movie.id)">
    <img :src="movie.img" alt="movie-poster" style="width:200px" />
    <p class="movie-name">{{movie.name}}</p>
    <p class="movie-year">{{movie.year}}</p>
    <star-button :movie="movie" />
  </div>
</template>

<script>
import { eventBus } from "./eventBus.js";
import StarButton from "./StarButton";

export default {
  name: "movie-card",

  components: { StarButton },

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
