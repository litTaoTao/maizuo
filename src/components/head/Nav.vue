<template>
	<div>
		
	 <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
		
			<div class="nav" v-show="flag">
				<ul>
					<li v-for="(item,index) in list" :key='item.id' @click="changname(index)">
						<router-link @click="toggle" :to="item.path">{{item.text}}</router-link>
					</li>
				</ul>
			</div>
	</transition>
	<transition>
		<div class="mask" v-show="flag"　@click="toggle">
			
		</div>
	</transition>
</div>
</template>

<script>
	export default {
		props:["flag","toggle"],
		data(){
			return {
				list:[  
					{
	   	   				id:1,
	   	   				text:"首页",
	   	   				path:'/home',
	   	   				name:'卖座电影'
	   	   			},
	   	   			{
	   	   				id:2,
	   	   				text:"影片",
	   	   				path:'/movie/now-playing',
	   	   				name:'卖座电影'
	   	   				
	   	   			},
	   	   			{
	   	   				id:3,
	   	   				text:"影院",
	   	   				path:'/cinama',
	   	   				name:'全部影院'
	   	   				
	   	   			},
	   	   			{
	   	   				id:4,
	   	   				text:"我的",
	   	   				path:'/my',
	   	   				name:'登录'
	   	   				
	   	   			},
	   	   			{
	   	   				id:5,
	   	   				text:"商城",
	   	   				path:'/shop',
	   	   				name:'商城'
	   	   				
	   	   			},
	   	   			{
	   	   				id:6,
	   	   				text:"卖坐卡",
	   	   				path:'/card',
	   	   				name:'查询/绑定/激活卖座卡'
	   	   			}
	   	   			
				]
			}
		},
		methods:{
			changname(index){
				this.$emit("cname",this.list[index].name)
			}
		},
		watch:{
			
		}
	}
</script>

<style lang="scss">
	
	$sc:25;
	.mask{
		    background: rgba(0,0,0,0.5);
		    position: fixed;
		    top: 25/$sc+rem;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    z-index: 200;
	}
	.nav{
		border-top: 1px solid #222;
	    box-shadow: 0 1px 1px #363636 inset;
	    background: #282828;
	    position: fixed;
	    display: block;
	    top: 25/$sc+rem;
	    right: 80/$sc+rem;
	    bottom: 0;
	    left: 0;
	    z-index: 500;
	    font-size: 14px;
	    li{
	    	text-align: left;
	    	margin-left: 8/$sc+rem;
	    	list-style: none;
	    	line-height: 28/$sc+rem;
	    	a{
	    			line-height: 25/$sc+rem;
	    		display: block;
	    		color: #9a9a9a;
	    		text-decoration: none;
	    	}
	    }
	}
	html{
		background: #E2DFD8;
	}
</style>