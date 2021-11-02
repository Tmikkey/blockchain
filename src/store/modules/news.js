// import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_ERROR, SET_PROPERTY, SET_MODEL } from '../mutations/types'
// import { getDefaultRequestState } from '@/store/mutations/utils'

// export const MODULE_NAME = 'news'

// export const FETCH_NEWS_REQUEST = `${MODULE_NAME}_FETCH_NEWS`

// export default {
//     actions:{
//         async fetchNews({ commit }) {
//             try {
//                 const news = await this.$axios.$get(`/news`)
//                 commit('SET_NEWS', news.data)
//             } catch (e) {
//                 throw new Error(`Ошибка получения новостей: ${JSON.stringify(e)}`)
//             }
//             // const response = await this.client.post('/auth/')
//         },
//         [FETCH_NEWS_REQUEST]: ({ commit, getters }) => {
//             commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'news' })
      
//             return getters.apiService
//               .getNews()
//               .then(({ data }) => {
//                 commit(FETCH_REQUEST_SUCCESS, { module: MODULE_NAME, key: 'news', data })
//                 return data
//               })
//               .catch(() => {
//                 commit(FETCH_REQUEST_ERROR, {
//                   module: MODULE_NAME,
//                   key: 'news',
//                   error: 'Error fetching news',
//                 })
//               })
//           },
//     },
//     mutations: {
//         // SET_NEWS(state, payload) {
//         //     state.news = payload
//         // },
//     },
//     state: {
//         // news: [],
//         news: getDefaultRequestState({}),
//     },
//     // getters: {
//     //     allNews(state) {
//     //         return state.news
//     //     }
//     // },
// }