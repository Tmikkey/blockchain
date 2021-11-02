<template>
  <div class="home">
    <Header />
    <h2 class="main-description">recomendation</h2>
    <div class="home__recomendations">
      <CryptoCard />
      <RecommendationCard v-for="news in newst" :id="news.id" :key="news.id" :title="news.title" :text="news.text" />
    </div>
  </div>
</template>

<script>
import RecommendationCard from '@/components/Home/RecommendationCard'
import CryptoCard from '@/components/Home/CryptoCard'

import Header from '@/components/Header/Header'
import { mapGetters, mapActions, mapState } from 'vuex'
import { FETCH_NEWS_REQUEST, MODULE_NAME as NEWS } from '@/store/modules/profile'

export default {
  name: 'NewsPage',
  components: { RecommendationCard, Header, CryptoCard },
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
          title: 'Bitcoin Breaks Key Resistance',
          text: '“There seems to be a shift in the sentiment in the market compared to a few months back," said hedge fund executive director Ulrik Lykke.',
          date: '234',
          image: '@/assets/images/recomendations__back.png',
        },
        {
          id: 2,
          author: {
            name: 'bcwallet.io',
            followers: 89,
            following: 23,
          },
          title: 'Crypto Exchange CoinDCX Hits Unicorn',
          text: 'Funding will go toward hiring efforts including doubling the exchange businesss team in the next six months to around 400 people.',
          date: '234',
        },
        {
          id: 3,
          author: {
            name: 'bcwallet.io',
            followers: 8966,
            following: 0,
          },
          title: 'Digital-Asset Funds Reach $50B Despite Outflows',
          text: 'Despite experiencing outflows for the fifth straight week, assets under management in digital funds hit their highest level since mid-May.',
          date: '234',
        },
        {
          id: 4,
          author: {
            name: 'bcwallet.io',
            followers: 89,
            following: 23,
          },
          title: 'NFTs Over DeFi: OpenSea Just Overtook Uniswap on Ethereum Usage',
          text: 'Blockchain data shows OpenSea is responsible for more gas consumption than Uniswap over the last few days.',
          date: '234',
        },
        {
          id: 5,
          author: {
            name: 'bcwallet.io',
            followers: 89,
            following: 23,
          },
          title: 'Ex-SEC Director Brett Redfearn Leaves Coinbase After 4 Months',
          text: 'America’s largest theater chain is leaning into crypto but did not specify what technology it would use to accept payments.',
          date: '234',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      isFetchingNews: (state) => state[NEWS].news.loading,
      newsData: (state) => state[NEWS].news.data,
      newsError: (state) => state[NEWS].news.error,
    }),
  },
  mounted() {
    this.$store.dispatch(FETCH_NEWS_REQUEST)
  },

  // computed: mapGetters(["allNews"]),
  // created() {
  //     this.fetchNews()
  // },
  // methods: {
  //     ...mapActions(['fetchNews'])
  // },
}
</script>

<style lang="scss">
@import 'style';
</style>
