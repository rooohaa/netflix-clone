<template>
   <div>
      <h2>Watch Joker Now</h2>
      <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</p>
      <button class="btn">Play</button>
   </div>
</template>

<style scoped lang="scss">
div {
   margin-top: 100px;
   padding-top: 30px;
   width: 50%;
   height: 320px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-evenly;
}

h2 {
   color: #fff;
   font-size: 38px;
   letter-spacing: 1px;
}

p {
   color: #fff;
   font-size: 18px;
   line-height: 1.5;
}

button {
   border-radius: 4px;
   border: none;
   color: #000;
   background: #fff;
   width: 90px;
   height: 35px;
   font-family: 'Roboto', sans-serif;
   font-size: 16px;
   @include ease;
   cursor: pointer;

   &:hover {
      color: #fff;
      background: $main-color;
   }
}
</style>