<template>
	<div class="xdFront">
		<top title="基层心电检查医生工作站（无锡市锡山区港下镇卫生院）"></top>
		<xdForm action=""></xdForm>
		<div class="frontMain">
			<Table border :columns="columns1" :data="data1"></Table>
			<Page :total="100" style="margin-top: 20px; float: right;" />
		</div>
		
		<Modal
        v-model="modal1"
        title="远程心电查看"
        :styles="{top: '20px',width: '800px'}"
        @on-ok="ok"
        @on-cancel="cancel">
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
					</i-col>
					<i-col span="6">
						<p :class="{cur: zhenduan}">诊断：窦性心律</p>
					</i-col>
				</Row>
				
			</div>
			<div class="xd_pic">
				<img :src="xindian"/>
			</div>
	    </Modal>
	</div>
</template>

<script>
	import top from '@/components/xd_top'
	import xdForm from '@/components/xd_from'
	import xindian from "@/assets/xindian.png"
	export default{
		name: 'xdFront',
		data(){
			return {
			zhenduan: false,
			modal1: false,
			xindian,
columns1: [
                    {
                        title: '序号',
                        width: 60,
                        key: 'name'
                    },
                    {
                        title: '申请科室',
                        width: 90,
                        key: 'age'
                    },
                    {
                        title: 'HIS病人ID',
                        key: 'address'
                    },
                    {
                        title: '预约ID',
                        width: 90,
                        key: 'address2'
                    },
                    {
                        title: '申请时间',
                        width: 100,
                        key: 'address3'
                    },
                    {
                        title: '姓名',
                         width: 80,
                        key: 'address4'
                    },
                    {
                        title: '性别',
                        width: 70,
                        key: 'address5'
                    },
                    {
                        title: '出生日期',
                        key: 'address6'
                    },
                    {
                        title: '检查状态',
                        width: 90,
                        key: 'address7'
                    },
                    {
                        title: '检查项目',
                        width: 100,
                        key: 'address12'
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
                                        display: params.index == 0?'none':'inline-block'
                                    },
                                    on: {
                                    	click:()=>{
                                    		this.uploadSuccess()
                                    	}
                                    }
                                }, '上传'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                    	click:()=>{
                                    		this.modal1 = true;
                                    		if(params.index == 0){
                                    			this.zhenduan = false;
                                    		}else{
                                    			this.zhenduan = true;
                                    		}
                                    	}
                                    }
                                }, '查看'),
//                              h('Button', {
//                                  props: {
//                                      type: 'error',
//                                      size: 'small'
//                                  },
//                                  on: {
//                                      click: () => {
//                                          this.remove(params.index)
//                                      }
//                                  }
//                              }, '删除')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: '1',
                        age: "心电图室",
                        address: '11064342',
                        address2: '145753M',
                        address3: '2018-12-05',
                        address4: '赵英海',
                        address5: '男',
                        address6: '1974-11-27',
                        address7: '已做诊断',
                        address12: '静息12导联',
                    },
                    {
                        name: '2',
                        age: "心电图室",
                        address: '11063454',
                        address2: '197765M',
                        address3: '2018-12-04',
                        address4: '刘暗影',
                        address5: '女',
                        address6: '1987-12-24',
                        address7: '已做检查',
                        address12: '静息12导联',
                    },
                    {
                        name: '3',
                        age: "心电图室",
                        address: '11074324',
                        address2: '153552M',
                        address3: '2018-12-07',
                        address4: '毛天利',
                        address5: '男',
                        address6: '1968-05-16',
                        address7: '已做检查',
                        address12: '静息12导联',
                    },
                    {
                        name: '4',
                        age: "心电图室",
                        address: '11085432',
                        address2: '134532M',
                        address3: '2018-12-05',
                        address4: '沈天明',
                        address5: '男',
                        address6: '1964-12-27',
                        address7: '已做检查',
                        address12: '静息12导联',
                    },
                    {
                        name: '5',
                        age: "心电图室",
                        address: '11096754',
                        address2: '143533M',
                        address3: '2018-12-14',
                        address4: '孟友谊',
                        address5: '女',
                        address6: '1964-12-27',
                        address7: '已做检查',
                        address12: '静息12导联',
                    }
                ]
			}
		},
		 components:{
		 	top,
		 	xdForm
		 },
		 mounted(){
		 },
		 methods:{
		 	uploadSuccess(){
		 		 this.$Message.success('上传成功');
		 	},
		 	 ok () {
            },
            cancel () {
            }
		 }
	}
</script>

<style>
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
		height: 65px;
	}
	.xd_info p{
		padding: 6px;
	}
	.cur{
		display: none;
	}
</style>