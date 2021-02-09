<template>
   <div class="card" @click="showDetail">
      <img :src="posterPath">
      <div class="title">
         <h5>{{ title }}</h5>
         <p>{{ releaseDate }}</p>
      </div>
   </div>
</template>

<script>
export default {
   emits: ['show-detail'],
   props: ['lang', 'title', 'overview', 'releaseDate', 'voteAverage', 'voteCount', 'posterPath'],
   methods: {
      showDetail() {
         this.$emit('show-detail', this.title)
      }
   }
}
</script>

<style scoped lang="scss">
.card {
   position: relative;
   @include ease;
   width: 220px;
   height: 150px;
   cursor: pointer;
   overflow: hidden;
   &:hover {
      transform: scale(1.1);

      .title {
         transform: translateY(0);
      }
   }
}

.title {
   @include ease;
   position: absolute;
   bottom: 0;
   color: #fff;
   background-color: rgba(0, 0, 0, 0.7);
   text-align: center;
   width: 100%;
   height: 60px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   transform: translateY(60px);

   h5 {
      font-weight: normal;
      font-size: 14px;
   }

   p {
      color: orange;
      font-size: 14px;
   }
}

img {
   object-fit: cover;
   width: 100%;
   height: 100%;
}

p {
   color: #fff;
}
</style>