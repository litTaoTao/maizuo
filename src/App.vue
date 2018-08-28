<template>
  <div id="app">
 		<Myhead class="app"></Myhead> 	
 		<router-view></router-view>
  </div>
</template>

<script>
	import Myhead from '@/components/head/Myhead'
export default {
  name: 'App',
  components:{
  	Myhead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
