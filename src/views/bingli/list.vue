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
	        	<div>
			        <Form :model="formItem" :label-width="80">
				        <FormItem label="接收者类型">
				            <Select v-model="formItem.select">
				                <Option value="bjg">本机构接受者</Option>
				                <Option value="hzjg">合作机构接受者</Option>
				            </Select>
				        </FormItem>
				        <FormItem label="接收者">
				            <Select v-model="formItem.select2">
				                <Option value="beijing">王XX 放射科1</Option>
				                <Option value="shanghai">韩XX 放射科2</Option>
				                <Option value="shenzhen">齐XX 放射科3</Option>
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
				        <FormItem>
					        <Upload action="//jsonplaceholder.typicode.com/posts/">
						        <Button icon="ios-cloud-upload-outline">上传玻片</Button>
						        <p style="color: #999;">支持的文件格式有svs、tif、ndpi、kfd等。单个文件最大10M</p>
						    </Upload>
				        </FormItem>
				    </Form>
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
            	modal2Text: "上传并发起",
            	ivPic: two,
            	wd: '3D',
                columns7: [{
                        title: '序号',
                        width: 55,
                        key: 'name',
                    },{
                        title: '病理号',
                        key: 'age',
                        sortable: true
                    },{
                        title: 'HIS ID',
                        key: 'address',
                        sortable: true
                    },{
                        title: '姓名',
                        width: 70,
                        key: 'address1'
                    },{
                        title: '性别',
                         width: 70,
                        key: 'address2'
                    },{
                        title: '年龄',
                         width: 70,
                        key: 'address3'
                    },{
                        title: '检查状态',
                        width: 70,
                        key: 'address4'
                    },{
                        title: '标本类型',
                        width: 70,
                        key: 'address5'
                    },{
                        title: '标本名称',
                        width: 70,
                        key: 'address6'
                    },{
                        title: '锁定医生',
                        width: 70,
                        key: 'address7'
                    },{
                        title: '锁定时间',
                         width: 90,
                        key: 'address8'
                    },{
                        title: '玻片数',
                         width: 60,
                        key: 'address9'
                    },{
                        title: '操作',
                        key: 'action',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
//                              h('Button', {
//                                  props: {
//                                      type: 'primary',
//                                      size: 'small'
//                                  },
//                                  style: {
//                                      marginRight: '5px'
//                                  },
//                                  on: {
//                                      click: () => {
//                                          this.modal1 = true;
//                                          this.wd = '2D';
//      									this.ivPic = two;
//                                      }
//                                  }
//                              }, '查看'),
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
                                }, '病理诊断'),
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
                        age: '1080393',
                        address: 'DX34394',
                        address1: '王福X',
                        address2: '男',
                        address3: '56岁',
                        address4: '诊断中',
                        address5: '特殊染色',
                        address6: '空腔',
                        address7: '病理医生',
                        address8: '2018-12-11',
                        address9: '2',
                    }
                ]
            }
        },
        components:{
        	top,
        },
        mounted(){
        	for(let i=0; i<5; i++){
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
        		this.$Message.success('上传成功，请查看。');
        		this.modal2 = false;
        		this.$router.push('../list2/?t=bl');
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