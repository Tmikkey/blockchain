import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_ERROR, SET_PROPERTY } from '../mutations/types'
import { getDefaultRequestState } from '@/store/mutations/utils'

export const MODULE_NAME = 'profile'

export const FETCH_NEWS_REQUEST = `${MODULE_NAME}_FETCH_NEWS`
export const CHANGE_PASSWORD_REQUEST = `${MODULE_NAME}_CHANGE_PASSWORD`
export const CHANGE_INFO_REQUEST = `${MODULE_NAME}_CHANGE_INFO`

export default {
  state: {
    news: getDefaultRequestState({}),
  },
  actions: {
    [FETCH_NEWS_REQUEST]: ({ commit, getters }) => {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'news' })

      return getters.apiService
        .getNews()
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, { module: MODULE_NAME, key: 'news', data })
          return data
        })
        .catch(() => {
          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'news',
            error: 'Error fetching news',
          })
        })
    },
    [CHANGE_PASSWORD_REQUEST]: ({ commit, getters }, { email, password, newpassword }) => {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'change-password' })

      return getters.apiService
        .changePassword({ email, password, newpassword })
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, { module: MODULE_NAME, key: 'change-password', data })
        })
        .catch((e) => {
          const msg = (e.response && e.response.data && e.response.data.text) || e.message

          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'change-password',
            error: msg,
            hideToast: true,
          })

          throw e
        })
    },

    [CHANGE_INFO_REQUEST]: ({ commit, getters }, { email, name, currency }) => {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'changeInfo' })

      return getters.apiService
        .changeInfo(email, name, currency)
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, { module: MODULE_NAME, key: 'changeInfo', data })
          return data
        })
        .catch(() => {
          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'changeInfo',
            error: 'Error changin informations',
          })
        })
    },
    //
  },
}
