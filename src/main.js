import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './plugins/vue-svgicon.js'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import store from './store'
import router from './router'
import Interceptors from './helpers/interceptors'

Interceptors.init(store)

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { locale })
Vue.use(Vuex)

Vue.config.productionTip = false

store.$router = router

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
