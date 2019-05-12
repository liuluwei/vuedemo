<template>
  <div id="app">
    {{count}}
    <img alt="Vue logo" src="./assets/logo.png">
    <myHeader :count1="count" @parent="count++"></myHeader>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import myHeader from "./components/myheader.vue"
console.log(HelloWorld)
export default {
  name: 'app',
  data(){
    return {
      count: 0
    }
  },
  components: {
    HelloWorld: HelloWorld,
    myHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
