<template>
  <div class="movies-wrapper">
    <genres-filter :movies-genres="moviesGenres" />
    <movie-card :movie="movie" v-for="movie in moviesData" :key="movie.id" />
  </div>
</template>

<script>
import { eventBus } from "./eventBus.js";
import GenresFilter from "./GenresFilter.vue";
import MovieCard from "./MovieCard.vue";

export default {
  name: "movies-wrapper",

  components: { GenresFilter, MovieCard },

  props: {
    moviesData: { type: Array },
    moviesGenres: { type: Array },
  },

  },
};
</script>
