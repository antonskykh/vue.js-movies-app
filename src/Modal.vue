<template>
  <div class="modal-wrapper">
    <img :src="movie.img" alt="movie-poster" style="width:200px" />
    <p class="movie-year">{{movie.year}}</p>
    <p class="movie-genres">{{movie.genres}}</p>
    <toogle-favorite-button :movie="movie" />

    <p class="movie-name">{{movie.name}}</p>
    <p class="movie-description">{{movie.description}}</p>
    <p class="movie-director">{{movie.director}}</p>
    <p class="movie-starring">{{movie.starring}}</p>
    <!-- use svg here -->
    <button @click="closeModal()">&#10006;</button>
  </div>
</template>

<script>

import {eventBus} from "./eventBus.js";
import ToogleFavoriteButton from "./ToogleFavoriteButton"

export default {
  name: "modal",

  components: { ToogleFavoriteButton },

  props: {
    movie: { type: Object },
  },

  methods: {
    closeModal() {
      eventBus.$emit('show-modal', false)
    },
  },
};
</script>
