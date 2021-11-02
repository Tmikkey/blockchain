<template>
  <div class="news">
    <Header />
    <!-- <Profile /> -->
    <!-- <CreateWallet /> -->
    <Popup />
  </div>
</template>

<script>
import Profile from '@/components/Profile/Profile'
import Header from '@/components/Header/Header'
import CreateWallet from '@/components/Wallet/CreateWallet'
import Popup from '@/components/Login/Popup'

export default {
  name: 'NewsPage',
  components: { Profile, Header, CreateWallet, Popup },
  data() {
    return {
      newst: [
        {
          id: 0,
          author: {
            name: 'bcwallet.io',
            followers: 123,
            following: 232,
          },
          title: 'There seems to be a shift in the sentiment in the market',
          text: 'Random text',
          date: '09:38, 20 september',
          image: '@/assets/images/recomendations__back.png',
        },
        {
          id: 2,
          author: {
            name: 'bcwallet.io',
            followers: 89,
            following: 23,
          },
          title: 'Funding will go toward hiring efforts including doubling the exchange businesss team',
          text: 'Random text',
          date: '09:38, 20 september',
        },
        {
          id: 3,
          author: {
            name: 'bcwallet.io',
            followers: 8966,
            following: 0,
          },
          title:
            'Despite experiencing outflows for the fifth straight week, assets under management in digital funds hit their highest',
          text: 'Random text',
          date: '09:38, 20 september',
        },
        {
          id: 4,
          author: {
            name: 'bcwallet.io',
            followers: 89,
            following: 23,
          },
          title: 'Lorem I',
          text: 'Random text',
          date: '234',
        },
        {
          id: 5,
          author: {
            name: 'bcwallet.io',
            followers: 89,
            following: 23,
          },
          title: 'Lorem I',
          text: 'Random text',
          date: '234',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
