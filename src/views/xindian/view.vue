<template>
	<div class="xdView">
		<top title="远程心电诊断医生工作站（无锡市人民医院远程心电诊断中心）"></top>
		<xdNav :active="1"></xdNav>
		<div class="view_main">
			<div class="xd_btn">
				<Row>
					<i-col span="7">
						导联布局：
						<Select v-model="model1" style="width:100px">
					        <Option value="bb">S*3+1同步</Option>
					    </Select>
					    <span>&nbsp;</span>
					    <Select v-model="model1" style="width:90px">
					        <Option value="bb">显示配置</Option>
					    </Select>
					</i-col>
					<i-col span="11">
						<Checkbox>多页打印</Checkbox>
						<span>&nbsp;</span>
					    <Select v-model="model1" style="width:130px">
					        <Option value="bb">全导联横排版</Option>
					    </Select>
						<span>&nbsp;</span>
						<Select v-model="model1" style="width:80px" disabled="disabled">
					        <Option value="bb">未选中</Option>
					    </Select>
						<span>&nbsp;</span>
						<Button>预览</Button>
						<span>&nbsp;</span>
						<Button>打印</Button>
					</i-col>
					<i-col span="4">
						<Button type="primary">标记存储</Button>
						<span>&nbsp;</span>
						<Button type="primary">导联置换</Button>
					</i-col>
					<i-col span="2" style="text-align: right;">
						<!--<Button type="primary">诊断</Button>-->
					</i-col>
				</Row>
			</div>
			<div class="xd_info">
				<Row>
					<i-col span="6">
						<span>姓名：孟凡X</span>
						<span>性别：男</span>
						<span>年龄：38岁X</span>
						<span>住院号：2556</span>
						<span>门诊号：6222X</span>
					</i-col>
					<i-col span="12">
						<span>心率：60</span>
						<span>F波时限：0</span>
						<span>P-R-T电轴：53 /45 /54</span>
						<span>FR间期：166</span>
						<span>Q-T间期：354</span>
						<span>RVS/SVI：1 /0.513</span>
						<span>RV6/SV2：0.71/0.84</span>
						<span>QRS间期：83</span>
						<span>QTC间期：354↓</span>
						<span>RVS/SVI：1.513</span>
						<span>RV6/SV2：1.555</span>
					</i-col>
					<i-col span="6">
						<p :class="{cur: zhenduan}">诊断：窦性心律</p>
					</i-col>
				</Row>
				
			</div>
			<div class="xd_pic">
				<img :src="xindian"/>
			</div>
		</div>
	</div>
</template>

<script>
	import xdNav from '@/components/xd_nav'
	import xindian from "@/assets/xindian.png"
	import top from '@/components/xd_top'
	export default{
		name: 'xdView',
		data(){
			return {
				xindian,
				zhenduan: false,
				model1:'bb'
			}
		},
		 components:{
		 	xdNav,
		 	top
		 },
		 mounted(){
		 	if(this.$route.query.i == 0){
		  		this.zhenduan = false
		  	}else{
		  		this.zhenduan = true
		  	}
		 }
	}
</script>

<style>
.xd_btn{
	background: #ddd;
	color: #333;
	padding: 6px;
}
	.view_main{
		padding: 10px;
		background: #fff;
	}
	.xd_pic{
		height: 300px;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.xd_pic img{
		height: 100%;
		width: auto;
	}
	.xd_info span{
		min-width: 20%;
		display: inline-block;
		padding-left: 5%;
		line-height: 20px;
	}
	.xd_info .ivu-col{
		border: solid 1px #bbb;
		height: 65px;
	}
	.xd_info p{
		padding: 6px;
	}
	.cur{	
		display: none;
		}
</style>