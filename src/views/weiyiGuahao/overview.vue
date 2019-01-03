<template>
	<div class="overview">
		<ghNav :active="1"></ghNav>
		<div class="gh_main">
			<Row :gutter="10" class="gh_overview">
				<i-col span="7">
					<div id="person" style="height: 100%; width: 100%;"></div>
				</i-col>
				<i-col span="7">
					<div id="doctor" style="height: 100%; width: 100%;"></div>
				</i-col>
				<i-col span="10">
					<div id="overview" style="height: 100%; width: 100%;"></div>
				</i-col>
			</Row>
			<Row :gutter="10" class="gh_overview">
				<i-col span="8">
					<div id="doctorTitle" style="height: 100%; width: 100%;"></div>
				</i-col>
				<i-col span="8">
					<div id="doctorHospital" style="height: 100%; width: 100%;"></div>
				</i-col>
				<i-col span="8">
					<div id="doctorCity" style="height: 100%; width: 100%;"></div>
				</i-col>
			</Row>	
		</div>
	</div>
</template>

<script>
	import ghNav from '@/components/gh_nav'
	import echarts from 'echarts'
	export default {
		name: 'overview',
		data() {
			return {
				person: [
					{"name":"技师","value": 6999},
					{"name":"医生","value": 192153},
					{"name":"护士","value": 31955},
					{"name":"其他","value": 147889}
				],
				doctor: [
					{"name":"仅微医生","value": 201631},
					{"name":"仅号源医生","value": 112901},
					{"name":"重合","value": 29568}
				],
				overview: [
					{"name":"医生数量","value": 344118},
					{"name":"应届生数量","value": 231217},
					{"name":"开通任意一个权限","value": 68998},
					{"name":"三级甲等医院医生量","value": 49406},
					{"name":"副主任及以上职称医生量","value": 39589},
					{"name":"产生付费接诊订单量","value": 7798},
					{"name":"问诊金额大于50元医生量","value": 4339},
				],
				doctorTitle: {
					yAxis: ["仅号源医生", "重合", "仅微医生"],
					xAxis: ['主任医师','副主任医师','主治医师','住院医师'],
					data: [
						[17674, 25743, 29853,30534],
						[12680, 15422, 18653,21954],
						[36684, 49653, 58654,64654]
					]
				},
				doctorHospital: {
					yAxis: ["仅号源医生", "重合", "仅微医生"],
					xAxis: ['三甲','二甲','一甲'],
					data: [
						[23544, 35463, 48543],
						[13463, 1534, 17522],
						[41165, 55633, 67865]
					]
				},
				doctorCity: {
					yAxis: ["仅号源医生", "重合", "仅微医生"],
					xAxis: ['二线城市','三线城市','四线城市','五线城市'],
					data: [
						[43642, 33244, 21456,11265],
						[19422, 18968, 17753,16565],
						[72943, 62168, 51349,41820]
					]
				},
			}
		},
		components: {
			ghNav,
		},
		mounted() {
			let barOptions = {
				title: {
					text: '累计医疗服务人员分布',
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
			//服务人员分布
			let person = echarts.init(document.getElementById('person'), 'light');
			barOptions.title.text = '累计医疗服务人员分布';
			barOptions.series[0].data = this.person;
			person.setOption(barOptions);
			
			//累计医生身份分布
			let doctor = echarts.init(document.getElementById('doctor'), 'light')
			barOptions.title.text = '累计医生身份分布';
			barOptions.series[0].data = this.doctor;
			doctor.setOption(barOptions);
			
			//漏斗图
			let ldOption = {
				tooltip: {
						trigger: 'item',
				},
				series: [{
					type: 'funnel',
					width: '60%',
					left: 0,
					bottom:0,
					top:0,
					center: ['50%','55%'],
				}]
			};
			let overview = echarts.init(document.getElementById('overview'), 'light')
			ldOption.series[0].data = this.overview;
			overview.setOption(ldOption);
			
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
			//累计医生职称分布
			let doctorTitle = echarts.init(document.getElementById('doctorTitle'), 'light')
			barOption.title.text = '累计医生职称分布';
			barOption.legend.data = this.doctorHospital.yAxis;
			barOption.xAxis[0].data = this.doctorTitle.xAxis;
			for(let i in this.doctorTitle.data){
				let obj = {};
				obj.name = this.doctorHospital.yAxis[i];
				obj.type = "bar";
				obj.stack = "one";
				obj.data = this.doctorTitle.data[i];
				barOption.series[i] = obj;
			}
			doctorTitle.setOption(barOption);
			
			//累计医生医院等级分布
			let doctorHospital = echarts.init(document.getElementById('doctorHospital'), 'light')
			barOption.title.text = '累计医生医院等级分布';
			barOption.xAxis[0].data = this.doctorHospital.xAxis;
			for(let i in this.doctorHospital.data){
				let obj = {};
				obj.name = this.doctorHospital.yAxis[i];
				obj.type = "bar";
				obj.stack = "one";
				obj.data = this.doctorHospital.data[i];
				barOption.series[i] = obj;
			}
			doctorHospital.setOption(barOption);
			
			//累计医生城市等级分布
			let doctorCity = echarts.init(document.getElementById('doctorCity'), 'light')
			barOption.title.text = '累计医生城市等级分布';
			barOption.xAxis[0].data = this.doctorCity.xAxis;
			for(let i in this.doctorCity.data){
				let obj = {};
				obj.name = this.doctorHospital.yAxis[i];
				obj.type = "bar";
				obj.stack = "one";
				obj.data = this.doctorCity.data[i];
				barOption.series[i] = obj;
			}
			doctorCity.setOption(barOption);

			window.addEventListener('resize', function() {
				person.resize();
				doctor.resize();
				overview.resize();
				doctorTitle.resize();
				doctorHospital.resize();
				doctorCity.resize();
			})
		}
	}
</script>

<style lang="less">
	.gh_main {
		background: #fff;
		padding: 10px;
		overflow: hidden;
	}
	
	.gh_overview {
		height: 200px;
		margin-bottom: 16px;
		&:nth-of-type(2){
			height: 240px;
		}
	}
	
	.gh_overview .ivu-col {
		height: 100%;
	}
</style>