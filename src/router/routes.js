import Layout from '@/views/Layouts/Layout'
import Main from '@/views/Main/Main'
import News from '@/views/News/News'
import NewsComponents from '@/views/News/NewsComponents'
import NewsPage from '@/views/News/NewsPage'
import NewsPageComponents from '@/views/News/NewsPageComponents'
import Wallet from '@/views/Wallet/Wallet'
import WalletPage from '@/views/Wallet/WalletPage'
import AddWallet from '@/views/Wallet/AddWallet'
import EditWallet from '@/views/Wallet/EditWallet'
import Exchange from '@/views/Exchange/Exchange'
import Invest from '@/views/Invest/Invest'
import Auth from '@/views/Layouts/Auth'
import SignIn from '@/views/Sign/SignIn'
import SignUp from '@/views/Sign/SignUp'
import RecoverPassword from '@/views/Sign/RecoverPassword'
import NotFound from '@/views/NotFound/NotFound'
import MainComponents from '@/views/Main/MainComponents'
import Profile from '@/views/Profile/Profile'

import auth from './middleware/auth'

// import NewsPage from '@/views/NewsPage/NewsPage';
export const routes = [
  {
    name: 'layout',
    path: '/',
    component: Layout,
    meta: {
      // middleware: [auth],
    },
    children: [
      {
        name: 'main',
        path: '/main',
        component: MainComponents,
      },
      {
        name: 'news',
        path: '/news',
        component: News,
      },
      {
        name: 'news',
        path: '/news/:id',
        component: NewsPageComponents,
      },
      {
        name: 'newscomponents',
        path: '/newst',
        component: NewsComponents,
      },
      {
        name: 'news-page',
        path: '/news-page',
        component: NewsPageComponents,
      },
      {
        name: 'wallet',
        path: '/wallet',
        component: Wallet,
      },
      {
        name: 'wallet-page',
        path: '/wallet-page',
        component: WalletPage,
      },
      {
        name: 'add-wallet',
        path: '/add-wallet',
        component: AddWallet,
      },
      {
        name: 'edit-wallet',
        path: '/edit-wallet',
        component: EditWallet,
      },
      {
        name: 'exchange',
        path: '/exchange',
        component: Exchange,
      },
      {
        name: 'invest',
        path: '/invest',
        component: Invest,
      },
      {
        name: 'settings',
        path: '/profile',
        component: Profile,
      },
    ],
  },
  {
    name: 'layout',
    path: '/',
    component: Auth,
    children: [
      {
        name: 'sign-in',
        path: '/sign-in',
        component: SignIn,
      },
      {
        name: 'sign-up',
        path: '/sign-up',
        component: SignUp,
      },
      {
        name: 'recover-password',
        path: '/recover-password',
        component: RecoverPassword,
      },
    ],
  },
  {
    name: 'not-found',
    path: '/not-found',
    component: NotFound,
  },
]
