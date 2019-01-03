import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/main'
Vue.use(Router)

export default new Router({
//	mode: 'history',
//	base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/iframe/view',
      component: Main,
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: Main,
      children:[{
      	path: 'view',
      	name: 'view',
      	component: () => import('@/views/iframe.vue')
      }]
    },
    {
      path: '/order',
      name: 'peizhen',
      component: Main,
      children:[{
      	path: 'list',
      	name: 'pzlist',
      	component: () => import('@/views/peizhen/list.vue')
      },{
      	path: 'chart',
      	name: 'pzchart',
      	component: () => import('@/views/peizhen/chart.vue')
      }]
    },
    {
      path: '/visit',
      name: 'shangmen',
      component: Main,
      children:[{
      	path: 'list',
      	name: 'smlist',
      	component: () => import('@/views/shangmen/list.vue')
      },{
      	path: 'chart',
      	name: 'smchart',
      	component: () => import('@/views/shangmen/chart.vue')
      }]
    },
    {
      path: '/gh',
      name: 'guahao',
      component: Main,
      children: [{
      		path: 'overview',
		      name: 'overview',
		      component: () => import('@/views/weiyiGuahao/overview.vue')
      	},
      	{
      		 path: 'order',
		      name: 'order',
		      component: () => import('@/views/weiyiGuahao/order.vue')
      	},
      	{
      		 path: 'user',
		      name: 'user',
		      component: () => import('@/views/weiyiGuahao/user.vue')
      	}],
    },
    {
      path: '/ecg',
      name: 'xindian',
      component: Main,
      children: [{
      		path: 'list',
		      name: 'xdList',
		      component: () => import('@/views/xindian/list.vue')
      	},
      	{
      		 path: 'view',
		      name: 'xdView',
		      component: () => import('@/views/xindian/view.vue')
      	},
      	{
      		 path: 'test',
		      name: 'xdTest',
		      component: () => import('@/views/xindian/test.vue')
      	},
      	{
      		 path: 'chart',
		      name: 'xdChart',
		      component: () => import('@/views/xindian/chart.vue')
      	},
      	{
      		 path: 'front',
		      name: 'xdFront',
		      component: () => import('@/views/xindian/front.vue')
      	}],
    },{
      path: '/video',
      name: 'video',
      component: Main,
      children: [{
      		path: 'list',
		      name: 'ivList',
		      component: () => import('@/views/ImageVideo/list.vue')
      	},
      	{
      		 path: 'two',
		      name: 'ivTwo',
		      component: () => import('@/views/ImageVideo/two.vue')
      	},
      	{
      		 path: 'three',
		      name: 'ivThree',
		      component: () => import('@/views/ImageVideo/three.vue')
      	},
      	{
      		path: 'chart',
		      name: 'ivChart',
		      component: () => import('@/views/ImageVideo/chart.vue')
      	},
      	{
      		 path: 'front',
		      name: 'ivFront',
		      component: () => import('@/views/ImageVideo/front.vue')
      	}],
    },{
      path: '/pathology',
      name: 'pathology',
      component: Main,
      children: [{
      		path: 'list',
		      name: 'list',
		      component: () => import('@/views/bingli/list.vue')
      	},
      	{
      		 path: 'list2',
		      name: 'list2',
		      component: () => import('@/views/bingli/list2.vue')
      	},
      	{
      		 path: 'info',
		      name: 'info',
		      component: () => import('@/views/bingli/info.vue')
      	}],
    }
  ]
})
