import LocalStorageProvider from './local-storage-provider'

export const ACCESS_TOKEN_KEY = 'auth_access_token'
export const REFRESH_TOKEN_KEY = 'auth_refresh_token'

const getCookiesObject = () => {
  return document.cookie
    .split(';')
    .filter((item) => item)
    .map((item) => item.trim())
    .reduce((acc, cookieAttr) => {
      const [name, value] = cookieAttr.split('=')
      acc[name] = value
      return acc
    }, {})
}

export default {
  saveAccessToken(token) {
    LocalStorageProvider.saveData(ACCESS_TOKEN_KEY, token)
  },

  saveRefreshToken(token) {
    LocalStorageProvider.saveData(REFRESH_TOKEN_KEY, token)
  },

  getAccessToken() {
    return LocalStorageProvider.getData(ACCESS_TOKEN_KEY)
  },

  getRefreshToken() {
    return LocalStorageProvider.getData(REFRESH_TOKEN_KEY)
  },

  removeAccessToken() {
    return LocalStorageProvider.removeData(ACCESS_TOKEN_KEY)
  },

  removeRefreshToken() {
    return LocalStorageProvider.removeData(REFRESH_TOKEN_KEY)
  },
}
