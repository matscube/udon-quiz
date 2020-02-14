<template>
  <div id="app">
    <the-navigation-bar></the-navigation-bar>
    <router-view class="contents"></router-view>
    <the-footer/>
  </div>
</template>

<script>
import TheNavigationBar from 'molecules/TheNavigationBar'
import TheFooter from 'molecules/TheFooter'

export default {
  name: 'app',
  components: {
    TheNavigationBar,
    TheFooter,
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.contents {
  // margin-top: $navigation-height;
}
</style>
