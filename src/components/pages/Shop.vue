<template>
	<div>
		<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger" @click="tet">danger</mt-button>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		methods:{
			tet(){
				Toast({
				  iconClass: 'fa fa-spinner fa-pulse fa-3x fa-fw',
				  position: 'middle',
				  duration: 3000
				})
			}
		}
	}
</script>

<style>
</style>