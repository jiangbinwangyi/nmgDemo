<template>
	<div style="position: relative;">
		<ivNav wd="2D" style="display: inline-block; vertical-align: top; position: absolute; left: 0;top: 0;bottom: 0;"></ivNav>
		<img style="display: inline-block; vertical-align: top;" :src="three"/>
	</div>
</template>

<script>
	import three from '@/assets/iv5.jpg'
	import ivNav from '@/components/iv_nav'
	export default{
		name:'ivthree',
		data(){
			return {
				three,
			}
		},
		components:{
			ivNav,
		}
	}
</script>

<style>
</style>