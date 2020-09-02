<template>
  <div class="movie-card">
    <img :src="movie.img" alt="movie-poster" style="width:200px" />
    <p class="movie-name">{{movie.name}}</p>
    <p class="movie-year">{{movie.year}}</p>
    <button
      @click="toogleFavorite()"
      :data-id="movie.id"
      :class="{'is-favorite': isFavorite}"
    >&#9733;</button>
  </div>
</template>

<script>
export default {
  name: "movie-card",

  props: {
    movie: { type: Object },
  },

  data() {
    return {
      isFavorite: this.movie.isFavorite,
    };
  },

  methods: {
    toogleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>
