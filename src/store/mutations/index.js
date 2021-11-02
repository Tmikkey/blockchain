import Vue from 'vue'
import { getStateProperty } from './utils'
import * as types from './types'

export default {
  [types.SET_ERROR]: (state, error) => {
    state.error = error
  },
  [types.LOADING]: (state, name) => {
    const property = getStateProperty(state, name)
    property.loading = true
  },
  [types.LOADED]: (state, name) => {
    const property = getStateProperty(state, name)
    property.loading = false
  },
  [types.SET_LOCALE]: (state, locale) => {
    state.locale = locale
  },
  [types.SET_MODEL]: (state, { name, model }) => {
    const property = getStateProperty(state, name)
    Vue.set(property, 'model', model)
  },
  [types.UPDATE_MODEL]: (state, { name, model }) => {
    const property = getStateProperty(state, name)
    property.model = { ...property.model, ...model }
  },
  [types.SET_LIST]: (state, { name, list, key = 'list' }) => {
    const property = getStateProperty(state, name)
    Vue.set(property, key, list)
  },
  [types.ADD_LIST_ITEMS]: (state, { name, list, key = 'list' }) => {
    const property = getStateProperty(state, name)
    property[key] = property.list.concat(list)
  },
  [types.UPDATE_LIST_ITEM]: (state, { name, index, value, key = 'list' }) => {
    const property = getStateProperty(state, name)
    Object.assign(property[key][index], value)
  },
  [types.SET_PARAMS]: (state, { name, params }) => {
    const property = getStateProperty(state, name)
    Vue.set(property, 'params', params)
  },
  [types.UPDATE_PARAMS]: (state, { name, params }) => {
    const property = getStateProperty(state, name)
    property.params = { ...property.params, ...params }
  },
  [types.FETCH_REQUEST]: (state, { module, key }) => {
    const property = getStateProperty(state, module)
    Vue.set(property, key, {
      loading: true,
      data: null,
      error: null,
    })
  },
  [types.FETCH_REQUEST_SUCCESS]: (state, { module, key, data }) => {
    const property = getStateProperty(state, module)
    Vue.set(property, key, {
      loading: false,
      data,
      error: null,
    })
  },
  [types.FETCH_REQUEST_ERROR](state, { module, key, error, hideToast }) {
    const property = getStateProperty(state, module)
    Vue.set(property, key, {
      loading: false,
      data: null,
      error,
    })
    const { response } = error

    const e =
      (response && response.data && response.data.errors && response.data.errors.message) ||
      (response && response.data && response.data.message) ||
      (error && error.message) ||
      error

    // if (e && !hideToast) {
    //   this.commit(types.SHOW_TOAST, {
    //     variant: 'danger',
    //     message: e
    //   })
    // }

    throw error
  },
  [types.SET_PROPERTY](state, { module, property, value }) {
    console.log('moduleState', module, property, value, state)
    const moduleState = getStateProperty(state, module)
    Vue.set(moduleState, property, value)
  },
  [types.SHOW_TOAST](state, options = {}) {
    const o = {
      autoHideDelay: 5000,
      appendToast: true,
      // toaster: 'b-toaster-bottom-full toaster-wrapper',
      toaster: 'b-toaster-top-right toaster-wrapper',
      message: '',
      ...options,
    }

    // if (this.$app && this.$app.$bvToast) {
    //   this.$app.$bvToast.hide()
    //   this.$app.$bvToast.toast(o.message, o)
    // }
  },
}
