<template>
   <div id="overlay">
      <div class="info">
         <Spinner style="margin-top: 200px;" v-if="isLoading" />
         <div v-else>
            <div class="info-descr">  
               <div class="img-wrap">
                  <img :src="movie.posterPath" :alt="movie.title">
               </div>

               <div class="facts">
                  <h2>{{ movie.title }}</h2>
                  <ul>
                     <li>
                        <span>Lang:</span>
                        {{ movie.lang }}
                     </li>
                     <li>
                        <span>Release Date:</span>
                        {{ movie.releaseDate }}
                     </li>
                     <li>
                        <span>Vote Count:</span>
                        {{ movie.voteCount }}
                     </li>
                     <li>
                        <span>Vote Average:</span>
                        {{ movie.voteAverage }}
                     </li>
                  </ul>
               </div>
            </div>
         

            <div class="overview">
               <h4>Overview</h4>
               <p>
                  {{ movie.overview }}
               </p>
            </div>

            <p v-if="isAdded" class="added">
               {{movie.title}} added to your movies pack.
            </p>

            <div class="controls">
               <button @click="addMovie" class="add">Add</button>
               <button @click="$emit('closeModal')" class="close">Close</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import MovieService from '../../api/service'

const service = new MovieService()

export default {
   props: ['title'],
   data() {
      return {
         movie: {},
         isLoading: false,
         isAdded: false
      }
   },
   methods: {
      addMovie() {
         this.isAdded = true
         this.$store.dispatch('addMovie', this.movie)
      },
      cut(input) {
         if (input.length > 150) {
            return input.substring(0, 150) + '...'
         }
         return input
      } 
   },
   async created() {
      try {
         this.isLoading = true
         this.movie = await service.getMovieByName(this.title)
         this.movie.overview = this.cut(this.movie.overview)
         this.isLoading = false
      } catch (e) {
         console.log(e)
      }
   }
}
</script>

<style scoped lang="scss">
#overlay {
   z-index: 4;
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.7);
   display: flex;
   align-items: center;
   justify-content: center;
}

.added {
   @include ease;
   color: #fff;
   margin-top: 10px;
   margin-left: 30px;
   background-color: darken(orange, 7);
   width: 75%;
   height: 33px;
   display: flex;
   align-items: center;
   padding-left: 12px;
   border-radius: 4px;
}

.info {
   z-index: 15;
   width: 700px;
   min-height: 520px;
   background: #151515;
   border-radius: 7px;
}

.info-descr {
   margin-top: 20px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   .img-wrap {
      background-color: #222222;
      border: 1px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 320px;
      border-radius: 6px;
      img {
         object-fit: cover;
         width: 96%;
         height: 96%;
      }
   }

   .facts {
      width: 370px;
      height: 320px;
      h2 {
         color: #fff;
         font-weight: normal;
         letter-spacing: 1px;
         font-size: 27px;
         margin-bottom: 10px;
      }
      ul {
         border: 1px solid #333;
         width: 90%;
         border-radius: 4px;
         padding: 10px;
         height: 250px;
         background: #222222;
         display: flex;
         flex-direction: column;
         justify-content: space-evenly;

         li {
            margin-left: 20px;
            color: orange;
            span {
               color: #7b7a7e;
               font-weight: 500;
               font-size: 17px;
               margin-right: 6px;
            }
         }
      }
   }
}

.overview {
   margin-top: 15px;
   margin-left: 30px;
   width: 90%;
   h4 {
      color: #fff;
      font-weight: normal;
      font-size: 17px;
      margin-bottom: 7px;
   }

   p {
      color: #ccc;
      line-height: 1.5;
   }
}

.controls {
   display: flex;
   align-items: center;
   margin-top: 20px;
   margin-left: 30px;
   margin-bottom: 23px;
   
   .add, .close {
      cursor: pointer;
      @include ease;
      font-family: 'Roboto', sans-serif;
      border: none;
      width: 80px;
      margin-right: 13px;
      border-radius: 4px;
      height: 30px;
      &:hover {
         transform: scale(1.05);
      }
   }

   .add {
      background-color: $main-color;
      color: #fff;
   }

   .close {
      background-color: #333;
      color: #fff;
   }
}
</style>