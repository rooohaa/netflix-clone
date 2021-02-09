<template>
   <div class="row">
      <h3>{{ title }}</h3>

      <Spinner v-if="isLoading" />

      <div class="grid" v-show="!isLoading && movies.length > 0">
         <MovieCard 
            v-for="movie in movies"
            :key="movie.voteCount"
            :lang="movie.lang"
            :title="movie.title"
            :overview="movie.overview"
            :releaseDate="movie.releaseDate"
            :voteAverage="movie.voteAverage"
            :voteCount="movie.voteCount"
            :posterPath="movie.posterPath"
            @show-detail="showDetail">
         </MovieCard>
      </div>
   </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import MovieService from '../../api/service'
const MovieCard = defineAsyncComponent(() => import('./MovieCard'))

const service = new MovieService()

export default {
   emits: ['open-modal'],
   props: ['title', 'requestUrl'],
   components: {
      MovieCard
   },
   data() {
      return {
         movies: [],
         isLoading: false
      };
   },
   methods: {
      showDetail(title) {
         this.$emit('open-modal', title)
      }
   },
   async created() {
      this.isLoading = true
      this.movies = await service.getMovies(this.requestUrl)
      this.isLoading = false
   }
}
</script>

<style scoped lang="scss">
.row {
   position: relative;
   margin-bottom: 20px;
}

h3 {
   color: #fff;
   font-size: 20px;
   margin-bottom: 10px;
   font-weight: normal;
}

.grid {
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   gap: 5px;
   height: 160px;
}
</style>