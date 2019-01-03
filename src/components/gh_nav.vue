<template>
  <div class="gh_nav">
    <Menu mode="horizontal" theme="light" active-name="1">
	  		<!--<img :src="logo" alt="" style="float: left; padding: 9px 15px 0;" />-->
	  		<strong style="float: left; padding: 0 15px 0;font-size: 18px;">江苏省卫健委统一挂号平台</strong>
        <MenuItem name="1">
            <Icon type="ios-paper" />资源分析
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-analytics" />运营分析
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-archive" />指标平台
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-book" />取数平台
        </MenuItem>
    </Menu>
    <div class="gh_top">
    	<Button size="large" to="overview" :type="active==1?'primary':'default'">概况数据</Button>
    	<Button size="large" to="order" :type="active==2?'primary':'default'">预约数据</Button>
    	<Button size="large" to="user" :type="active==3?'primary':'default'">用户数据</Button>
    	
    	<div class="gh_top_date">
    		<RadioGroup v-model="date">
	        <Radio label="年">
	            <span>年</span>
	        </Radio>
	        <Radio label="月">
	            <span>月</span>
	        </Radio>
	        <Radio label="周">
	            <span>周</span>
	        </Radio>
	        <Radio label="日">
	            <span>日</span>
	        </Radio>
	    	</RadioGroup>
	    	<input type="text" name="seach" id="seach" value="2018" />
    	</div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/weiyi.jpg'
export default {
  name: 'gh_nav',
  data(){
  	return {
  		date: '年',
  		logo,
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
		margin-top: 10px;
		background: #fff;
		padding: 10px;
		.ivu-btn{
			margin-right: 10px;
		}
		.gh_top_date{
			float: right;
			padding-top: 8px;
			input{
				padding-left: 4px;
			}
		}
	}
</style>
