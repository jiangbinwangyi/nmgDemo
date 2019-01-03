<template>
	<div class="iv_top">
		<!--<img :src="logo" alt="" height="40px" />-->
		<strong v-text="title"></strong>
	</div>
</template>

<script>
import logo from '@/assets/jiahe.jpg'
	export default{
		name: 'iv_nav',
		data(){
			return {
				logo,
			}
		},
		props: {
			title:{
				type: String,
			}
		},
		mounted(){},
		watch:{},
		methods:{}
	}
</script>

<style scoped="scoped">
.iv_top{
	line-height: 60px;
	background: #fff;
	padding: 0 10px;
	margin-bottom: 10px;
}
.iv_top img{
	vertical-align: middle;
	line-height: 1;
	display: inline-block;
}
.iv_top strong{
	font-size: 18px;
	/*padding-left: 15px;*/
	vertical-align: middle;
}
</style>