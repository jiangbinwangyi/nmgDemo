<template>
	<div>
		<top @ivTitle='upTitle'></top>
		<Table border :columns="columns7" :data="data6"></Table>
		<Page :total="100" style="margin-top: 21px; float: right;" />
		
		<Modal class="iv_modal_warp" :class="{modalCur: zhenduan}" :styles="{top: '20px',width: '740px'}" v-model="modal1" footer-hide>
	        <div style="position: relative;overflow: hidden;">
		        <div class="iv_modal">
					<ul>
						<!--<li><router-link to="/video/list/"><Icon type="ios-arrow-back" /></li>-->
						<li @click="zwd()"><Icon type="md-refresh" /></li>
						<li><Icon type="ios-bluetooth" /></li>
						<li><Icon type="ios-body" /></li>
						<li><Icon type="md-bonfire" /></li>
						<li><Icon type="md-build" /></li>
						<li @click="zwd()"><strong v-text="wd"></strong></li>
						<li><Icon type="md-clipboard" /></li>
						<li><Icon type="ios-cog" /></li>
						<li><Icon type="md-construct" /></li>
					</ul>
				</div>
				<img style="display: inline-block; vertical-align: top;" :src="ivPic"/>
	        </div>
	    </Modal>
	    
	    <Modal :styles="{top: '20px',width: '1200px'}"
	        v-model="modal2"
	        title="多学科会诊"
	        @on-visible-change="close"
	        footer-hide
	        >
	        <div style="position: relative;overflow: hidden;">
	        	<div v-show="modal2Text=='下一步'" style="width: 600px;margin: 0 auto;">
			        <Form :model="formItem" :label-width="80">
				        <FormItem label="接收者类型">
				            <Select v-model="formItem.select">
				                <Option value="bjg">本机构接受者</Option>
				                <Option value="hzjg">合作机构接受者</Option>
				                <Option value="ysjt">医生集团接受者</Option>
				            </Select>
				        </FormItem>
				        <FormItem label="接收者">
				            <Select v-model="formItem.select2" multiple filterable>
				                <Option value="fs1">放射一科</Option>
				                <Option value="fs2">放射二科</Option>
				                <Option value="nk">内科</Option>
				                <Option value="wk">外科</Option>
				                <Option value="xxg">心血管科</Option>
				                <Option value="hyk">化验科</Option>
				                <Option value="wck">胃肠科</Option>
				                <Option value="xnk">心内科</Option>
				                <Option value="hxk">呼吸内科</Option>
				                <Option value="bcs">B超室</Option>
				            </Select>
				        </FormItem>
				        <FormItem label="结束时间">
				            <Row>
				                <Col span="6">
				                    <DatePicker type="date" placeholder="请设置会诊结束时间" v-model="formItem.date"></DatePicker>
				                </Col>
				                <Col span="1" style="text-align: center">-</Col>
				                <Col span="6">
				                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
				                </Col>
				            </Row>
				        </FormItem>
				        <FormItem label="会诊关注点">
				            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="例如：病例CT横断扫描、纤支镜、是否为隐形性肺癌。"></Input>
				        </FormItem>
				        <FormItem>
					        <Upload action="//jsonplaceholder.typicode.com/posts/">
						        <Button icon="ios-cloud-upload-outline">添加附件</Button>
						        <p style="color: #999;">支持的文件格式有jpg、jpeg、bmp、png、gif、txt、doc等。单个文件最大10M</p>
						    </Upload>
				        </FormItem>
				    </Form>
	        	</div>
	        	
	        	<div v-show="modal2Text=='付款'" style="width: 600px;margin: 0 auto;">
					<div class="moneyInfo"><Icon type="md-alert" size="16" /> 您选择了付费专家会诊，请您先付款，付款完成后会诊即发送成功。</div>
	        		<div style="padding-top: 10px;">
	        			<div class="moneyTop"><span style="float: right;">合计：<strong>2000元</strong></span>费用明细</div>
	        			<Table :columns="columns1" disabled-hover :data="moneyData"></Table>
	        		</div>
	        		<div style="padding-top: 10px;">
	        			<div class="moneyTop">请选择支付方式</div>
	        			<RadioGroup v-model="pay">
					        <Radio label="123">
					            <span style="vertical-align: middle; display: inline-block;"><img src="@/assets/pay1.png" alt="" /></span>
					        </Radio>
					        <Radio label="333">
					            <span style="vertical-align: middle; display: inline-block;"><img src="@/assets/pay2.png" alt="" /></span>
					        </Radio>
					    </RadioGroup>
	        		</div>
	        	</div>
	        	
	        	<div v-show="modal2Text=='确认'">
	        		<div class="jg_left">
	        			<strong><Icon type="md-person-add" /> 接入方</strong>
	        			<ul>
	        				<li title="视频已接入"><Avatar>放射</Avatar> 放射一科 <img :src="vc" style="vertical-align: middle;" width="16px" /></li>
	        				<li title="视频已接入"><Avatar>心外</Avatar> 心胸外科 <img :src="vc" style="vertical-align: middle;" width="16px"/></li>
	        				<li title="视频已接入"><Avatar>B超</Avatar> B超室 <img :src="vc" style="vertical-align: middle;" width="16px" /></li>
	        				<!--<li><Avatar>外科</Avatar> 脑外科</li>
	        				<li><Avatar>心脑</Avatar> 心脑外科</li>
	        				<li><Avatar>检验</Avatar> 检验一科</li>-->
	        			</ul>
	        		</div>
	        		<div class="jg_center">
	        			<img src="@/assets/ct.png" alt="" />
	        		</div>
	        		<div class="jg_right">
	        			<Button>影像诊断</Button>
	        			<Button>患者详情</Button>
	        			<Button>HIS 申请单</Button>
	        			<Button type="primary">历史记录</Button>
	        			<Button>痕迹对比</Button>
	        			<Button>典型病例</Button>
	        			<Button>个人病例</Button>
	        			<Button>关键对象</Button>
	        			<Button>导入科研</Button>
	        			<Button>通知患者</Button>
	        			<Button>电子病历</Button>
	        			<Button>备注【无】</Button>
	        			<Button>加入随访</Button>
	        		</div>
	        	</div>
			    
			    <div style="text-align: right;" v-show="modal2Text!='确认'">
				    <Button type="primary" @click="ok2" v-text="modal2Text"></Button>
				    <Button @click="modal2=false" style="margin-left: 8px">取消</Button>
			    </div>
	        </div>
	    </Modal>
	</div>
