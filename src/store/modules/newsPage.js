import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_ERROR } from '../mutations/types'
import { getDefaultRequestState } from '@/store/mutations/utils'

export const MODULE_NAME = 'newsPage'

export const FETCH_NEWS_REQUEST = `${MODULE_NAME}_FETCH_NEWS`

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
  },
}
