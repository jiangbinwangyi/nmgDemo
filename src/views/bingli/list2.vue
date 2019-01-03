<template>
	<div>
		<top></top>
		
		<Tabs type="card">
	        <TabPane label="来自病理类科室">
	        	<Row class="" style="margin-bottom: 10px;" :gutter="10">
	        		<i-col span="4">
		        		<Select placeholder="会诊状态">
					        <Option value="">进行中</Option>
					        <Option value="">等待会诊</Option>
					        <Option value="">会诊完毕</Option>
					    </Select>
	        		</i-col>
				    <i-col span="4">
				    	<DatePicker type="date" placeholder="日期选择"></DatePicker>
				    </i-col>
				    <i-col span="10">&nbsp;</i-col>
				    <i-col span="6" style="text-align:right;">
				    	<Input>
					        <Select slot="prepend" style="width: 80px" placeholder="发起人">
					            <Option value="day">发起人</Option>
					            <Option value="month">接受人</Option>
					        </Select>
					        <Button slot="append" icon="ios-search" style="width: 30px;padding: 0;"></Button>
					    </Input>
				    </i-col>
	        	</Row>
	        	<Table border :columns="columns7" :data="data6"></Table>
				<Page :total="100" style="margin-top: 20px; float: right;" />
	        </TabPane>
	        <TabPane label="来自临床类科室" disabled></TabPane>
	        <TabPane label="来自医学影像类科室" disabled></TabPane>
	    </Tabs>
		
		
		
		<Modal :styles="{top: '20px',width: '820px'}"
	        v-model="modal1"
	        title="来自病理医生的会诊"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <div>
	        	<p>发起时间：2018-12-11<br>参与医生：刘医生</p>
	        	<p>&nbsp;</p>
				<img src="@/assets/bl.png"/>
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
                        title: '序号',
                        width: 55,
                        key: 'name',
                    },{
                        title: '发起人',
                        key: 'age',
                        width: 80,
                        sortable: true
                    },{
                        title: '发起机构',
                        key: 'address',
                        width: 90,
                        sortable: true
                    },{
                        title: '发起时间',
                        key: 'address1'
                    },{
                        title: '结束时间',
                        key: 'address2'
                    },{
                        title: '参与人数',
                         width: 70,
                        key: 'address3'
                    },{
                        title: '会诊意见',
                         width: 70,
                        key: 'address4'
                    },{
                        title: '会诊状态',
                        width: 70,
                        key: 'address5'
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
                                    	click:()=>{
                                    		this.modal1 = true;
                                    	}
                                    }
                                }, '查看'),
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
                        name: '1',
                        age: '病理医生',
                        address0: '盈谷医疗网络云医院',
                        address1: '2018-12-11',
                        address2: '2018-12-12',
                        address3: '2',
                        address4: '0',
                        address5: '进行中',
                    }
                ]
            }
        },
        components:{
        	top,
        },
        mounted(){
//      	for(let i=0; i<0; i++){
//      		this.data6.push(this.data6[0]);
//      	}
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
        		
        	},
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style type="text/css">
	#app .ivu-tabs-bar{
		margin: 0;
	}
	#app .ivu-tabs-content{
		padding: 10px;
		background: #fff;
		border: solid 1px #ddd;
		border-top: none;
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