import { LOGOUT_REQUEST } from '../store/modules/auth'

export default {
  authInterceptor: null,
  $store: null,

  init($store) {
    this.$store = $store
  },

  mountAuthInterceptor(axiosInstance) {
    this.authInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        if (error.request.status === 401 && this.$store.state.auth.isAuthenticated) {
          this.$store.dispatch(LOGOUT_REQUEST).then(() => ({ data: {} }))
        }

        // if (error.response && error.response.status === 500 && error.config.url === '/v1/user/portal') {
        //   this.$store.dispatch(LOGOUT_REQUEST).then(() => ({ data: {} }))
        // }

        return Promise.reject(error)
      }
    )
  },

  unmountAuthInterceptor(axiosInstance) {
    axiosInstance.interceptors.response.eject(this.authInterceptor)
  },
}
