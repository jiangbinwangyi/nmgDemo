<template>
	<div class="xdForm">
		<Row>
			<i-col span="2" style="font-size:16px">预约登记</i-col>
			<i-col span="5">
				<Select v-model="model1" placeholder="检查状态" style="width: 90%">
			        <Option value="已检查">已检查</Option>
			        <Option value="未检查">未检查</Option>
			    </Select>
			</i-col>
			<i-col span="5">
				<DatePicker type="date" placeholder="开始时间" style="width: 90%"></DatePicker>
			</i-col>
			<i-col span="5">
				<DatePicker type="date" placeholder="结束时间" style="width: 90%"></DatePicker>
			</i-col>
			<i-col span="5">
				<Input v-model="value" placeholder="请输入姓名" style="width: 90%" />
			</i-col>
			<i-col span="2">
				<Button type="primary">查询</Button>
			</i-col>
		</Row>
	</div>
</template>

<script>
	export default{
		name: 'xdForm',
		data(){
			return {
				model1: '',
				value: '',
			}
		},
		props: {
		},
		mounted(){
		},
		watch:{},
		methods:{}
	}
</script>

<style>
.xdForm{
background: #fff;
padding: 0 10px;
height: 60px;
line-height: 60px;
}
</style>