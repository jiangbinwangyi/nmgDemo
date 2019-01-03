<template>
	<div class="xdList">
		<top title="上门护理服务运营管理" theUrl="visit" theType="list"></top>
		<Table border :columns="columns1" :data="data1"></Table>
		<Page :total="100" style="margin-top: 20px; float: right;" />
		
		<Modal
	        v-model="modal1"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <p style="text-align: center; font-size: 18px;">是否确认审核通过</p>
	    </Modal>
	</div>
</template>

<script>
import top from '@/components/pz_top'
	export default{
		name: 'xdList',
		data () {
            return {
            	modal1: false,
            	sh: true,
                columns1: [
                    {
                        title: '序号',
                        width: 50,
                        key: 'name'
                    },
                    {
                        title: '订单时间',
                        width: 90,
                        key: 'age'
                    },
                    {
                        title: '订单状态',
                        width: 80,
                        key: 'address'
                    },
                    {
                        title: '患者姓名',
                        width: 70,
                        key: 'address2'
                    },
                    {
                        title: '性别',
                        width: 60,
                        key: 'address3'
                    },
                    {
                        title: '年龄',
                         width: 60,
                        key: 'address4'
                    },
                    {
                        title: '联系电话',
                        width: 100,
                        key: 'address5'
                    },
                    {
                        title: '服务地址',
                        key: 'address6'
                    },
                    {
                        title: '服务项目',
                        key: 'address61'
                    },
                    {
                        title: '接单护士',
                        width: 80,
                        key: 'address62'
                    },
                    {
                        title: '订单总价',
                        width: 80,
                        key: 'address7'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        disabled: params.row.address!='待审核',
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
                                }, '审核'),
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
                data1: [
                    {
                        name: '1',
                        age: "2019-01-02 12:03",
                        address: '待审核',
                        address2: '王晓丽',
                        address3: '女',
                        address4: '53岁',
                        address5: '13443324552',
                        address6: '江苏省徐州市...',
                        address61: '输液、普通换药',
                        address62: '',
                        address7: '348元/次',
                    },{
                        name: '2',
                        age: "2019-01-02 08:13",
                        address: '已接单',
                        address2: '张军',
                        address3: '男',
                        address4: '73岁',
                        address5: '13699031341',
                        address6: '江苏省南京市...',
                        address61: '吸痰、灌肠护理',
                        address62: '胡靓宇',
                        address7: '408元/次',
                    },{
                        name: '3',
                        age: "2019-01-01 08:13",
                        address: '已接单',
                        address2: '周明神',
                        address3: '男',
                        address4: '27岁',
                        address5: '13812345678',
                        address6: '江苏省盐城市...',
                        address61: '新生儿护理、产后护理',
                        address62: '李静',
                        address7: '888元/次',
                    },{
                        name: '4',
                        age: "2018-12-28 08:13",
                        address: '已完成',
                        address2: '吴申寒',
                        address3: '男',
                        address4: '43岁',
                        address5: '17609876544',
                        address6: '江苏省南京市...',
                        address61: '压疮护理、导尿',
                        address62: '张彤',
                        address7: '438元/次',
                    },{
                        name: '5',
                        age: "2018-12-25 08:13",
                        address: '已完成',
                        address2: '冯如林',
                        address3: '男',
                        address4: '63岁',
                        address5: '18809234578',
                        address6: '江苏省苏州市...',
                        address61: 'PICC换药',
                        address62: '王佳',
                        address7: '199元/次',
                    },
                ]
            }
        },
        components:{
        	top,
        },
        mounted(){
        },
        methods:{
        	ok(){
        		this.data1[0].address = '已接单';
        	},
        	cancel(){
        		this.modal = false;
        	}
        }
	}
</script>

<style>
	
</style>