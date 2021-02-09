<template>
   <section>
      <div class="container">
         <div class="header">
            <h2>My Movies</h2>
            <nav>
               <router-link to="/">Home</router-link>
               <router-link to="/movies">Add movies</router-link>
               <button @click="logout">Logout</button>
            </nav>
            <span>{{ movies.length }} movies</span>
         </div>
         <div class="divider"></div>
      </div>

      <div class="container">

         <MovieSpinner v-if="isLoading" />
         <h1 v-if="empty">You don't have any movies yet...</h1>

         <div class="movies-wrap" v-else>
            <MyMovieCard 
               v-for="movie in movies"
               :key="Object.keys(movie)[0]"
               :movieObject="movie"
               @remove-movie="deleteMovie">
            </MyMovieCard>
         </div>

      </div>
   </section>
</template>

<script>
import MyMovieCard from '../components/MyMoviesPage/MyMovieCard'

export default {
   components: {
      MyMovieCard, 
   },
   data: () => {
      return {
         movies: [],
         isLoading: false    
      }
   },
   methods: {
      async logout() {
         await this.$store.dispatch('logout')
         this.$router.replace('/login') 
      },
      deleteMovie(movieObject) {
         const title = movieObject[Object.keys(movieObject)[0]].title
         const index = this.movies.findIndex(m => {
            const mTitle = m[Object.keys(m)].title
            return mTitle === title
         });
         this.movies.splice(index, 1)

         this.$store.dispatch('removeMovie', movieObject)
      }
   },
   computed: {
      empty() {
         return !this.isLoading && this.movies.length === 0
      }
   },
   async created() {
      this.isLoading = true
      await this.$store.dispatch('getMovies')
      this.movies = this.$store.getters.movies
      this.isLoading = false
   }
}
</script>

<style scoped lang="scss">
h1 {
   color: #fff;
   font-weight: normal;
   font-size: 30px;
}  
section {
   background: #000;
   min-height: 100vh;
}

.container {
   max-width: 1300px;
   padding-top: 50px;
}

.header {
   display: flex;
   align-items: center;
   justify-content: space-between;
  
   h2 {
      color: #fff;
      font-weight: normal;
      letter-spacing: 1px;
      font-size: 23px;
   }
   
   span {
      border-radius: 25px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 94px;
      height: 40px;
      background: $main-color;
   }

   nav {
      width: 400px;
      height: 45px;
      background-color: #222;
      border-radius: 5px;
      border: 1px solid #333;
      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
         @include ease;
         color: #fff;
         &:hover {
            color: orange;
            transform: scale(1.1);
         }
      }

      button {
         @include ease;
         cursor: pointer;
         border: none;
         color: #fff;
         background: inherit;
         font-family: 'Roboto', sans-serif;
         font-size: 17px;
         &:hover {
            color: orange;
            transform: scale(1.1);
         }
      }
   }
}

.divider {
   margin-top: 30px;
   height: 1px;
   background-color: #333;
}

.movies-wrap {
   margin-top: 30px;
   display: grid;
   justify-items: center;
   grid-template-columns: repeat(4, 1fr);
   row-gap: 40px;
   margin-bottom: 100px;
}
</style>