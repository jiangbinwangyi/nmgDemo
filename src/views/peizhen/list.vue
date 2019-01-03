<template>
	<div class="xdList">
		<top title="护士陪诊服务运营管理" theUrl="order" theType="list"></top>
		<Table border :columns="columns1" :data="data1"></Table>
		<Page :total="100" style="margin-top: 20px; float: right;" />
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
                        title: '来源',
                        key: 'address6'
                    },
                    {
                        title: '就诊医院',
                        key: 'address61'
                    },
                    {
                        title: '就诊科室',
                        key: 'address63'
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
                    }
                ],
                data1: [
                    {
                        name: '1',
                        age: "2019-01-02 12:03",
                        address: '已支付',
                        address2: '王晓丽',
                        address3: '女',
                        address4: '53岁',
                        address5: '13443324552',
                        address6: '山西大同',
                        address61: '江苏省人民医院',
                        address63: '心内科',
                        address62: '张潇',
                        address7: '156元/次',
                    },{
                        name: '2',
                        age: "2019-01-02 08:13",
                        address: '已支付',
                        address2: '张军',
                        address3: '男',
                        address4: '73岁',
                        address5: '13699031341',
                        address6: '江苏南京',
                        address61: '江苏省肿瘤医院',
                        address63: '心外科',
                        address62: '胡靓宇',
                        address7: '408元/次',
                    },{
                        name: '3',
                        age: "2019-01-01 08:13",
                        address: '已完成',
                        address2: '周明神',
                        address3: '男',
                        address4: '27岁',
                        address5: '13812345678',
                        address6: '河北张家口',
                        address61: '南京总医院',
                        address63: '心外科',
                        address62: '李静',
                        address7: '286元/次',
                    },{
                        name: '4',
                        age: "2018-12-28 08:13",
                        address: '已完成',
                        address2: '吴申寒',
                        address3: '男',
                        address4: '43岁',
                        address5: '17609876544',
                        address6: '内蒙古赤峰',
                        address61: '江苏省人民医院',
                        address63: '眼科',
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
                        address6: '江苏苏州',
                        address61: '江苏省人民医院',
                        address63: '神经内科',
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
        }
	}
</script>

<style>
	
</style>