import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import notFound from './middleware/not-found'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    const { history } = window
    let position = { x: 0, y: 0 } // Scroll to top

    if (history.scrollRestoration === 'manual') {
      history.scrollRestoration = 'auto'
    }

    if (_savedPosition) {
      return _savedPosition
    } else if (_to.meta.dontScrollToTop) {
      position = {}
    }

    // Scroll to top
    if (position.x === 0 && position.y === 0) {
      history.scrollRestoration = 'manual'
    }

    return position
  },
})

export function createMiddlewarePipeline(context, middleware) {
  const nextMiddleware = middleware[0]
  const restMiddleware = middleware.slice(1)

  if (!nextMiddleware) {
    return context.next
  }

  return (redirectRoute) => {
    if (redirectRoute !== undefined) {
      context.next(redirectRoute)
    } else {
      const nextPipeline = createMiddlewarePipeline(context, restMiddleware)
      nextMiddleware({ ...context, next: nextPipeline })
    }
  }
}

router.beforeEach((to, from, next) => {
  const middleware = to.matched.reduce(
    (guards, matchedRoute) => {
      const routeGuards = matchedRoute.meta.middleware
        ? matchedRoute.meta.middleware.filter((someGuard) => !guards.includes(someGuard))
        : []

      return routeGuards.length ? [...guards, ...routeGuards] : guards
    },
    [notFound]
  )

  createMiddlewarePipeline(
    {
      to,
      from,
      next,
      store,
    },
    middleware
  )()
})

export default router
