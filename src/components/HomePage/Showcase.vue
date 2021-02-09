<template>
   <div class="showcase__wrapper">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h4>Watch anywhere. Cancel anytime.</h4>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>

      <div>
         <input type="email" placeholder="Email address">
         
         <button>
            try 30 days free
            <i class="fas fa-chevron-right"></i>
         </button>
      </div>

      <p>Only new members are eligible for this offer.</p>
   </div>
</template>


<style scoped lang="scss">
.showcase__wrapper {
   margin: 0 auto;
   width: 70%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
}

h1 {
   color: #fff;
   letter-spacing: 2px;
   font-size: 60px;
   text-align: center;
}

h4 {
   color: #fff;
   letter-spacing: 1px;
   font-size: 26px;
   font-weight: normal;
}

p {
   color: #fff;
   font-size: 20px;
}

div {
   display: flex;
   align-items: center;
   width: 100%;
   height: 60px;
   margin-bottom: 10px;
   input {
      height: 100%;
      width: 65%;
      padding: 0 10px;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
      outline: none;
      border: none;
   }
   button {
      @include ease;
      cursor: pointer;
      width: 35%;
      height: 100%;
      background: $main-color;
      color: #fff;
      text-transform: uppercase;
      border: none;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      i {
         margin-left: 8px;
      }
      &:hover {
         background: darken($main-color, 6);
         padding-right: 20px;
      }
   }
}
</style>