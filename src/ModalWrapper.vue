<template>
  <div class="modal-wrapper">
    <img :src="movie.img" alt="movie-poster" style="width:200px" />
    <p class="movie-year">{{movie.year}}</p>
    <p class="movie-genres">{{movie.genres}}</p>
    <star-button :movie="movie" />

    <p class="movie-name">{{movie.name}}</p>
    <p class="movie-description">{{movie.description}}</p>
    <p class="movie-director">{{movie.director}}</p>
    <p class="movie-starring">{{movie.starring}}</p>
    <button @click="closeModal()">&#10006;</button>
  </div>
</template>

<script>

import {eventBus} from "./eventBus.js";
import StarButton from "./StarButton"

export default {
  name: "modal-wrapper",

  components: { StarButton },

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
