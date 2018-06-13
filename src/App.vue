<template>
  <div id="app">
    <header-logo class="zHead"></header-logo>
    <nav-page class="zNav"></nav-page>
    <router-view class="zMain"></router-view>
  </div>
</template>

<script>
import headerPage from './components/header'
import navgator from './components/nav'

export default {
  name: 'App',
  components:{
    'nav-page':navgator,
    'header-logo':headerPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.zHead{

}
.zNav{
  width: 500px;
  position: fixed;
  top: 80px;
  left: 0;
  bottom:0;
  border: 1px solid red;
}
.zMain{
  position: fixed;
  top: 80px;
  left: 500px;
  right: 0;
  bottom:0;
  border: 1px solid red
}
</style>
