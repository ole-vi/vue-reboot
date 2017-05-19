<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <connect_sidebar></connect_sidebar>
    <footer_view></footer_view>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import ConnectBar from '@/components/ConnectBar'
export default {
  name: 'app',
  components: {footer_view: Footer, connect_sidebar: ConnectBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
