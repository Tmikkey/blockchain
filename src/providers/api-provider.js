import axios from 'axios'
import Interceptors from '../helpers/interceptors'
import AuthStorageProvider from './auth-storage-provider'

class APIProvider {
  constructor(apiURL) {
    this.apiURL = apiURL

    this.client = axios.create({
      baseURL: apiURL,
      withCredentials: false,
      timeout: 180000,
    })

    const accessToken = AuthStorageProvider.getAccessToken()
    this.setAuthorizationHeader(accessToken)
    this.mountAuthInterceptor(this.client)
  }

  mountAuthInterceptor() {
    Interceptors.mountAuthInterceptor(this.client)
  }

  unmountAuthInterceptor() {
    Interceptors.unmountAuthInterceptor(this.client)
  }

  setCookie(name, value, options = {}) {
    options = {
      path: '/',
      ...options,
    }

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString()
    }

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey
      let optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue
      }
    }

    document.cookie = updatedCookie
  }

  deleteCookie(name) {
    this.setCookie(name, '', {
      'max-age': -1,
    })
  }

  setAuthorizationHeader(token) {
    if (token) {
      this.client.defaults.headers.common.Authorization = `Bearer ${token}`

      let domain
      const originURL = (document.location && document.location.host && document.location.host.split(':')[0]) || null

      if (originURL === 'localhost') {
        domain = originURL
      } else {
        domain = process.env.NODE_ENV === 'production' ? 'brotat.io' : 'testnet.brotat.io'
      }
      // console.log('domain', domain)
      //set cookie for landing interaction
      this.setCookie('access_brotat_token', token, {
        domain,
      })
    }
  }

  removeAuthorizationHeader() {
    delete this.client.defaults.headers.common.Authorization
    this.deleteCookie('access_brotat_token')
  }

  async confirmAccount({ token, firstname, lastname, password, phone }) {
    const response = await this.client.post('/auth/confirm', { token, firstname, lastname, password, phone })
    AuthStorageProvider.saveAccessToken(response.data.access_token)
    AuthStorageProvider.saveRefreshToken(response.data.refresh_token)

    this.setAuthorizationHeader(response.data.token)

    return response
  }

  async login({ email, password }) {
    const response = await this.client.post('/user/login', {
      username: email,
      password,
    })

    AuthStorageProvider.saveAccessToken(response.data.access_token)
    AuthStorageProvider.saveRefreshToken(response.data.refresh_token)

    this.setAuthorizationHeader(response.data.token)

    return response
  }

  async signup({ email, password }) {
    const response = await this.client.post('/user/register', {
      username: email,
      password,
    })

    // AuthStorageProvider.saveAccessToken(response.data.token)
    // AuthStorageProvider.saveRefreshToken(response.data.refresh_token)

    this.setAuthorizationHeader(response.data.token)

    return response
  }

  async logout() {
    AuthStorageProvider.removeAccessToken()
    AuthStorageProvider.removeRefreshToken()
    // this.unmountAuthInterceptor()
    this.removeAuthorizationHeader()
  }

  getNews(page = 1) {
    return axios.get('/news', {
      params: {
        page,
      },
    })
  }

  getComments() {
    return this.client.post('/user/news/comments')
  }

  resendEmail({ sid }) {
    return this.client.post('/user/resend_mail', {
      sid,
    })
  }

  activateEmail({ sid }) {
    return this.client.post(`/user/activate/${sid}`)
  }

  recoverPassword({ email }) {
    return this.client.post(`/user/restore/${email}`)
  }
  async changePassword({ email, password, newpassword }) {
    const response = await this.client.post('/user/restore', {
      username: email,
      password,
      newpassword,
    })

    this.setAuthorizationHeader(response.data.token)

    return response
  }

  changeInfo({ email, name, currency }) {
    return this.client.post(`/user/`)
  }
}
const BACKEND_API_URL = process.env.VUE_APP_BACKEND_URL ? `${process.env.VUE_APP_BACKEND_URL}/v2` : '/v2'
export default new APIProvider(BACKEND_API_URL)
