<template>  
   <footer>
      <div class="container">
      
            <div class="footer-block">
               <div class="social">
                  <a target="_blank" class="social-link" href="https://github.com/rooohaa?tab=repositories">
                     <i class="fab fa-github"></i>
                  </a>
               </div>
               <div class="social">
                  <a target="_blank" class="social-link" href="https://www.instagram.com/rooooohaa/">
                     <i class="fab fa-instagram-square"></i>
                  </a>
               </div>
               <div class="social">
                  <a target="_blank" class="social-link" href="#">
                     <i class="fab fa-facebook"></i>
                  </a>
               </div>
               <div class="social">
                  <a target="_blank" class="social-link" href="#">
                     <i class="fab fa-twitter"></i>
                  </a>
               </div>
            </div>

            <div class="footer-block">
               <router-link to="/">Home</router-link>
               <router-link to="/login">Login</router-link>
               <router-link to="/register">Register</router-link>
               <router-link to="/movies">Movies</router-link>
            </div>

            <div class="footer-block"> 
               <p>&copy; Copyright 2020 Netflix.</p>
            </div>

      </div>
   </footer>
</template>

<style scoped lang="scss">
footer {
   background-color: #000;
   height: 200px;

   .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
   }

   .footer-block {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
         color: #fff;
         text-transform: uppercase;
         text-decoration: underline;
         color: orange;
      }
   }

   .social {
      cursor: pointer;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #333;
      &:hover {
         .social-link {
            transform: rotate(360deg);
         }
      }
   }

   .social-link {
      transition: all 0.5s ease-out;
      color: #fff!important;
      i {
         font-size: 18px;
      }
   }

   p {
      color: darken(#fff, 15);
   }
}
</style>