import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import tao from '@/components/tao'
import only from '@/components/only'
import orderManage from '@/components/orderManage'
import member from '@/components/member'
import userProfit from '@/components/userProfit'
import details from '@/components/details'
import taobao from '@/components/taobao'
import smTicket from '@/components/smTicket'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/only',
      name: 'only',
      component: only,
      children:[
        {
          path: '/only/tao',
          name: 'tao',
          component: tao,
          children:[
            {       
              path: '/only/tao/orderManage',
              name: 'orderManage',
              component: orderManage,
              children:[
                {
                path: '/only/tao/orderManage/taobao',
                name: 'taobao',
                component: taobao
                },
                {
                path: '/only/tao/orderManage/smTicket',
                name: 'smTicket',
                component: smTicket
                }
              ]
            },
            {
              path: '/only/tao/member',
              name: 'member',
              component: member
            },
            {
              path: '/only/tao/userProfit',
              name: 'userProfit',
              component: userProfit
            }
          ]
        },
        {
          path: '/only/details',
          name: 'details',
          component: details
        }
      ]
    },
    {
          path: '*',
          redirect: '/only/tao/member'
    }

  ]
})
