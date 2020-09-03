<template>
  <div class="app-wrapper">
    <movies-wrapper :movies-data="moviesData" />
    <favorites-wrapper />
    <modal-wrapper v-if="showModal" :movie="selectedMovie" />
  </div>
</template>

<script>
import { eventBus } from "./eventBus.js";
import MoviesWrapper from "./MoviesWrapper.vue";
import FavoritesWrapper from "./FavoritesWrapper.vue";
import ModalWrapper from "./ModalWrapper.vue";

export default {
  name: "AppWrapper",

  components: { MoviesWrapper, FavoritesWrapper, ModalWrapper },

  data() {
    return {
      moviesData: null,
      selectedMovie: null,
      showModal: false,
    };
  },

  settings: {
    apiUrl: "http://my-json-server.typicode.com/moviedb-tech/movies/list",
  },

  created() {
    this.fetchData(this.$options.settings.apiUrl);

    // TODO: Move to mounted hook?
    eventBus.$on("toogle-favorite", (isFavorite, id) => {
      this.moviesData.forEach((movie) => {
        if (movie.id === id) {
          movie.isFavorite = isFavorite;
        }
      });
    });

    eventBus.$on("show-modal", (showModal, id) => {
      this.moviesData.forEach((movie) => {
        if (movie.id === id) {
          this.selectedMovie = movie;
        }
      });
      this.showModal = showModal;
    });

    eventBus.$on("show-modal", (showModal, id) => {
      this.showModal = showModal;
    });
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
