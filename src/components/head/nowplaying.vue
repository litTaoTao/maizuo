<template>
		<div>
			<div v-for="item in list">
				<dl>
					<dt>
							<router-link :to='"/detail/"+item.id'>
								<img :src="item.cover.origin"/>
							</router-link>
					</dt>
					<dd>
						<p class="move_title">
							{{item.name}}
						</p>
						<p>
							<span>{{item.cinemaCount}}家影院上映</span>
							<span>{{item.watchCount}}购票</span>
						</p>
					</dd>
					<dd class="grad">
						
						{{item.grade}}
					</dd>
				</dl>
			</div>
			<div class="more">
			<router-link to="">
				更多热映电影
			</router-link>
			</div>
		</div>
</template>

<script>
	export default {
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.$http.get("/mz/v4/api/film/now-playing",{
				params:{
					__t:new Date().getTime(),
					page:1,
					count:5
					
				}
			}).then((res)=>{
				//console.log(res.data.data.films)
				this.list=res.data.data.films
				
			})
		},
		mounted(){
			
		}
	}
	
	
</script>

<style lang="scss">
	$sc:25;

	
	span{
		font-size: 8px;
		color: #9a9a9a;
	}
	p{
		line-height: 10/$sc+rem;
		margin-left: 10/$sc+rem;
	}
	.move_title{
		font-size: 14px;
	}
	dd{
		float: left;
	}
	.grad{
		margin-right: 8/$sc+rem;
		float: right;
		font-size: 24px;
		color: #f00;
	}
	dl{
		background: #fff;
		padding-bottom: 5/$sc+rem;
		overflow: hidden;
		margin: 0 10/$sc+rem 10/$sc+rem 10/$sc+rem;
	}
	.more{
		width: 80/$sc+rem;
	    height: 15/$sc+rem;
	    border: 1px solid #aaa;
	    border-radius: 15px;
	    margin: 5/$sc+rem auto 15/$sc+rem;
	    text-align: center;
	    line-height: 15/$sc+rem;
	    font-size: 12px;
	    color: #616161;
	    cursor: pointer;
	}
	
</style>