<template>
  <header>
      <router-link to="/">
         <img src="@/assets/logo.svg" alt="Netflix logo">
      </router-link>

      <nav>
         <router-link to="/my-movies">My Movies</router-link>
         <button @click="logout">Logout</button>
      </nav>
   </header>
</template>

<script>
export default {
   methods: {
      async logout() {
         await this.$store.dispatch('logout')
         this.$router.replace('/')
      }
   }
}
</script>

<style scoped lang="scss">
header {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

img {
   width: 190px;
   height: 50px;
   object-fit: cover;
}

nav {
   width: 200px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   a {
      @include ease;
      color: #fff;
      font-size: 17px;
      &:hover {
         transform: scale(1.05);
      }
   }
}

button {
   cursor: pointer;
   @include ease;
   background-color: #fff;
   width: 75px;
   height: 35px;
   border: none;
   font-size: 16px;
   border-radius: 4px;
   font-family: 'Roboto', sans-serif;
   &:hover {
      border: 2px solid #fff;
      background: inherit;
      color: #fff;
   }
}
</style>