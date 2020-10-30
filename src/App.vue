<template>
  <div id="app">
    <app-header></app-header>
    <nav>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/searchresults">Search Results</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/search">Search</router-link>
      </li>
    </nav>
    <router-view/>

    <app-footer></app-footer>

  </div>
</template>

<script>
  import Footer from './components/layout/Footer.vue'
  import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    'app-footer' : Footer,
    'app-header' : Header,
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
