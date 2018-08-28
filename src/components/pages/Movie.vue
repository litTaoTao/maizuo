<template>
	<div>
		<div class="film-list-nav">
			<router-link to="/movie/now-playing" class="choosing now-playing">正在热映</router-link>
			<router-link to="/movie/coming-soon" class="choosing now-playing">即将上映</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>

</script>

<style lang="scss">
	$sc:25;
	
	.film-list-nav{
		height: 23/$sc+rem;
	    margin: 0 auto;
	    width: 100%;
	    border-bottom: solid #fe6e00 1px;
	    background: #fff;
	    
	    a{
	    	float: left;
		    width: 50%;
		    height: 100%;
		    text-align: center;
		    font-size: 16px;
		    line-height: 23/$sc+rem;
		    color: #6a6a6a;
		    cursor: pointer;
		    text-decoration: none;
				 &:hover, &:focus {
				    color: #fe6e00;
				    text-decoration: none;
				}
	    }
	}
	img{
		max-width: 100%;
	}
	.choosing{
		color: #fe6e00;
   		border-bottom: 1px solid #FE6E00;
	}
	.now-playing{
		    float: left;
		    width: 50%;
		    height: 100%;
		    text-align: center;
		    font-size: 16px;
		    line-height: 46/$sc+rem;
		    color: #6a6a6a;
		    cursor: pointer;
	}
</style>