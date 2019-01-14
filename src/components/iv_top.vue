<template>
	<div class="iv_top">
		<!--<img :src="logo" alt="" />-->
		<strong v-text="title"></strong>
	</div>
</template>

<script>
import logo from '@/assets/yinggu-logo.png'
	export default{
		name: 'iv_nav',
		data(){
			return {
				logo,
				title: '远程影像诊断医生工作站'
			}
		},
		mounted(){
			this.zurl(this.$route.query.t);
		},
		watch:{
			'$route'(to,from){
				this.zurl(to.query.t);
			}
		},
		methods:{
			zurl(t){
				if(t == "iv"){
					this.title= "远程影像诊断医生工作站（长治市人民医院远程影像诊断中心）";
				}else if(t=='hz'){
					this.title= "长治市疑难杂症多学科会诊平台";
				}else if(t=='bl'){
					this.title= "远程病理";
				}else{
					this.title= "";	
				}
				this.$emit('ivTitle',t);
			}
		}
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