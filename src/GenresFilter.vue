<template>
  <div>
    <select @change="selectGenre()" v-model="selectedGenre">
      <option value="genre" selected>Select genre</option>
      <option :value="genre" v-for="genre in moviesGenres" :key="genre">{{genre}}</option>
    </select>
  </div>
</template>

<script>
import { eventBus } from "./eventBus.js";

export default {
  name: "genres-filter",

  props: {
    moviesGenres: { type: Array },
  },

  data() {
    return {
      selectedGenre: "genre",
    };
  },

  methods: {
    selectGenre(genre) {
      this.selectedGenre = event.target.value;
      console.warn(this.selectedGenre);
      // eventBus.$emit("choose-genre", this.selectedGenre);
    },
  },
};
</script>
