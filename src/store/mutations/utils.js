import { FETCH_REQUEST, FETCH_REQUEST_ERROR, FETCH_REQUEST_SUCCESS } from './types'
import { MODULE_NAME } from '../modules/auth'

export function getDefaultRequestState(data = null) {
  return {
    loading: false,
    data,
    error: null,
  }
}

export function getStateProperty(state, ref) {
  if (!ref) {
    throw Error(`State ref empty: ${ref}`)
  }

  const path = Array.isArray(ref) ? ref : ref.split('.')
  let property = path.reduce((state, item) => {
    if (typeof state[item] === 'undefined') {
      return state
    }

    return state[item]
  }, state)

  if (property === state) {
    throw Error(`State property not found: ${ref}`)
  }

  return property
}
