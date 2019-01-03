<template>
	<div style="width: 100%;">
		<iframe :src="src" frameborder="0" style="width: 375px; display: block; height:600px;margin: 0 auto;"></iframe>
	</div>
</template>

<script>
	export default {
		name: 'iframeView',
		data(){
			return {
				src: null,
			}
		},
		mounted(){
			if(this.$route.query.u){
				this.theUrl(this.$route.query.u);
			}else{
				this.theUrl('hospital');
			}
		},
		watch:{
			$route(url){
				this.theUrl(url.query.u);
			}
		},
		methods:{
			theUrl(u){
				let sj = Math.round(Math.random()*1000);
				this.src = './guahao/index.html?'+sj+'#'+u;
			}
		}
	}
</script>

<style lang="less">
</style>