<template>
	<div>
		<div class="dividing-line">
			<div class="upcoming">
				即将上映电影
			</div>
		</div>
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
						
					</dd>
					<dd class="grad">
						
						{{item.grade}}
					</dd>
				</dl>
			</div>
			<div class="more">
			<router-link to="">
				更多即将上映电影
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
		created(){//v4/api/film/coming-soon?__t=1533383079588&page=1&count=3
			this.$http.get("/mz/v4/api/film/coming-soon",{
				params:{
					__t:new Date().getTime(),
					page:1,
					count:3
					
				}
			}).then((res)=>{
				//console.log(res.data.data.films)
				this.list=res.data.data.films
				
			})
			//console.log(this.$route.params)
		},
		mounted(){
			
		},
		watch:{
			$route(n){
				console.log(n.params.type)
			}
		}
	}
	
</script>

<style>
	.upcoming {
    width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
}
	.dividing-line{
	    position: relative;
	    margin-top: 30px;
	    margin-bottom: 30px;
	    border-bottom: 1px solid #a8a8a8;
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