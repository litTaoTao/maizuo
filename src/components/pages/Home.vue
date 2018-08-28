<template>
	<div>
		
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="item in list">
		    	<img :src="item.imageUrl"/>
		    </div>
		    
		  </div>
		</div>
		
		
		<Nowplay />
		<router-view></router-view>
		<coming></coming>
	</div>
</template>

<script>
	import Nowplay from '@/components/head/nowplaying'
	import Coming from '@/components/head/coming'
	
	import Swiper from 'swiper'
	import "../../../node_modules/swiper/dist/css/swiper.css"
	export default {
		components:{
			Nowplay,Coming
		},
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.$http.get("/mz/v4/api/billboard/home",{
				params:{
					__t:new Date().getTime() 
				}
			}).then((res)=>{
				//console.log(res.data.data.billboards[0].imageUrl)
				this.list=res.data.data.billboards
				
			})
		},
		mounted(){
			
		},
		watch:{
			list(){		//监听轮播的变化
				
				this.$nextTick(()=>{		//$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
						new Swiper(".swiper-container",{
							loop:true,
							autoplay:{
								disableOnteraction:false,
								delazy:1000
							}
						
						})
					})
					
				}
			}
	}
	
	
	
</script>

<style lang="scss">
	$sc:25;
	img{
		max-width: 100%;
	}
	.swiper-container{
		padding-bottom: 5/$sc+rem;
	}
</style>