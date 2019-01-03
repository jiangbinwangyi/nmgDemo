<template>
	<div class="pz_top">
		<Menu mode="horizontal" theme="light" :active-name="theType">
			<!--<img :src="logo" alt="" height="40px" />-->
			<strong style="float: left; padding: 0 15px 0;font-size: 18px;" v-text="title"></strong>
			<MenuItem name="list" :to="'/'+theUrl+'/list/'">
	            <Icon type="ios-paper" />订单列表
	        </MenuItem>
	        <MenuItem name="chart" :to="'/'+theUrl+'/chart/'">
	            <Icon type="ios-analytics" />运营分析
	        </MenuItem>
        </Menu>
        
        <div class="pz_form" v-show="theType==list">
        	<Row>
        		<i-col span="10" style="font-size: 16px;">订单列表</i-col>
        		<i-col span="5">
		        	<Select v-model="model1" style="width:90%" placeholder="订单状态">
				        <Option value="已完成">已完成</Option>
				        <Option value="未完成">未完成</Option>
				    </Select>
        		</i-col>
        		<i-col span="3">
        			<RadioGroup v-model="model2">
				        <Radio label="年">
				            <span>年</span>
				        </Radio>
				        <Radio label="月">
				            <span>月</span>
				        </Radio>
				        <Radio label="日">
				            <span>日</span>
				        </Radio>
				    </RadioGroup>
        		</i-col>
        		<i-col span="4">
        			 <Input v-model="value" style="width:90%" />
        		</i-col>
        		<i-col span="2" style="text-align: right;">
        			<Button type="primary">查找</Button>
        		</i-col>
        	</Row>
        </div>
	</div>
</template>

<script>
import logo from '@/assets/jiahe.jpg'
	export default{
		name: 'iv_nav',
		data(){
			return {
				logo,
				model1: '',
				model2: 'year',
				value: '2018'
			}
		},
		props: {
			title:{
				type: String,
			},
			theUrl:{
				type: String,
				default: ''
			},
			theType:{
				type: String,
				default: ''
			}
		},
		mounted(){},
		watch:{},
		methods:{}
	}
</script>

<style scoped="scoped">
.pz_form{
	margin-top: 10px;
	background: #fff;
	padding: 0 10px;
	height: 60px;
	line-height: 60px;
	overflow: hidden;
}
</style>