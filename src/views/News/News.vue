<template>
  <div class="news">
    <div class="page__header">
      <h1 class="page__title">News</h1>
      <HeaderRight />
    </div>

    <div class="news__top-block">
      <div class="news__top-block__left">
        <h2 class="main-description">our choice</h2>
        <div class="news__top-block__list-icon">
          <icon class="news__top-block__icon" data="@/assets/svg/favorites.svg" alt="notifications" :original="true" />
          <icon class="news__top-block__icon" data="@/assets/svg/ball.svg" alt="notifications" :original="true" />
          <icon class="news__top-block__icon" data="@/assets/svg/spotify.svg" alt="notifications" :original="true" />
          <icon class="news__top-block__icon" data="@/assets/svg/netflix.svg" alt="notifications" :original="true" />
          <img
            class="news__top-block__icon"
            src="@/assets/images/news-profile.png"
            alt="notifications"
            :original="true"
          />
          <icon class="news__top-block__icon" data="@/assets/svg/google.svg" alt="notifications" :original="true" />
        </div>
      </div>
      <button class="news__top-block__add-wallet">
        Add wallet
        <span><icon data="@/assets/svg/plus-in-circle.svg" alt="plus" :original="true" /></span>
      </button>
    </div>

    <div class="row">
      <div class="col-4">
        <div class="news__item">
          <div class="news__item__top">
            <icon class="news__item__top__image" data="@/assets/svg/news-logo.svg" alt="image" :original="true" />
            <p class="news__item__top__title">
              bcwallet.io
              <br />
              <span class="news__item__top__title_grey">213 Followers / 389 Following</span>
            </p>
            <icon class="news__item__top__favorites" data="@/assets/svg/star.svg" alt="favorites" :original="true" />
          </div>

          <img class="news__item__image" src="@/assets/images/recomendations__back.png" alt="image" :original="true" />

          <h3 class="news__item__title">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
          </h3>

          <div class="news__item__bottom">
            <p class="news__item__bottom__date">09:38, 20 september</p>
            <p class="news__item__bottom__comments">
              <span
                ><icon class="news__item__bottom__icon-chat" data="@/assets/svg/chat.svg" alt="image" :original="true"
              /></span>
              322 comments
            </p>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="news__item">
          <div class="news__item__top">
            <icon class="news__item__top__image" data="@/assets/svg/news-logo.svg" alt="image" :original="true" />
            <p class="news__item__top__title">
              bcwallet.io
              <br />
              <span class="news__item__top__title_grey">213 Followers / 389 Following</span>
            </p>
            <icon class="news__item__top__favorites" data="@/assets/svg/star.svg" alt="favorites" :original="true" />
          </div>

          <img class="news__item__image" src="@/assets/images/recomendations__back.png" alt="image" :original="true" />

          <h3 class="news__item__title">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
          </h3>

          <div class="news__item__bottom">
            <p class="news__item__bottom__date">09:38, 20 september</p>
            <p class="news__item__bottom__comments">
              <span
                ><icon class="news__item__bottom__icon-chat" data="@/assets/svg/chat.svg" alt="image" :original="true"
              /></span>
              322 comments
            </p>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="news__item">
          <div class="news__item__top">
            <icon class="news__item__top__image" data="@/assets/svg/news-logo.svg" alt="image" :original="true" />
            <p class="news__item__top__title">
              bcwallet.io
              <br />
              <span class="news__item__top__title_grey">213 Followers / 389 Following</span>
            </p>
            <icon class="news__item__top__favorites" data="@/assets/svg/star.svg" alt="favorites" :original="true" />
          </div>

          <img class="news__item__image" src="@/assets/images/recomendations__back.png" alt="image" :original="true" />

          <h3 class="news__item__title">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
          </h3>

          <div class="news__item__bottom">
            <p class="news__item__bottom__date">09:38, 20 september</p>
            <p class="news__item__bottom__comments">
              <span
                ><icon class="news__item__bottom__icon-chat" data="@/assets/svg/chat.svg" alt="image" :original="true"
              /></span>
              322 comments
            </p>
          </div>
        </div>
      </div>
    </div>

    <b-news-list />
  </div>
</template>

<script>
import BNewsList from '@/components/BNewsList/BNewsList'
import { FETCH_NEWS_REQUEST, MODULE_NAME as PROFILE } from '@/store/modules/profile'
import HeaderRight from '@/views/_components/HeaderRight.vue'
import { mapState } from 'vuex'

export default {
  name: 'News',
  components: {
    BNewsList,
    HeaderRight,
  },
  computed: {
    ...mapState({
      isFetchingNews: (state) => state[PROFILE].news.loading,
      newsData: (state) => state[PROFILE].news.data,
      newsError: (state) => state[PROFILE].news.error,
    }),
  },
  mounted() {
    this.$store.dispatch(FETCH_NEWS_REQUEST)
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
