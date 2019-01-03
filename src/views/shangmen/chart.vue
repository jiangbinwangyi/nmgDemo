<template>
	<div class="xdChart">
		<top title="上门护理服务运营管理" theUrl="visit" theType="chart"></top>
		<Row :gutter="40">
			<i-col span='8'>
				<div id="smHushi" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='8'>
				<div id="smHuanzhe" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='8'>
				<div id="smSex" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='8'>
				<div id="smOrder" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='8'>
				<div id="smTaocan" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='8'>
				<div id="smMoney" style="height: 100%; width: 100%;"></div>
			</i-col>
		</Row>
		<div style="text-align: center; padding-top: 20px;">
			<a href="#more">更多统计 >></a>
		</div>
	</div>
</template>

<script>
	import top from '@/components/pz_top'
	import echarts from 'echarts'
	export default{
		name: 'xdChart',
		data(){
			return {
				person: [
					{"name":"男","value": 3432},
					{"name":"女","value": 3189}
				],
				taocan: [
					{"name":"198元/次","value": 1096},
					{"name":"298元/次","value": 1675},
					{"name":"598元/次","value": 908},
					{"name":"898元/次","value": 752}
				],
				hushi: {
					xAxis: ['北京','南京','深圳','上海','重庆'],
					data: [246,345,156,237,109]
				},
				huanzhe: {
					xAxis: ['北京','南京','深圳','上海','重庆'],
					data: [1456,1673,667,1143,567]
				},
				doctorTitle: {
					xAxis: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					data: [25,36,28,30,28,39,31,25,28,33,27,31]
				},
				doctorTitle2: {
					xAxis: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					data: [224,180,290,300,240,180,310,240,270,280,230,220]
				},
				serveTime: {
					xAxis: ['0-3min','3-5min','5-8min','8-15min','15-20min','20-30min','30min以上'],
					data: [23,546,345,139,113,11,3]
				},
			}
		},
		 components:{
		 	top
		 },
		 mounted(){
		 	let barOptions = {
				title: {
					text: '服务完成状态统计',
					left: 'left',
				},
				tooltip: {
						trigger: 'item',
				},
				series: [{
					type: 'pie',
					radius: '75%',
					center: ['50%','55%'],
					label: {
			            normal: {
			                position: 'inner'
			            }
	        		},
				}]
			}
		 	
		 	let smSex = echarts.init(document.getElementById('smSex'), 'light');
			barOptions.title.text = '患者男女比例';
			barOptions.series[0].data = this.person;
			smSex.setOption(barOptions);
			
			let smTaocan = echarts.init(document.getElementById('smTaocan'), 'light');
			barOptions.title.text = '订单套餐比例';
			barOptions.series[0].data = this.taocan;
			smTaocan.setOption(barOptions);
			
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
				xAxis: {
					type: 'category'
				},
				yAxis: {type: 'value'},
				series: [{
					type: 'bar',
				}]
			};
			let smHushi = echarts.init(document.getElementById('smHushi'), 'light')
			barOption.title.text = '注册护士区域分布';
			barOption.xAxis.data = this.hushi.xAxis;
			barOption.series[0].data = this.hushi.data
			smHushi.setOption(barOption);
			
			let smHuanzhe = echarts.init(document.getElementById('smHuanzhe'), 'light')
			barOption.title.text = '注册患者区域分布';
			barOption.xAxis.data = this.huanzhe.xAxis;
			barOption.series[0].data = this.huanzhe.data
			smHuanzhe.setOption(barOption);
			
			let lineOption = {
				title: {
					left: 'left',
				},
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    grid: [{
					bottom: 0,
					left: 0,
					right: '10%',
					containLabel:true
				}],
			    series: [{
			        data: [820, 932, 901, 934, 1290, 1330, 1320],
			        type: 'line',
			        areaStyle: {}
			    }]
			};
			
			let smOrder = echarts.init(document.getElementById('smOrder'), 'light')
			lineOption.title.text = '订单量统计';
			lineOption.xAxis.data = this.doctorTitle2.xAxis;
			lineOption.series[0].data = this.doctorTitle2.data
			smOrder.setOption(lineOption);
			
			let smMoney = echarts.init(document.getElementById('smMoney'), 'light')
			lineOption.title.text = '订单流水统计';
			lineOption.xAxis.data = this.doctorTitle.xAxis;
			lineOption.series[0].data = this.doctorTitle.data;
			lineOption.yAxis.name='(万元)'
			smMoney.setOption(lineOption);
			
			window.addEventListener('resize', function() {
				servePerson.resize();
				serveTime.resize();
				serveNum.resize();
				serveState.resize();
			})
		 }
	}
</script>

<style scoped="scoped">
	.xdChart .ivu-row{
		padding: 20px;
	}
	.xdChart .ivu-col{
		height: 200px;
		margin-bottom: 20px;
	}
</style>