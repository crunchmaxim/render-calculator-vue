<template>
  <div id="app">
    <Navbar />
    <div class="container">
      some text


    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: "App",
    components: {
      Navbar
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@300;400;600;700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
}

.container {
  padding-top: 79px;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
