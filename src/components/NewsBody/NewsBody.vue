<template>
  <div class="news-page">
    <div class="news__item__top">
      <!-- {{ id }} -->
      <icon class="news__item__top__image" data="@/assets/svg/news-logo.svg" alt="image" :original="true" />
      <p class="news__item__top__title">
        {{ news.author.name }}
        <br />
      </p>
    </div>
    <img class="news-page__image" src="@/assets/images/news-image.png" alt="image" :original="true" />
    <p class="news-page__date">{{ news[id].date }}</p>
    <h2 class="news-page__title">
      {{ news[id].title }}
    </h2>
    <p class="news-page__description">
      {{ news[id].text }}
    </p>
  </div>
</template>

<script>
import AvatarView from '@/components/AvatarView/AvatarView'
import { mapState } from 'vuex'
import { MODULE_NAME as NEWS } from '@/store/modules/profile'

export default {
  components: { AvatarView },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState({
      isFetchingNews: (state) => state[NEWS].news.loading,
      newsData: (state) => state[NEWS].news.data,
      newsError: (state) => state[NEWS].news.error,
    }),
  },
  //   mounted() {
  //     this.$store.dispatch(FETCH_NEWS_REQUEST)
  //   },

  props: {
    news: {
      type: Object,
      default() {
        return {
          author: {
            name: 'bcwallet.io',
            followers: 213,
            following: 389,
          },
          title:
            'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.',
          text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the.',
          date: '09:38, 20 september',
        }
      },
    },
    user: {
      type: Object,
      default() {
        return {
          notifications: {
            amount: 3,
          },
          name: 'John Dunkans',
        }
      },
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
