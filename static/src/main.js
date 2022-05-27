import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Constant from "@/assets/javascript/Constant"
import fileMaintain from "@/assets/javascript/fileMaintain"
import "@/assets/css/globalContainer.css"

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.constant = Constant
Vue.prototype.fileMaintain = fileMaintain.fileMethods

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
