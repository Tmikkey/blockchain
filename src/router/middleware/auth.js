export default function auth(data) {
  const { next, store } = data
  console.log('middleware/auth', data)
  const { isAuthenticated } = store.state.auth

  // console.log('isProfileLoaded', isProfileLoaded, 'isAuthenticated', isAuthenticated, 'isloading', !store.state.profile.profile.loading)
  if (isAuthenticated) {
    // if (!store.state.profile.profile.data && !store.state.profile.profile.loading) {
    //   console.log('start', {...store.state.profile.profile})
    //   store.dispatch(FETCH_PROFILE)
    // }
    return next()
  }

  return next({ name: 'sign-in' })
}
