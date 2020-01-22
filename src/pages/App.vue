<template>
  <div id="app">
    <the-navigation-bar></the-navigation-bar>
    <router-view class="contents"></router-view>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <the-footer/>
  </div>
</template>

<script>
import TheNavigationBar from 'molecules/TheNavigationBar'
import TheFooter from 'molecules/TheFooter'
import HelloWorld from 'components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
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
  text-align: center;
  color: #2c3e50;
}
.contents {
  margin-top: $navigation-height;
}
</style>
