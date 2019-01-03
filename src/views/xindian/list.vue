<template>
	<div class="xdList">
		<top title="远程心电诊断医生工作站（无锡市人民医院远程心电诊断中心）"></top>
		<Table border :columns="columns1" :data="data1" @on-row-click="toView($event)"></Table>
		<Page :total="100" style="margin-top: 20px; float: right;" />
	</div>
</template>

<script>
import top from '@/components/xd_top'
	export default{
		name: 'xdList',
		data () {
            return {
                columns1: [
                    {
                        title: '检查ID',
                        width: 70,
                        key: 'name'
                    },
                    {
                        title: '申请单号',
                        width: 70,
                        key: 'age'
                    },
                    {
                        title: '病案号',
                        width: 60,
                        key: 'address'
                    },
                    {
                        title: '姓名',
                        width: 70,
                        key: 'address2'
                    },
                    {
                        title: '性别',
                        width: 50,
                        key: 'address3'
                    },
                    {
                        title: '出生日期',
                         width: 90,
                        key: 'address4'
                    },
                    {
                        title: '检查项目',
                        width: 100,
                        key: 'address5'
                    },
                    {
                        title: '检查时间',
                        key: 'address6'
                    },
                    {
                        title: '诊断时间',
                        key: 'address61'
                    },
                    {
                        title: '检查状态',
                        width: 70,
                        key: 'address62'
                    },
                    {
                        title: '申请医生',
                        width: 70,
                        key: 'address7'
                    },
                    {
                        title: '申请科室',
                        width: 70,
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
                                        marginRight: '5px'
                                    },
                                    on: {
                                    	click:()=>{
                                    		this.$router.push('/ecg/view/?i='+params.index);
                                    	}
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                    },
                                    on: {
                                    	click:()=>{
                                    		this.$Message.success('诊断成功')
                                    	}
                                    }
                                }, '诊断'),
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
                        name: '54523',
                        age: "TX5324",
                        address: '6433',
                        address2: '赵梦里',
                        address3: '女',
                        address4: '1997-06-14',
                        address5: '静息12导联',
                        address6: '2018-12-26 12:02:23',
                        address61: '2018-12-27 15:12:56',
                        address62: '已做诊断',
                        address7: '王医生',
                        address12: '心电图室',
                    },{
                        name: '58524',
                        age: "TX4353",
                        address: '4875',
                        address2: '王寒天',
                        address3: '男',
                        address4: '1966-11-07',
                        address5: '静息12导联',
                        address6: '2018-12-27 17:02:33',
                        address61: '暂无',
                        address62: '已做检查',
                        address7: '刘医生',
                        address12: '心电图室',
                    },{
                        name: '54562',
                        age: "TX2683",
                        address: '9754',
                        address2: '周明神',
                        address3: '男',
                        address4: '1978-07-09',
                        address5: '静息12导联',
                        address6: '2018-12-25 17:11:33',
                        address61: '暂无',
                        address62: '已做检查',
                        address7: '刘医生',
                        address12: '心电图室',
                    },{
                        name: '52357',
                        age: "TX8534",
                        address: '6344',
                        address2: '吴梦涵',
                        address3: '女',
                        address4: '1979-12-01',
                        address5: '静息12导联',
                        address6: '2018-12-27 15:02:33',
                        address61: '暂无',
                        address62: '已做检查',
                        address7: '王医生',
                        address12: '心电图室',
                    },{
                        name: '54457',
                        age: "TX8553",
                        address: '7544',
                        address2: '冯如林',
                        address3: '男',
                        address4: '1968-11-27',
                        address5: '静息12导联',
                        address6: '2018-12-27 17:02:33',
                        address61: '暂无',
                        address62: '已做检查',
                        address7: '王医生',
                        address12: '心电图室',
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
        	toView(){
        		
        	}
        }
	}
</script>

<style>
</style>