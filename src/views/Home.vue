<template>
   <div id="home">
      <div class="container">
         <router-link to="/">
            <img src="@/assets/logo.svg" alt="Netflix logo">
         </router-link>

         <router-link id="signin" to="/login">Sign in</router-link>
      </div>

      <div class="wrapper">
         <Showcase />
      </div>    
   </div>

   <div class="cards__wrapper">
      <AdvCard 
         v-for="card in cards"
         :key="card.heading"
         :heading="card.heading"
         :descr="card.descr"
         :imgName="card.imgName"
         :order="card.order">
      </AdvCard>
   </div>

   <div class="accordion__wrapper"> 
      <h2>Frequently Asked Questions</h2>
      <AccordionList />  
   </div>

   <Footer />
</template>

<script>
import Showcase from '../components/HomePage/Showcase'
import AdvCard from '../components/HomePage/AdvCard'
import AccordionList from '../components/HomePage/AccordionList'

export default {
   components: { Showcase, AdvCard, AccordionList },
   data() {
      return {
         cards: [
            { 
               heading: 'Download your shows to watch offline.', 
               descr: 'Save your favorites easily and always have something to watch.',
               imgName: 'mobile.jpg',
               order: 0
            },
            {
               heading: 'Watch everywhere.',
               descr: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
               imgName: 'device.png',
               order: 1
            }
         ]
      };
   }
}
</script>

<style scoped lang="scss">
#home {
   width: 100%;
   height: 745px; 
   background: url('../assets/background.jpg') center/cover no-repeat;

   &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: inset 80px 80px 250px #000000;  
   }
}

.container {   
   padding-top: 30px;
   z-index: 2;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;
   img {
      position: relative;
      z-index: 2;
      object-fit: cover;
      width: 190px;
      height: 50px;
   }

   #signin {
      @include ease;
      background-color: $main-color;
      color: #fff;
      width: 85px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      border-radius: 3px;
      &:hover {
         background-color: darken($main-color, 9);
      }
   }
}

.wrapper {
   max-width: 1000px;
   height: 400px;
   margin: 0 auto;
   z-index: 3;
   margin-top: 130px;
   position: relative;
}

.cards__wrapper {
   border-top: 8px solid #333;
   border-bottom: 8px solid #222;
   background-color: #000;
}

.accordion__wrapper {
   background: #000; 
   padding-top: 50px;
   min-height: 650px;
   border-bottom: 8px solid #222;
   h2 {
      width: 100%;
      color: #fff;
      letter-spacing: 1px;
      font-size: 40px;
      text-align: center;
   }
}
</style>