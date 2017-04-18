<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import Main from './components/main'
// import Router from 'vue-router'
import vHeader from './components/vheader'
export default {
  components: {
    vHeader
  },
  name: 'app'
}
</script>

