<template>
  <div class="order">
    <ghNav :active="2"></ghNav>
    <div class="gh_main">
    	 <Row class="gh_order">
	    	<i-col span="12">
	    		<div id="tuoguan" style="width: 100%; height: 100%;"></div>
	    	</i-col>
	    	<i-col span="12">
	    		<div id="orderMoney" style="width: 100%; height: 100%;"></div>
	    	</i-col>
	    	<i-col span="12">
	    		<div id="orderDoctor" style="width: 100%; height: 100%;"></div>
	    	</i-col>
	    	<i-col span="12">
	    		<div id="orderText" style="width: 100%; height: 100%;"></div>
	    	</i-col>
	    </Row>
    </div>
  </div>
</template>

<script>
	import ghNav from '@/components/gh_nav'
	import echarts from 'echarts'
	export default{
		 name: 'order',
		 components:{
		 	ghNav,
		 },
		 data(){
		 	return {
		 		tuoguan: [
					{"name":"托管","value": 20163},
					{"name":"未托管","value": 1129},
				],
				orderMoney: {
					xAxis: ["2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11"],
					yAxis: ['0-50','50-100','>100'],
					data: [
						[1129, 1542, 2545, 1457, 1576, 2264, 2454],
						[2356, 1968, 2231, 1566, 2876, 1386, 1863],
						[1190, 1642, 1754, 2423, 1463, 1543, 2348]
					]
				},
				orderDoctor: {
					xAxis: ["2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11"],
					yAxis: ['0-50','50-100','>100'],
					data: [
						[2354, 1968, 2241, 1586, 1987, 1348, 1986],
						[2534, 1768, 2163, 2163, 1743, 2013, 1562],
						[1578, 1943, 1163, 2063, 1456, 2063, 1644]
					]
				},
				orderText: {
					xAxis: ["2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11"],
					yAxis: ['0-50','50-100','>100'],
					data: [
						[2534, 2968, 2676, 1453, 2565, 1575, 2466],
						[1590, 1432, 1675, 2454, 1464, 2465, 1643],
						[1786, 1968, 2784, 1786, 2567, 1464, 1466]
					]
				}
		 	}
		 },
		 mounted(){
		 	let barOptions = {
				tooltip: {
						trigger: 'item',
				},
				series: [{
					type: 'pie',
					radius: ['60%', '80%'],
					center: ['50%','50%'],
					data: this.tuoguan,
				}]
			}
			let tuoguan = echarts.init(document.getElementById('tuoguan'), 'light');
			tuoguan.setOption(barOptions);
			
			
			//柱状图
			let barOption = {
				title: {
					left: 'left',
				},
				legend: {
					top: 30,
					data: null
				},
				tooltip: {
						trigger: 'axis',
				},
				grid: [{
					bottom: 0,
					left: 0,
					right: '10%',
					containLabel:true
				}],
				xAxis: [{
					type: 'category'
				}],
				yAxis: [{type: 'value'}],
				series: []
			};
			let orderMoney = echarts.init(document.getElementById('orderMoney'), 'light')
			barOption.title.text = '可预约医院订单总价分布';
			barOption.xAxis[0].data = this.orderMoney.xAxis;
			for(let i in this.orderMoney.data){
				let obj = {};
				obj.name = this.orderMoney.yAxis[i];
				obj.type = "bar";
				obj.stack = "one";
				obj.data = this.orderMoney.data[i];
				barOption.series[i] = obj;
			}
			orderMoney.setOption(barOption);
			
			let orderDoctor = echarts.init(document.getElementById('orderDoctor'), 'light')
			barOption.title.text = '可预约医院预约医生量分布';
			barOption.xAxis[0].data = this.orderDoctor.xAxis;
			for(let i in this.orderDoctor.data){
				let obj = {};
				obj.name = this.orderDoctor.yAxis[i];
				obj.type = "bar";
				obj.stack = "one";
				obj.data = this.orderDoctor.data[i];
				barOption.series[i] = obj;
			}
			orderDoctor.setOption(barOption);
			
			let orderText = echarts.init(document.getElementById('orderText'), 'light')
			barOption.title.text = '可预约医院订单量分布';
			barOption.xAxis[0].data = this.orderText.xAxis;
			for(let i in this.orderText.data){
				let obj = {};
				obj.name = this.orderText.yAxis[i];
				obj.type = "bar";
				obj.stack = "one";
				obj.data = this.orderText.data[i];
				barOption.series[i] = obj;
			}
			orderText.setOption(barOption);
			
			
			window.addEventListener('resize', function() {
				tuoguan.resize();
				orderMoney.resize();
				orderDoctor.resize();
				orderText.resize();
			})
		 }
	}
</script>

<style lang="less">
	.gh_order .ivu-col{
		height: 230px;
	}
</style>