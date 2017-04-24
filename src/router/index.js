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
import profitTao from '@/components/profitTao'
import withDrawals from '@/components/withDrawals'
import withDrawalsDetail from '@/components/withDrawalsDetail'



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
              component: userProfit,
              children:[
                  {
                    path: '/only/tao/userProfit/profitTao',
                    name: 'profitTao',
                    component: profitTao
                  }
              ]
            },
            {
              path: '/only/tao/withDrawals',
              name: 'withDrawals',
              component: withDrawals
            }
          ]
        },
        {
          path: '/only/details/:id',
          name: 'details',
          component: details
        },
         {
          path: '/only/withDrawalsDetail',
          name: 'withDrawalsDetail',
          component: withDrawalsDetail
        }
      ]
    },
    {
          path: '*',
          redirect: '/only/tao/member'
    }

  ]
})
