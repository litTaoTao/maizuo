<template>
	<div class="app">
		<div ></div>
		 <Toobars  :toggle="toggle" :c="nname" />
     	 <Nav  :flag="flag" :toggle="toggle" @changname="cname" />
	</div>
</template>

<script>
	import Toobars from './Toobars'
	import Nav from './Nav'
	
	export default {
		data(){
			return {
				flag:false,
				nname:''
			}
		},
		methods:{
			toggle(){
				this.flag=!this.flag
			},
			cname(str){
				this.nname=str;
				console.log(str)
			}
		},
		components:{
			Nav,Toobars
		}
		
	}
</script>

<style lang="scss">
	$sc:25;
.app{
	height: 25/$sc+rem;
}
</style>