<template>
	<div class="xdChart">
		<top title="远程影像中心运营管理（长治市区域医疗协同平台）"></top>
		<Row>
			<i-col span='12'>
				<div id="serveNum" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='12'>
				<div id="serveState" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='12'>
				<div id="servePerson" style="height: 100%; width: 100%;"></div>
			</i-col>
			<i-col span='12'>
				<div id="serveTime" style="height: 100%; width: 100%;"></div>
			</i-col>
		</Row>
		<div style="text-align: center; padding-top: 20px;">
			<a href="#more">更多统计 >></a>
		</div>
	</div>
</template>

<script>
	import top from '@/components/xd_top'
	import echarts from 'echarts'
	export default{
		name: 'xdChart',
		data(){
			return {
				person: [
					{"name":"男","value": 2432},
					{"name":"女","value": 1989}
				],
				doctorTitle: {
					xAxis: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					data: [422,381,435,434,462,431,331,372,382,463,396,486]
				},
				doctorTitle2: {
					xAxis: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					data: [210,190,228,257,215,217,196,169,170,247,199,237]
				},
				serveTime: {
					xAxis: ['0-3min','3-5min','5-10min','10-15min','15-20min','20-30min','30min以上'],
					data: [23,546,345,209,113,45,3]
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
		 	
		 	let serveState = echarts.init(document.getElementById('serveState'), 'light');
			barOptions.title.text = '累计服务患者性别分布';
			barOptions.series[0].data = this.person;
			serveState.setOption(barOptions);
			
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
			//累计医生职称分布
			let serveNum = echarts.init(document.getElementById('serveNum'), 'light')
			barOption.title.text = '服务次数统计';
			barOption.xAxis.data = this.doctorTitle.xAxis;
			barOption.series[0].data = this.doctorTitle.data
			serveNum.setOption(barOption);
			
			let servePerson = echarts.init(document.getElementById('servePerson'), 'light')
			barOption.title.text = '服务患者人数统计';
			barOption.xAxis.data = this.doctorTitle2.xAxis;
			barOption.series[0].data = this.doctorTitle2.data
			servePerson.setOption(barOption);
			
			let serveTime = echarts.init(document.getElementById('serveTime'), 'light')
			barOption.title.text = '服务平均响应时间统计';
			barOption.xAxis.data = this.serveTime.xAxis;
			barOption.series[0].data = this.serveTime.data
			serveTime.setOption(barOption);
			
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
	.xdChart .ivu-col{
		height: 200px;
		margin-bottom: 20px;
	}
</style>