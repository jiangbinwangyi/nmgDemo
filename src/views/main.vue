<template>
	<Layout>
		<Header>
			<div class="header-logo">
				<img :src="youeLogo" />
				<h1 v-text="title"></h1>
			</div>
			<div class="header-avatar">
				<Avatar icon="ios-person" :src="avatar" />
			</div>
		</Header>
		<Layout>
			 <Sider hide-trigger >
        		<Menu active-name="1-1-1f" accordion @on-select="iframe($event)" theme="dark" width="auto" :open-names="['1','1-1']">
        			<Submenu name="1">
	        			<template slot="title">
				            	互联网医疗惠民服务
	                    </template>
	                    <Submenu name="1-1">
		        			<template slot="title">
					            <Icon type="ios-medkit-outline" />预约挂号
		                    </template>
		                    <MenuItem name="1-1-1f" to="/iframe/view?u=hospital">
				            	预约挂号APP
				            </MenuItem>
				            <MenuItem name="1-1-2" to="/gh/overview">
				            	运营管理
				            </MenuItem>
	                    </Submenu>
	                    <Submenu name="1-2">
		        			<template slot="title">
					            <Icon type="ios-pulse-outline" />远程心电
		                    </template>
		                    <MenuItem name="1-2-1" to="/ecg/front">
				            	基层心电检查医生工作站
				            </MenuItem>
				            <MenuItem name="1-2-2" to="/ecg/list">
				            	远程心电诊断医生工作站
				            </MenuItem>
				            <MenuItem name="1-2-3" to="/ecg/chart">
				            	远程心电中心运营管理
				            </MenuItem>
	                    </Submenu>
	                    <Submenu name="1-3">
		        			<template slot="title">
					            <Icon type="ios-film-outline" />远程影像
		                    </template>
		                    <MenuItem name="1-3-1f" to="/video/front">
				            	基层影像检查医生工作站
				            </MenuItem>
				            <MenuItem name="1-3-2" to="/video/list/?t=iv">
				            	远程影像诊断医生工作站
				            </MenuItem>
				            <MenuItem name="1-3-3" to="/video/chart">
				            	远程影像中心运营管理
				            </MenuItem>
	                    </Submenu>
			            <!--<MenuItem name="1-4" to="/pathology/list/?t=bl">
			                <Icon type="ios-flask-outline" />远程病理
			            </MenuItem>-->
		            </Submenu>
		            <Submenu name="2">
		           		 <template slot="title">
				                        互联网医疗增值服务
	                    </template>
			            <MenuItem name="2-1" to="/video/list/?t=hz">
			                <Icon type="md-contacts" />多学科会诊
			            </MenuItem>
			            <Submenu name="2-2">
			           		 <template slot="title">
					            <Icon type="md-heart" />上门护理
		                    </template>
		                    <MenuItem name="2-2-1" to="/iframe/view?u=visit">
				                上门护理APP
				            </MenuItem>
				            <MenuItem name="2-2-2" to="/visit/list/">
				                运营管理
				            </MenuItem>
		                </Submenu>
		                <Submenu name="2-3">
			           		 <template slot="title">
					            <Icon type="md-woman" />护士陪诊
		                    </template>
		                    <MenuItem name="2-3-1" to="/iframe/view?u=order">
				                	护士陪诊APP
				            </MenuItem>
				            <MenuItem name="2-3-2" to="/order/list/">
				                运营管理
				            </MenuItem>
		                </Submenu> 
			            <MenuItem name="2-4">
			                <Icon type="ios-briefcase-outline" />药品配送
			            </MenuItem>
			            <MenuItem name="2-5">
			               <Icon type="md-clipboard" />智能诊断
			            </MenuItem>
		            </Submenu>
		        </Menu>
		    </Sider>
			<Content>
		        <router-view/>
			</Content>
		</Layout>
	</Layout>
</template>

<script>
	import youeLogo from '@/assets/youe-logo.png'
	import avatar from '@/assets/avatar.png'
	export default {
		name: 'Main',
		data(){
			return {
				youeLogo,
				avatar,
				title: "互联网医疗统一管理平台"
			}
		},
		mounted(){
		},
		methods:{
			iframe(url){
				if(url.indexOf('f')>-1){
					//1-1 预约挂号
					//1-2 心电
					//1-3 影像
					//2-2 护理
					//2-3 陪诊
				}
			}
		}
	}
</script>

<style lang="less">
	html,body{
		height: 100%;
	}
	#app{
		height: 100%;
	}
	.ivu-layout{
		height: 100%;
	}
	.ivew-menu{
		height: 100%;
	}
	.ivu-menu-item img{
			width: 14px;
			display: inline-block;
			vertical-align: middle;
			margin-right: 6px;
			line-height: 1;
			-webkit-font-smoothing:antialiased;
			text-rendering:auto;
			text-transform:none;
			font-variant:normal;
			speak: none;
		}
	#app .ivu-layout-header{
		padding: 0 10px;
		background: #fff;
	}
	.header-logo{
		height: 100%;
		display: inline-block;
		img{
			height: 70%;
			display: inline-block;
			vertical-align: middle;
			width: auto;
		}
		h1{
			display: inline-block;
			color: #2d80d1;
			vertical-align: middle;
			padding-left: 10px;
			font-size: 26px;
		}
	}
	.header-avatar{
		float: right;
		display: inline-block;
	}
	.ivu-layout-content{
		padding: 10px;
	}
	#app .ivu-menu-submenu .ivu-menu .ivu-menu-submenu .ivu-menu{
		background: #2a2f39; 
	}
	#app .ivu-table-cell{
		padding: 10px;
	}
</style>