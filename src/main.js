// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import './assets/scss/global.scss'
import '../static/js/reset-rem'

Vue.use(Toast, {
  type: 'center',
  duration: 2500,
  wordWrap: false,
  width: 'auto'
})
Vue.config.productionTip = false
Vue.prototype.$baseUrl = './static/image/'
Vue.prototype.$version = '?v20181217'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
