import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import tao from '@/components/tao'
import main from '@/components/main'
import only from '@/components/only'
import orderManage from '@/components/orderManage'
import member from '@/components/member'

import userProfit from '@/components/userProfit'
import details from '@/components/details'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'main',
//       component: main
//     },
//     {
//       path: '/only',
//       name: 'only',
//       component: only,
//       children:[
//         {       
//           path: '/only/orderManage',
//           name: 'orderManage',
//           component: orderManage
//         },
//         {
//           path: '/only/member',
//           name: 'member',
//           component: member
//         }
//       ]
//     },
//     {
//           path: '/only/details',
//           name: 'details',
//           component: details
//    }
//   ]
// })
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
              component: orderManage
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
    path:'*',
    redirect:'/only/tao/member'
  }
  ]
})
