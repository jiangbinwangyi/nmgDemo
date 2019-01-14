<template>
	<div style="width: 100%;height: 100%;">
		<iframe :src="src" frameborder="0" style="width: 100%; display: block; height:100%;"></iframe>
	</div>
</template>

<script>
	export default {
		name: 'iframeView2',
		data(){
			return {
				src: './huizhen/index.html',
			}
		},
		mounted(){
			if(this.$route.query.u){
				this.theUrl(this.$route.name);
			}else{
				this.theUrl('drug');
			}
		},
		watch:{
			$route(url){
				this.theUrl(url.name);
			}
		},
		methods:{
			theUrl(u){
				if(u=='drug'){
					this.src = 'http://192.168.56.100:8383/admin/?doctor=18911566366#/app/medical_prescription/ypps'
				}else{
					this.src = 'http://192.168.56.100:8383/admin/?doctor=18911566366#/app/ai/znwz'
				}
			}
		}
	}
</script>

<style lang="less">
</style>