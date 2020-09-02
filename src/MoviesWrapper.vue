<template>
  <div class="movies-wrapper" >
    <movie-card :movie="movie" v-for="movie in moviesData" :key="movie.id" />

  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  name: "movies-wrapper",

  components: { MovieCard },

  props: {
    moviesData: { type: Array },
  },
};
</script>
