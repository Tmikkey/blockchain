<template>
  <div class="news">
    <Header />
    <CreateWallet />
    <h2 class="main-description">OUR CHOICE</h2>
    <div class="news-list">
      <NewsCard
        v-for="news in newst"
        :id="news.id"
        :key="news.id"
        :title="news.title"
        :name="news.author.name"
        :followers="news.author.followers"
        :following="news.author.following"
        :date="news.date"
        :image="news.image"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard/NewsCard'
import Header from '@/components/Header/Header'
import CreateWallet from '@/components/Wallet/CreateWallet'

import { mapGetters, mapActions, mapState } from 'vuex'
import { FETCH_NEWS_REQUEST, MODULE_NAME as NEWS } from '@/store/modules/profile'

export default {
  name: 'NewsPage',
  components: { NewsCard, Header, CreateWallet },
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
