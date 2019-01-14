<template>
	<div class="user">
		<ghNav :active="3"></ghNav>
		<div class="gh_main">
			<Row class="gh_user">
				<i-col span="12">
					<div id="userSex" style="width: 100%; height: 100%;"></div>
				</i-col>
				<i-col span="12">
					<div id="userAge" style="width: 100%; height: 100%;"></div>
				</i-col>
				<i-col span="24" style="height: 400px;padding-top: 20px;">
					<div id="userArea" style="width: 100%; height: 100%;"></div>
				</i-col>
			</Row>
		</div>
	</div>
</template>

<script>
	import ghNav from '@/components/gh_nav'
	import echarts from 'echarts'
	export default {
		name: 'user',
		components: {
			ghNav,
		},
		data() {
			return {
				userSex: [{
						"name": "男",
						"value": 20163
					},
					{
						"name": "女",
						"value": 17293
					},
				],
				userAge: {
					xAxis: ['16岁以下', '23-28', '16-23', '29-38', '39-51', '52岁以上'],
					data: [2268, 2968, 20163, 25642, 25642, 15642],
				},
				userArea: [{
						"name": "南京市",
						"value": 9435
					},
					{
						"name": "徐州市",
						"value": 4256
					},
					{
						"name": "连云港市",
						"value": 4332
					},
					{
						"name": "苏州市",
						"value": 8532
					},
					{
						"name": "无锡市",
						"value": 7423
					},
					{
						"name": "常州市",
						"value": 7765
					},
					{
						"name": "淮安市",
						"value": 2433
					},
					{
						"name": "盐城市",
						"value": 1563
					},
					{
						"name": "南通市",
						"value": 2631
					},
					{
						"name": "镇江市",
						"value": 1435
					},
					{
						"name": "扬州市",
						"value": 6556
					},
					{
						"name": "宿迁市",
						"value": 1332
					},
					{
						"name": "泰州市",
						"value": 5332
					}
				],
			}
		},
		mounted() {
			let barOptions = {
				title:{
					left: 'left',
					text: '用户性别比例'
				},
				tooltip: {
					trigger: 'item',
				},
				series: [{
					type: 'pie',
					radius: ['60%', '80%'],
					center: ['50%', '50%'],
					data: this.userSex,
				}]
			}
			let userSex = echarts.init(document.getElementById('userSex'), 'light');
			userSex.setOption(barOptions);

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
					top: 40,
					containLabel: true
				}],
				yAxis: [{
					type: 'category'
				}],
				xAxis: [{
					type: 'value',
					max: 10000,
					min: 0
				}],
				series: [{
					type: 'bar'
				}]
			};
			//累计医生职称分布
			let userAge = echarts.init(document.getElementById('userAge'), 'light')
			barOption.title.text = '用户年龄分布';
			barOption.yAxis[0].data = this.userAge.xAxis;
			barOption.series[0].data = this.userAge.data;
			userAge.setOption(barOption);

			let cityJson = require('./jiang_su_geo.json');
			echarts.registerMap('jiangsu', cityJson);
			let mapOption = {
				tooltip: {
					trigger: 'item',
					formatter: function(params) {
						if(params.name !== "") {
							return params.name + ' : ' + params.value;
						}
					}
				},
				visualMap: {
					min: 1000,
					max: 10000,
					calculable: true,
					bottom: 20,
					textStyle: {
						color: '#fff'
					},
					inRange: {
		                color: ['lightskyblue','yellow','orangered']
		            }
				},
				series: {
					name: '地域分布',
					type: 'map',
					mapType: 'jiangsu',
					data: this.userArea,
					itemStyle:{
	                    normal:{label:{show:true,fontSize:'12px'}},
	                    emphasis:{label:{show:true}}
	                },
					top: 0,
					bottom: 0
				}
			}
			let userArea = echarts.init(document.getElementById('userArea'))
			userArea.setOption(mapOption);
		}
	}
</script>

<style lang="less">
	.gh_user .ivu-col {
		height: 180px;
	}
</style>