import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_ERROR, SET_PROPERTY, SET_MODEL } from '../mutations/types'
import { getDefaultRequestState } from '@/store/mutations/utils'
import AuthStorageProvider from '@/providers/auth-storage-provider'

export const MODULE_NAME = 'auth'

export const SIGNIN_REQUEST = `${MODULE_NAME}_SIGNIN_REQUEST`
export const SIGNUP_REQUEST = `${MODULE_NAME}_SIGNUP_REQUEST`
export const LOGOUT_REQUEST = `${MODULE_NAME}_LOGOUT_REQUEST`
export const LOGOUT = `${MODULE_NAME}_LOGOUT`
export const RESEND_CONFIRM_EMAIL_REQUEST = `${MODULE_NAME}_RESEND_CONFIRM_EMAIL_REQUEST`
export const ACTIVATE_EMAIL_REQUEST = `${MODULE_NAME}_ACTIVATE_EMAIL_REQUEST`
export const RECOVER_PASSWORD_REQUEST = `${MODULE_NAME}_RECOVER_PASSWORD_REQUEST`

const accessToken = AuthStorageProvider.getAccessToken()

export default {
  state: {
    isAuthenticated: !!accessToken,
    login: getDefaultRequestState(null),
    signup: getDefaultRequestState({}),
    resendConfirmEmail: getDefaultRequestState({}),
    activateEmail: getDefaultRequestState({}),
    recoverPassword: getDefaultRequestState({}),
    changePasswordByToken: getDefaultRequestState({}),
    googleSignIn: getDefaultRequestState({}),
    emailByConfirmToken: getDefaultRequestState({}),
    emailByResetPasswordToken: getDefaultRequestState({}),
  },
  actions: {
    [SIGNIN_REQUEST]({ state, getters, commit, dispatch }, { email, password }) {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'login' })

      return getters.apiService
        .login({ email, password })
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, { module: MODULE_NAME, key: 'login', data })

          commit(SET_PROPERTY, {
            module: MODULE_NAME,
            property: 'isAuthenticated',
            value: true,
          })

          this.$router.push({ path: '/main' })
          // dispatch(FETCH_PROFILE)
        })
        .catch((e) => {
          const msg = (e.response && e.response.data && e.response.data.text) || e.message

          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'login',
            error: msg,
            hideToast: true,
          })

          throw e
        })
    },

    [SIGNUP_REQUEST]({ commit, getters }, { email, password }) {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'signup' })

      return getters.apiService
        .signup({ email, password })
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, {
            module: MODULE_NAME,
            key: 'signup',
            data: {
              ...data,
              email,
            },
          })
          return data
        })
        .catch((e) => {
          const msg = (e.response && e.response.data && e.response.data.text) || 'Signup request error'

          // this.$app.$bvToast.toast(msg, {
          //   autoHideDelay: 5000,
          //   appendToast: true,
          //   variant: 'danger',
          //   toaster: 'b-toaster-top-right toaster-wrapper b-toaster-auth',
          //   message: msg
          // })
          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'signup',
            error: msg,
            hideToast: true,
          })

          throw e
        })
    },

    [RESEND_CONFIRM_EMAIL_REQUEST]({ commit, getters }, { sid }) {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'resendConfirmEmail' })

      return getters.apiService
        .resendEmail({ sid })
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, {
            module: MODULE_NAME,
            key: 'resendConfirmEmail',
            data,
          })
        })
        .catch((e) => {
          const msg = (e.response && e.response.data && e.response.data.text) || 'Resend request error'

          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'resendConfirmEmail',
            error: msg,
            hideToast: true,
          })

          throw e
        })
    },

    [ACTIVATE_EMAIL_REQUEST]({ commit, getters }, { sid }) {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'activateEmail' })

      return getters.apiService
        .activateEmail({ sid })
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, {
            module: MODULE_NAME,
            key: 'activateEmail',
            data,
          })
        })
        .catch((e) => {
          const msg = (e.response && e.response.data && e.response.data.text) || 'Activate email request error'

          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'activateEmail',
            error: msg,
            hideToast: true,
          })

          throw e
        })
    },

    [RECOVER_PASSWORD_REQUEST]({ commit, getters }, { sid }) {
      commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'recoverPassword' })

      return getters.apiService
        .recoverPassword({ sid })
        .then(({ data }) => {
          commit(FETCH_REQUEST_SUCCESS, {
            module: MODULE_NAME,
            key: 'recoverPassword',
            data,
          })
        })
        .catch((e) => {
          const msg = (e.response && e.response.data && e.response.data.text) || 'Recover password request error'

          commit(FETCH_REQUEST_ERROR, {
            module: MODULE_NAME,
            key: 'recoverPassword',
            error: msg,
            hideToast: true,
          })

          throw e
        })
    },

    async [LOGOUT_REQUEST]({ state, getters, commit, dispatch }) {
      // commit(FETCH_REQUEST, { module: MODULE_NAME, key: 'signup' })

      return getters.apiService
        .logout()
        .then(() => {
          // dispatch(LOGOUT)

          commit(SET_PROPERTY, {
            module: MODULE_NAME,
            property: 'isAuthenticated',
            value: false,
          })

          this.$router.push({ name: 'sign-in' })
        })
        .catch((e) => {
          // const msg = e.response && e.response.data && e.response.data.message || e.message

          console.error(e)
          // commit(SET_MODEL, {
          //   name: MODULE_NAME,
          //   model: {
          //     ...state.model,
          //     logoutError: e.response && e.response.data,
          //     hideToast: true,
          //   }
          // })
        })
    },
  },
}
