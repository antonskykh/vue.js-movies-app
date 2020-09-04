<template>
  <div>
    <select @change="chooseGenre()" v-model="selectedGenre">
      <option :value="null" selected disabled>Select genre</option>
      <option :value="genre" v-for="genre in moviesGenres" :key="genre">{{genre}}</option>
    </select>
    <button @click="clearFilter()">Clear filter</button>
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
      selectedGenre: null,
    };
  },

  methods: {
    chooseGenre(genre) {
      this.selectedGenre = event.target.value;
      // eventBus.$emit("choose-genre", this.selectedGenre);
    },
    clearFilter() {
      this.selectedGenre = null;
    },
  },
};
</script>
