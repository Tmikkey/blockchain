import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_ERROR } from '../mutations/types'
import { getDefaultRequestState } from '@/store/mutations/utils'

export const MODULE_NAME = 'comments'

export const FETCH_NEWS_REQUEST = `${MODULE_NAME}_FETCH_NEWS`

export default {
  state: {
    comments: getDefaultRequestState({}),
  },
  actions: {
    [FETCH_NEWS_REQUEST]: ({ commit, getters }) => {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'comments' })

      return getters.apiService
        .getComments()
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, { module: MODULE_NAME, key: 'comments', data })
          return data
        })
        .catch(() => {
          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'comments',
            error: 'Error fetching comments',
          })
        })
    },
  },
}
