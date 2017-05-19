<template>
  <div class="connect_bar">
      <div class="right-sidebar">
          <a href="https://www.facebook.com/mlaxman.com.np" target="_blank">
              <img src="./../assets/facebook.png" width="64px"/>
          </a>
          <a href="https://github.com/ole-vi/vue-reboot" target="_blank">
              <img src="./../assets/github.png" width="64px"/>
          </a>
          <a href="https://bitbucket.org/lmmrssa" target="_blank">
              <img src="./../assets/bitbucket.png" width="64px"/>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'connect_bar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-sidebar {
  position: absolute;
  right: 0px;
  width: 70px;
}
</style>
