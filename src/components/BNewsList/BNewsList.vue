<template>
  <div class="b-news-list">
    <div v-for="(value, index) in news" :key="index" class="b-news-block">
      <b-news-card :news="value" />
    </div>
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script>
import BNewsCard from '@/components/BNewsCard/BNewsCard'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'BNewsList',
  components: { BNewsCard, InfiniteLoading },
  data() {
    return {
      page: 1,
      news: [],
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$store.getters.apiService.getNews(this.page).then(({ data }) => {
        if (data.news.length) {
          this.page += 1
          this.news.push(...data.news)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
