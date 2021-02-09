<template>
   <div class="card-wrap">
      <div class="card-info" :style="'order:' + (order === 1 ? 0 : 1)">
         <h2>{{ heading }}</h2>
         <p>{{ descr }}</p>
      </div>

      <img :style="'order: ' + order" :src="src" alt="Photo" />
   </div>
</template>

<script>
export default {
   props: ['heading', 'descr', 'imgName', 'order'],
   computed: {
      src() {
         return require(`@/assets/${this.imgName}`)
      }
   }
}
</script>

<style scoped lang="scss">
.card-wrap {
   max-width: 1150px;
   margin: 0 auto;
   padding-top: 100px;
   padding-bottom: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #333;
}

.card-info {
   width: 550px;
   height: 300px;
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   justify-content: center;

   h2 {
      color: #fff;
      font-size: 46px;
      letter-spacing: 1px;
      margin-bottom: 20px;
   }

   p {
      color: #fff;
      font-size: 25px;
   }
}

img {
   width: 500px;
   height: 370px;
   object-fit: cover;
}
</style>