</template>
<script>
	import three from '@/assets/iv5.jpg'
	import two from '@/assets/iv1.jpg'
	import zhenduan from '@/assets/ct2.png'
	import top from '@/components/iv_top'
	import vc from '@/assets/vc.svg'
    export default {
        data () {
            return {
            	ivTitle: 'iv',
            	pay: '',
            	vc,
	            formItem:{
	            	textarea: '',
	            	date: '',
	            	select: 'bjg',
	            	select2: 'fs1',
	            },
            columns1: [
                    {
                        title: '专家',
                        key: 'name'
                    },
                    {
                        title: '医生集团',
                        key: 'age'
                    },
                    {
                        title: '科室',
                        key: 'address'
                    },
                    {
                        title: '费用',
                        key: 'money'
                    }
                ],
                moneyData: [
                    {
                        name: '刘映红',
                        age: '长治市人民医院',
                        address: '心胸外科',
                        money: '2000'
                    }
                ],
            	modal1: false,
            	modal2: false,
            	modal2Text: "下一步",
            	ivPic: two,
            	wd: '3D',
            	zhenduan: false,
                columns7: [{
                        title: '姓名',
                        width: 60,
                        key: 'name',
                    },{
                        title: '性别',
                        key: 'age',
                        width: 65,
                        sortable: true
                    },{
                        title: '年龄',
                        key: 'address',
                        width: 65,
                        sortable: true
                    },{
                        title: '医疗状态',
                        width: 70,
                        key: 'address1'
                    },{
                        title: '检查类型',
                         width: 70,
                        key: 'address2'
                    },{
                        title: '检查部位',
                         width: 70,
                        key: 'address3'
                    },{
                        title: '检查项目',
                        key: 'address4'
                    },{
                        title: '影像号',
                        key: 'address5'
                    },{
                        title: '检查号',
                        key: 'address6'
                    },{
                        title: '来源编号',
                        key: 'address7'
                    },{
                        title: '扫描类型',
                         width: 70,
                        key: 'address8'
                    },{
                        title: '申请科室',
                         width: 70,
                        key: 'address9'
                    },{
                        title: '操作',
                        key: 'action',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: this.ivTitle=='iv' ? 'inline-block' : 'none'
                                    },
                                    on: {
                                        click: () => {
                                            this.modal1 = true;
                                            this.wd = '3D';
                                            if(params.index==0){
                                            	this.ivPic=zhenduan
                                            	this.zhenduan= true;
                                            }else{
                                            	this.ivPic=two;
                                            	this.zhenduan= false;
                                            }
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        disabled: params.index==0,
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: this.ivTitle!='iv' ? 'inline-block' : 'none'
                                    },
                                    on: {
                                        click: () => {
                                            this.modal2 = true;
                                        }
                                    }
                                }, '会诊'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '赵艳奇',
                        age: '女',
                        address: '69岁',
                        address1: '已诊断',
                        address2: 'CT',
                        address3: '胸部',
                        address4: 'CT-胸部平扫',
                        address5: 'P1045334',
                        address6: '1059403',
                        address7: 'TX34389',
                        address8: '36',
                        address9: '核医学科',
                    },{
                        name: '李春兰',
                        age: '女',
                        address: '36岁',
                        address1: '待诊断',
                        address2: 'CT',
                        address3: '头部',
                        address4: 'CT-头部平扫',
                        address5: 'P1067345',
                        address6: '1056563',
                        address7: 'TX45435',
                        address8: '36',
                        address9: '核医学科',
                    },{
                        name: '王龙林',
                        age: '男',
                        address: '47岁',
                        address1: '待诊断',
                        address2: 'CT',
                        address3: '头部',
                        address4: 'CT-头部平扫',
                        address5: 'P1057645',
                        address6: '1046534',
                        address7: 'TX64432',
                        address8: '36',
                        address9: '核医学科',
                    },{
                        name: '刘岚平',
                        age: '男',
                        address: '52岁',
                        address1: '待诊断',
                        address2: 'CT',
                        address3: '胸部',
                        address4: 'CT-胸部平扫',
                        address5: 'P1084545',
                        address6: '1053249',
                        address7: 'TX56744',
                        address8: '36',
                        address9: '核医学科',
                    },{
                        name: '周立波',
                        age: '男',
                        address: '66岁',
                        address1: '待诊断',
                        address2: 'CT',
                        address3: '胸部',
                        address4: 'CT-胸部平扫',
                        address5: 'P1078555',
                        address6: '1043545',
                        address7: 'TX43545',
                        address8: '36',
                        address9: '核医学科',
                    },{
                        name: '将春寒',
                        age: '男',
                        address: '48岁',
                        address1: '待诊断',
                        address2: 'CT',
                        address3: '头部',
                        address4: 'CT-头部平扫',
                        address5: 'P1047569',
                        address6: '1054545',
                        address7: 'TX43543',
                        address8: '36',
                        address9: '核医学科',
                    }
                ]
            }
        },
        components:{
        	top,
        },
        mounted(){
        	console.dir(this.vc);
        },
        methods: {
        	upTitle(e){
        		this.ivTitle = e;
        	},
        	zwd(){
        		if(this.wd=="2D"){
        			this.wd = "3D";
        			this.ivPic = two;
        		}else{
        			this.wd = '2D';
        			this.ivPic = three;
        		}
        	},
        	ok(){},
        	cancel(){},
        	close(){
        		if(this.modal2==false){
        			this.modal2Text="下一步";
        		}
        	},
        	ok2(){
        		if(this.modal2Text=="下一步"){
        			this.modal2Text="付款"
        		}else if(this.modal2Text=="付款"){
        			this.modal2Text="确认";
        			this.$Message.success('付款成功。查看诊断结果')
        		}else{
        			this.modal2Text="下一步";
        			this.modal2=false;
        		}
        	},
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style type="text/css">
	.jg_left{
		background: #666;
		display: inline-block;
		padding: 15px;
		color: #fff;
		height: 666px;
		vertical-align: top;
	}
	.jg_left strong{
		font-size: 14px;
		text-align: center;
		margin-bottom: 10px;
		display: block;
	}
	.jg_left .ivu-avatar{
		background: #146CC4;
	}
	.jg_left li{
		padding: 10px 0;
		list-style: none;
		cursor: pointer;
	}
	.jg_center{
		background: #eee;
		text-align: center;
		padding: 20px;
		display: inline-block;
		width: 780px;
		height: 666px;
		vertical-align: top;
	}
	.jg_right{
		background: #666;
		padding: 2%;
		display: inline-block;
		width: 250px;
		height: 666px;
		vertical-align: top;
	}
	.jg_right .ivu-btn{
		width: 40%;
		margin: 3% 5%;
		padding: 5px 0 6px;
	}
	.moneyTop{
		line-height: 40px;
	}
	.iv_modal{
		display: inline-block;
		vertical-align: top;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
	}
	.iv_modal_warp.modalCur .iv_modal{
		display: none;		
	}
	.iv_modal_warp .ivu-modal-body{
		padding:0;
	}
	.iv_modal_warp.ivu-modal-close .ivu-icon-ios-close{
		color: #fff;
	}
	.iv_modal_warp.modalCur .ivu-modal-body{
		text-align: center;
	}
	.iv_modal ul{
		background: #3a4146;
		height: 100%;
		color: #fff;
	}
	.iv_modal li{
		display: block;
		padding: 8px 10px;
		font-size: 14px;
		cursor: pointer;
		-webkit-user-select: none;
	}
	.moneyInfo{
		line-height: 40px;
		font-size: 14px;
		background: #2D80D1;
		text-align: center;
		color: #fff;
	}
</style>