export const ACCESS_TOKEN_KEY = 'auth_access_token'
export const REFRESH_TOKEN_KEY = 'auth_refresh_token'
export const SPECIAL_PLAN_TOKEN_KEY = 'special_plan_token'
export const REFERRAL_TOKEN_KEY = 'referralId'

const GET_PROPERTY_KEY = (key) => `brotat_app[${key}]`

export default {
  getData(key) {
    const propertyKey = GET_PROPERTY_KEY(key)
    const jsonString = localStorage.getItem(propertyKey)

    let data

    try {
      console.log('json', jsonString)
      data = JSON.parse(jsonString)
    } catch (e) {
      console.error(e)
      this.removeData(key)
    }

    return data
  },

  saveData(key, data) {
    localStorage.setItem(GET_PROPERTY_KEY(key), JSON.stringify(data))
  },

  removeData(key) {
    localStorage.removeItem(GET_PROPERTY_KEY(key))
  },
  SPECIAL_PLAN_TOKEN_KEY,
  REFERRAL_TOKEN_KEY,
}
