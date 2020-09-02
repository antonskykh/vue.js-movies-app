<template>
  <div class="app-wrapper">
    <movies-wrapper :movies-data="moviesData" />
    <favorites-wrapper />
    <modal-wrapper />
  </div>
</template>

<script>
import MoviesWrapper from "./MoviesWrapper.vue";
import FavoritesWrapper from "./FavoritesWrapper.vue";
import ModalWrapper from "./ModalWrapper.vue";

export default {
  name: "AppWrapper",

  components: { MoviesWrapper, FavoritesWrapper, ModalWrapper },

  data() {
    return {
      moviesData: null,
    };
  },

  settings: {
    apiUrl: "http://my-json-server.typicode.com/moviedb-tech/movies/list",
  },

  created() {
    this.fetchData(this.$options.settings.apiUrl);
  },

  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.moviesData = data;
          this.moviesData.forEach((movie) => (movie.isFavorite = false));
        });
    },
  },
};
</script>
