<template>
   <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import '@/sass/_variables';

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   font-family: 'Roboto', sans-serif;
}

ul {
   list-style: none;
}

a {
   text-decoration: none;
}

.container {
   max-width: 1150px;
   padding: 10px;
   margin: 0 auto;
   overflow: hidden;
}
</style>