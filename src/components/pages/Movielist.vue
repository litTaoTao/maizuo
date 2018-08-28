<template>
	<div v-infinite-scroll='loadMore'
		infinite-scroll-disabled='loading'
		infinite-scroll-distance='10' >
		
		<div v-for="item in list" :key='item.id'>
			
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
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	
	/*第二种方法*/
	export default {
		data(){
			return {
				list:[],	//放电影列表的地方
				type:'',	//电影的类型coming-soon  now-playing
				loading:false,//true的话不可以发送请求，false才可以发送
				no:1	//当前的页数是第一页
			}
		},
		created(){
			//console.log("created")	
		},
		watch:{
			$route:{
				immediate:true,
				handler(n){
					//console.log("watch")
					let type=n.params.type;
					this.type=type;
					this.no=1	//进来显示的是第一页数据
					this.getData();
					this.list=[];
				}
			}
		},
		methods:{
			loadMore(){
				 
				//console.log("lo")
				this.getData()
			},
			getData(){
				var t=Toast({
				  iconClass: 'fa fa-spinner fa-pulse fa-3x fa-fw',
				  position: 'middle',
				  duration: -1,
				  
				});
				this.loading = true;  //表示正在接受请求，其他请求无效
				this.$http.get("/mz/v4/api/film/"+this.type,{
						params:{
							__t:new Date().getTime(),
							page:this.no,
							count:5
						}
					}).then((res)=>{
						this.list= this.list.concat(res.data.data.films)	//concat用于连接两个或多个数组
						//console.log(res.data.data.films)
							this.loading=false;
							this.no++;
							t.close()
					})
			}
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
	p{
		line-height: 15px;
	}
	
</style>