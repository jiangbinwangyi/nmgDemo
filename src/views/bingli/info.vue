<template>
	<div>
		<top></top>
		<Table border :columns="columns7" :data="data6"></Table>
		<Page :total="100" style="margin-top: 20px; float: right;" />
		
		<Modal :styles="{top: '20px',width: '820px'}"
	        v-model="modal1"
	        title="查看影像"
	        @on-ok="ok"
	        @on-cancel="cancel">
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
	    
	    <Modal :styles="{top: '20px',width: '600px'}"
	        v-model="modal2"
	        title="填写会诊内容"
	        footer-hide
	        >
	        <div style="position: relative;overflow: hidden;">
	        	<div v-show="modal2Text=='下一步'">
			        <Form :model="formItem" :label-width="80">
				        <FormItem label="接收者类型">
				            <Select v-model="formItem.select">
				                <Option value="bjg">本机构接受者</Option>
				                <Option value="hzjg">合作机构接受者</Option>
				                <Option value="ysjt">医生集团接受者</Option>
				            </Select>
				        </FormItem>
				        <FormItem label="接收者">
				            <Select v-model="formItem.select2">
				                <Option value="beijing">放射科1</Option>
				                <Option value="shanghai">放射科2</Option>
				                <Option value="shenzhen">放射科3</Option>
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
						    </Upload>
				        </FormItem>
				    </Form>
	        	</div>
	        	
	        	<div v-show="modal2Text=='付款'">
					<div class="moneyInfo"><Icon type="md-alert" size="16" /> 您选择了付费专家会诊，请您先付款，付款完成后会诊即发送成功。</div>
	        		<div style="padding-top: 10px;">
	        			<div class="moneyTop"><span style="float: right;">合计：<strong>10元</strong></span>费用明细</div>
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
			    
			    <div style="text-align: right;">
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
	import top from '@/components/iv_top'
    export default {
        data () {
            return {
            	pay: '',
	            formItem:{
	            	textarea: '',
	            	date: '',
	            	select: '',
	            	select2: '',
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
                        name: '刘医生',
                        age: 'XX附属人民医院',
                        address: '放射科',
                        money: '10'
                    }
                ],
            	modal1: false,
            	modal2: false,
            	modal2Text: "下一步",
            	ivPic: two,
            	wd: '3D',
                columns7: [{
                        title: '姓名',
                        width: 55,
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
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.modal1 = true;
                                            this.wd = '2D';
        									this.ivPic = two;
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
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
                        name: '赵艳X',
                        age: '女',
                        address: '36岁',
                        address1: '待诊断',
                        address2: 'CT',
                        address3: '胸部',
                        address4: 'CT-胸部平扫',
                        address5: 'P105940383',
                        address6: '105940383',
                        address7: 'TX3438928',
                        address8: '36',
                        address9: '骨科1',
                    }
                ]
            }
        },
        components:{
        	top,
        },
        mounted(){
        	for(let i=0; i<7; i++){
        		this.data6.push(this.data6[0]);
        	}
        },
        methods: {
        	zwd(){
        		if(this.wd=="2D"){
        			this.wd = "3D";
        			this.ivPic = three;
        		}else{
        			this.wd = '2D';
        			this.ivPic = two;
        		}
        	},
        	ok(){},
        	cancel(){},
        	ok2(){
        		if(this.modal2Text=="下一步"){
        			this.modal2Text="付款"
        		}else{
        			this.modal2=false;
        			this.modal2Text="下一步";
        		}
        	},
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style type="text/css">
	#app .ivu-table-cell{
		padding: 10px;
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