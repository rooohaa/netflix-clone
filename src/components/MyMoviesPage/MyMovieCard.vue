<template>
   <div class="card">
      <div class="exit" @click="removeMovie">&times;</div>

      <img :src="movie.posterPath" :alt="movie.title">
      <h4>{{ movie.title }}</h4>

      <div class="info">
         <span>{{ date }}</span>
         <span>
            <i class="fas fa-star"></i>
            {{ movie.voteAverage }} / 10
         </span>
      </div>

   </div>
</template>

<script>
export default {
   props: ['movieObject'],
   emits: ['remove-movie'],
   data: () => {
      return {
         movie: null
      }
   },
   computed: {
      date() {
         return this.movie.releaseDate.split('-')[0]
      }
   },
   methods: {
      removeMovie() {
         this.$emit('remove-movie', this.movieObject)
      },
      cut(input) {
         if (input.length > 24) {
            return input.substring(0, 24) + '...'
         }
         return input
      } 
   },
   created() {
      for (const [key] of Object.entries(this.movieObject)) {
         this.movie = this.movieObject[key]
      }
      this.movie.title = this.cut(this.movie.title)
   }
}
</script>

<style scoped lang="scss">
.card {
   @include ease;
   position: relative;
   width: 280px;
   height: 400px;
   background-color: #222;
   border-radius: 4px;
   border: 1px solid #333;
   display: flex;
   flex-direction: column;
   align-items: center;
   &:hover {
      cursor: pointer;
      transform: translateY(-2%);

      .exit {
         display: flex;
      }
   }
   img {
      margin-top: 6px;
      margin-bottom: 12px;
      object-fit: cover;
      width: 96%;
      height: 80%;
   }
   h4 {
      color: #fff;
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 10px;
   }
   .info  {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
         color: #747474;
         i {
            color: orange;
            margin-right: 4px;
         }
      }
   }
}

.exit {
   background-color: rgba(0, 0, 0, 0.7);
   width: 25px;
   height: 25px;
   position: absolute;
   top: 15px;  
   right: 15px;
   border-radius: 4px;
   color: #fff;
   align-items: center;
   justify-content: center;
   font-size: 24px;
   display: none;
   @include ease;
   &:hover {
      background-color: orange;
   }
} 
</style>