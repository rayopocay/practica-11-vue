<template>
  <AppMenu />
  <nav class="shadow-1">
    <router-link to="/">Home</router-link> |
    <router-link to="/consultas">Consultas</router-link>
    <router-link to="/evento">Eventos tributarios</router-link>
    <router-link to="/servicios">Servicios</router-link>
  </nav>
  <router-view/>
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppMenu from './components/AppMenu.vue'

export default {
  components: {
    AppFooter,
    AppMenu
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  overflow-x: hidden;
}
body {
  background-color: #303845;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #3c4557;
  padding: 15px;
  font-size: 18px;
}

.shadow-1 {
  box-shadow: 0px 20px 20px #00000057;
  opacity: 1;
}

nav a {
  color: #fff;
  padding-top: 1.1rem;
  padding-right: 1.5rem;
  padding-bottom: 0.8rem;
  padding-left: 0.9rem;
  letter-spacing: 1px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
