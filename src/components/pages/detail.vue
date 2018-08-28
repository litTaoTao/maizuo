<template>
	<div>
			<img :src="list.cover.origin" alt="" />
			<p class="film-word1">影片简介</p>
			<ul>
				<li class="film-word2">
					<span>导演：</span>
					<span>{{list.director}}</span>
				</li>
				<li class="film-word2">
					<span>主演：</span>
					<span v-for="item in list.actors">{{item.name}}|</span>
				</li>
				<li class="film-word2">
					<span>地区语言：</span>
					<span>{{list.nation}}({{list.language}})</span>
				</li>
				<li class="film-word2">
					<span>类型：</span>
					<span>{{list.category}}</span>
				</li>
				<li class="film-word2">
					<span>上映时间：</span>
					<span>{{list.premiereAt|dataFilm}}</span>		<!--	dataFilm	model中filter组件里的第一个参数-->
				</li>
				<li class="film-word3">
					{{list.synopsis}}
				</li>
			</ul>
			<div class="operation">
				<button class="cpn-primary-button">立即购票</button>
			</div>
	</div>
</template>

<script>
	export default {
		props:['id'],
		data(){
			return {
				list:{
					cover:{}			//这个要写，虽然list.cover.origin图片能够出来，但是会报错
				}
			}
		},
		created(){
			this.$http.get("/mz/v4/api/film/"+this.id,{
				params:{
					__t:new Date().getTime()
				}
			}).then((res)=>{
				this.list=res.data.data.film
				console.log(res.data.data.film)
			})
		},
		watch:{
			
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	
	img{
		max-width: 100%;
		overflow: hidden;
		display: block;
	}
	.film-word1{
		    margin: 16px auto;
		    border-left: 16px solid RGB(228, 200, 156);
		    font-size: 16px;
		    padding-left: 4px;
	}
	.film-word2{
		height: 18px;
	    overflow: hidden;
	    margin-bottom: 10px;
	    padding-left: 20px;
	    font-size: 12px;
	}
	.film-word3{
	       text-overflow: ellipsis;
		    margin-bottom: 80px;
		    padding-left: 20px;
		    padding-right: 20px;
		    font-size: 12px;
		    line-height: 18px;
		    letter-spacing:1px;
		    
	}
	.cpn-primary-button {
		    font-size: 14px;
		    min-width: 156px;
		    height: 36px;
		    line-height: 36px;
		    border: none;
		    background-color: #fe8233;
		    padding: 0;
		    margin: 0;
		    border-radius: 18px;
		    color: #fff;
		    -webkit-transition: 0.5s ease;
	}
	.operation{
		    position: fixed;
		    left: 0;
		    bottom: 20px;
		    width: 100%;
		    text-align: center;
	}
	
</style>