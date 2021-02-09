<template>
   <MovieDetail 
      v-if="openedMovieTitle" 
      :title="openedMovieTitle"
      @closeModal="closeModal">
   </MovieDetail>

   <section class="showcase">
      <div class="container">
         <Header />
         <MovieShowcase />
      </div>
   </section>

   <section class="movies-wrap">
      <div class="container">
         <MoviesRow 
            v-for="row in movieRows"
            :key="row.title"
            :title="row.title"
            :requestUrl="row.requestUrl"
            @open-modal="openModal">
         </MoviesRow>
      </div>
   </section>

   <Footer />  
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Header from '../layout/Header'
import MovieShowcase from '../components/MoviesPage/MovieShowcase'
const MoviesRow = defineAsyncComponent(
   () => import('../components/MoviesPage/MoviesRow'));

const MovieDetail = defineAsyncComponent(
   () => import('../components/MoviesPage/MovieDetail'));

export default {
   components: { 
      Header,
      MovieShowcase,
      MoviesRow,
      MovieDetail
   },
   data() {
      return {
         movieRows: [
            {
               title: 'Top Rated',
               requestUrl: 'https://api.themoviedb.org/3/movie/top_rated?api_key=d051c01aadbfe2f927c7a3cf42bec05a&language=en-US&page=1'
            },
            {  
               title: 'Popular',
               requestUrl: 'https://api.themoviedb.org/3/movie/popular?api_key=d051c01aadbfe2f927c7a3cf42bec05a&language=en-US&page=1'
            },
            {
               title: 'Upcoming',
               requestUrl: 'https://api.themoviedb.org/3/movie/upcoming?api_key=d051c01aadbfe2f927c7a3cf42bec05a&language=en-US&page=1'
            },
            {
               title: 'Now Playing',
               requestUrl: 'https://api.themoviedb.org/3/movie/now_playing?api_key=d051c01aadbfe2f927c7a3cf42bec05a&language=en-US&page=1'
            },
            {
               title: 'Trending',
               requestUrl: 'https://api.themoviedb.org/3/trending/all/day?api_key=d051c01aadbfe2f927c7a3cf42bec05a'
            }  
         ],
         openedMovieTitle: null
      };
   },
   methods: {
      closeModal() {
         this.openedMovieTitle= null
      },
      openModal(title) {
         this.openedMovieTitle = title
      }
   }
}
</script>

<style scoped lang="scss">
.showcase {
   height: 700px;
   background: url('../assets/showcase.jpg') center/cover no-repeat; 

   .container {
      max-width: 1300px;
      padding-top: 30px;
   }
}

.movies-wrap {
   background-color: #000;
   min-height: 750px;
   padding-top: 50px;
   border-bottom: 1px solid #333;
   .container {
      max-width: 1400px;
   }
}
</style>