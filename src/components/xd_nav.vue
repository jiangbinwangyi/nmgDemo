<template>
  <div class="xd_nav">
    <div class="gh_top">
    	<Button size="large" to="/ecg/view" :type="active==1?'primary':'default'">波形浏览</Button>
    	<Button size="large" to="/ecg/test" :type="active==2?'primary':'default'">测量值</Button>
    	
    	
    	<Button to="/ecg/list" type="default" style="float: right;" icon="md-arrow-back">返回列表</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xd_nav',
  data(){
  	return {
  	}
  },
  props: {
		active: {
			default: 1,
			type: Number
		}
  },
  methods:{
  }
}
</script>

<style scoped lang="less">
	.gh_top{
		padding: 10px;
		background: #fff;
		.ivu-btn{
			margin-right: 10px;
		}
	}
</style>
