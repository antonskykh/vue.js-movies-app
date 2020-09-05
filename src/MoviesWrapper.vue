<template>
  <div class="movies-wrapper">
    <genres-filter :movies-genres="moviesGenres" />
    <card :movie="movie" v-for="movie in moviesData" :key="movie.id" />
  </div>
</template>

<script>
import { eventBus } from "./eventBus.js";
import GenresFilter from "./GenresFilter.vue";
import Card from "./Card.vue";

export default {
  name: "movies-wrapper",

  components: { GenresFilter, Card },

  props: {
    moviesData: { type: Array },
    moviesGenres: { type: Array },
  },

  },
};
</script>
