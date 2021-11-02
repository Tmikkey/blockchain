import Vue from 'vue'
import Vuex from 'vuex'

import APIProvider from '../providers/api-provider'

import mutations from './mutations'
import modules from './modules'

// import createI18nPlugin from './plugins/i18n'

Vue.use(Vuex)

// const i18nPlugin = createI18nPlugin(i18n)

export default new Vuex.Store({
  state: {},
  getters: {
    apiService() {
      return APIProvider
    },
  },
  mutations,
  modules,
  // plugins: [i18nPlugin]
})
