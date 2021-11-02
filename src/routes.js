import Layout from '@/views/Layouts/Layout'
import Main from '@/views/Main/Main'
import News from '@/views/News/News'
import NewsPage from '@/views/News/NewsPage'
import NewsPageComponents from '@/views/News/NewsPageComponents'
import NewsComponents from '@/views/News/NewsComponents'

import Wallet from '@/views/Wallet/Wallet'
import WalletPage from '@/views/Wallet/WalletPage'
import AddWallet from '@/views/Wallet/AddWallet'
import EditWallet from '@/views/Wallet/EditWallet'
import Exchange from '@/views/Exchange/Exchange'
import Invest from '@/views/Invest/Invest'
// import NewsPage from '@/views/NewsPage/NewsPage';
export const routes = [
  {
    name: 'layout',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'main',
        path: '/main',
        component: Main,
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
        component: NewsPage,
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
    ],
  },
]
