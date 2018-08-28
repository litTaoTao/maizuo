<template>
	<div class="toolbar">
			<i class="fa fa-bars" @click="toggle"></i>
			<h3 @click="toggle">{{this.c?this.c=this.c:"卖座电影"}}</h3>
			<router-link to="/addr">地址</router-link>
		</div>
</template>

<script>
	 export default {
   	  props:["toggle","c"],
   	  data(){
   	  	return {
   	  		
   	  	}
   	  },
   	  methods:{
   	  	
   	  },
   	  created(){
   	  	console.log(this.c)
   	  }
   }
</script>

<style lang="scss">
	$sc:25;
	*{
		margin: 0;
		padding: 0;
	}
	.toolbar{
		background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: 25/$sc+rem;
	    line-height: 25/$sc+rem;
	    overflow: hidden;
	    font-size: 14px;
	    text-align: left;
	    h3{
	    	color: #efefef;
	    	text-decoration: none;
	    	display: inline-block;
	    }
	    i{
	    	color: #9A9A9A;
	    	margin: 8/$sc+rem;
	    }
	    a{
	    	color: #fff;
	    }
}
	.fa{
		font-size: 18px;
	}
</style>
