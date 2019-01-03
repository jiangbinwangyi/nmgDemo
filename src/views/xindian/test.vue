<template>
	<div class="xdView">
		<top title="远程心电诊断医生工作站（无锡市人民医院远程心电诊断中心）"></top>
		<xdNav :active="2"></xdNav>
		<div class="test_main">
			<img :src="xindian"/>
		</div>
	</div>
</template>

<script>
	import xdNav from '@/components/xd_nav'
	import top from '@/components/xd_top'
	import xindian from "@/assets/xindian2.png"
	export default{
		name: 'xdView',
		data(){
			return {
				xindian,
			}
		},
		 components:{
		 	xdNav,
		 	top
		 },
	}
</script>

<style>
	.test_main{
		padding: 10px;
		background: #fff;
	}
	.test_main img{
		width: 100%;
		height: auto;
	}
</style>