<template>
	<div class="xdFront">
		<top title="基层心电检查医生工作站（长治市襄垣县乡镇卫生院）"></top>
		<xdForm action=""></xdForm>
		<div class="frontMain">
			<Table border :columns="columns1" :data="data1"></Table>
			<Page :total="100" style="margin-top: 20px; float: right;" />
		</div>
		
		<Modal
        v-model="modal1"
        :styles="{top: '20px',width: '830px',textAlign: 'center'}"
        footer-hide
        >
				<img :src="two"/>
	    </Modal>
	</div>
</template>

<script>
	import top from '@/components/xd_top'
	import xdForm from '@/components/xd_from'
	import two from '@/assets/iv1.jpg'
	import zhenduan from '@/assets/ct2.png'
	export default{
		name: 'xdFront',
		data(){
			return {
			zhenduan: false,
			modal1: false,
			two,
			columns1: [
                    {
                        title: '序号',
                        width: 60,
                        key: 'name'
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
                                    			this.two = zhenduan;
                                    		}else{
                                    			this.zhenduan = true;
                                    			this.two = two;
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
                        address: '11034536',
                        address2: '236426M',
                        address3: '2018-12-14',
                        address4: '赵英分',
                        address5: '男',
                        address6: '1964-12-27',
                        address7: '已做诊断',
                        address12: 'CT检查',
                    },
                    {
                        name: '2',
                        address: '11034564',
                        address2: '434542M',
                        address3: '2018-12-08',
                        address4: '孟凡奇',
                        address5: '男',
                        address6: '1967-10-01',
                        address7: '已做检查',
                        address12: 'CT检查',
                    },
                    {
                        name: '3',
                        address: '11074523',
                        address2: '435433M',
                        address3: '2018-12-09',
                        address4: '陈海霞',
                        address5: '女',
                        address6: '1961-10-21',
                        address7: '已做检查',
                        address12: 'CT检查',
                    },
                    {
                        name: '4',
                        address: '11064522',
                        address2: '181224M',
                        address3: '2018-12-11',
                        address4: '周英丽',
                        address5: '女',
                        address6: '1988-11-17',
                        address7: '已做检查',
                        address12: 'CT检查',
                    },
                    {
                        name: '5',
                        address: '11023643',
                        address2: '454345M',
                        address3: '2018-12-12',
                        address4: '蒋梦林',
                        address5: '男',
                        address6: '1974-08-16',
                        address7: '已做检查',
                        address12: 'CT检查',
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
	.iv_modal_warp .ivu-modal-body{
		padding:0;
	}
</style>