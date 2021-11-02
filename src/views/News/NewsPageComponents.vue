<template>
  <div class="news">
    <Header />
    <div class="news-page">
      <NewsBody />
      <div class="news-page__comments">
        <h3 class="news-page__comments__title">{{ comments.amount }} comments</h3>
        <CommentInput />
        <div v-for="comment in comments" :key="comment.id" class="">
          <Comment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BNewsList from '@/components/BNewsList/BNewsList'
import Header from '@/components/Header/Header'
import Comment from '@/components/Comment/Comment'
import CommentInput from '@/components/Comment/CommentInput'
import NewsBody from '@/components/NewsBody/NewsBody'
import { mapState } from 'vuex'
import { MODULE_NAME as СOMMENTS } from '@/store/modules/comments'

export default {
  name: 'NewsPage',
  components: { BNewsList, Header, Comment, NewsBody, CommentInput },
  props: {
    comments: {
      type: Object,
      default() {
        return {
          amount: 1,
        }
      },
    },
  },
  computed: {
    commentsCount() {
      return this.store.state.comments.filter((id) => this.id).length
    },
    ...mapState({
      isFetchingComments: (state) => state[СOMMENTS].comments.loading,
      commentsData: (state) => state[СOMMENTS].comments.data,
      commentsError: (state) => state[СOMMENTS].comments.error,
    }),
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
