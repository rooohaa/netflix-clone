<template>
   <div id="root">
      <div class="container">
         <h1>Lost your way?</h1>
         <p>Sorry, we can't find that page. You'll find lots of to explore on the home page.</p>
         <router-link to="/">Netflix Home</router-link>
         <span>Error code : 404</span>
      </div>
   </div>
</template>

<style scoped lang="scss">
#root {
   width: 100%;
   height: 100vh;
   background: url('../assets/notfound.jpg') center/cover no-repeat;
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

   .container {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      h1 {
         color: #fff;
         font-size: 60px;
         margin-bottom: 25px;
         letter-spacing: 1px;
      }

      p {
         color: #fff;
         font-size: 26px;
         width: 75%;
         text-align: center;
         line-height: 1.6;
         margin-bottom: 20px;
      }

      a {
         background-color: #fff;
         color: #000;
         border-radius: 6px;
         width: 140px;
         height: 45px;
         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 17px;
         margin-bottom: 25px;
         @include ease;
         &:hover {
            opacity: 0.8;
         }
      }

      span {
         color: #fff;
         font-size: 30px;
         letter-spacing: 1px;
         display: block;
         &::after {
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            background-color: $main-color;
            border-radius: 8px;
            margin-top: 10px;
         }
      }
   }
}
</style>