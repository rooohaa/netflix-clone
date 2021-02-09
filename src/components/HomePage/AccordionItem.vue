<template>
   <li :class="{ active: isActive }" @click="toggleActive">
      <div class="label">{{ question }}</div>
      <div class="content">
         <p>{{ answer }}</p>
      </div>
   </li>
</template>

<script>
export default {
   props: ['question', 'answer'],
   data() {
      return {
         isActive: false
      };
   },
   methods: {
      toggleActive() {
         this.isActive = !this.isActive
      }
   }
}
</script>

<style scoped lang="scss">
li {
   position: relative;
   margin: 10px;
   border-bottom: none !important;
   margin-bottom: 13px;
}

.label {
   border-bottom: 2px solid #000;
   display: flex;
   align-items: center;
   font-size: 24px;
   height: 100%;
   position: relative;
   padding: 15px;
   background-color: #333;
   color: #fff;
   cursor: pointer;

   &::before {
      content: '+';
      position: absolute;
      font-size: 40px;
      font-weight: lighter;
      top: 50%;
      right: 25px;
      transform: translateY(-50%);
   }
}

.content {
   position: relative;
   background: #333;
   height: 0;
   overflow: hidden;
   @include ease;
   p {
      color: #fff;
      font-size: 22px;
      width: 94%;
      margin-top: 20px;
      margin-left: 20px;
   }
}

.active {
   .content {
      height: 120px;
   }
   .label::before {
      content: '-';
   }
}
</style>