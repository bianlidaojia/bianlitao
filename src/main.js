// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./assets/css/main.css"
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
// var router = new router()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// router.map({
//   //默认指向index
//   '/':{
//     name:'index',
//     component:Index,
//     //子路由(有页底)
//     subRoutes:{
//       '/home':{
//         name:'home',
//         component:Home
//       },
//       '/account':{
//         name:'account',
//         component:Account
//       }
//     }
//   },
//   //没有footer
//   '/list':{
//     name:'list',
//     component:list
//   }
// })
// //启动一个启用了路由的应用
// router.start(App,'app')