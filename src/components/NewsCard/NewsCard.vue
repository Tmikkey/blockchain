<template>
  <router-link :to="{ path: '/news/' + id }" class="news_card">
    <div class="card">
      <div class="news__item">
        <div class="news__item__top">
          <icon class="news__item__top__image" data="@/assets/svg/news-logo.svg" alt="image" :original="true" />
          <p class="news__item__top__title">
            {{ name }}
            <br />
          </p>
        </div>
        <!-- <div
                    class="news__item__image"
                    :style="{ 'background-image': 'url(' + image + ')' }"
                ></div> -->
        <!-- <img class="news__item__image" src="@/assets/images/recomendations__back.png" alt="image" :original="true" /> -->
        <icon class="news__item__image" data="@/assets/svg/default-picture.svg" alt="image" :original="true" />
        <h3 class="news__item__title">
          {{ title }}
        </h3>

        <div class="news__item__bottom">
          <p class="news__item__bottom__date">{{ date }}</p>
          <p class="news__item__bottom__comments">
            <span
              ><icon class="news__item__bottom__icon-chat" data="@/assets/svg/chat.svg" alt="image" :original="true"
            /></span>
            {{ comments }} comments
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import AvatarView from '@/components/AvatarView/AvatarView'
export default {
  name: 'NewsCard',
  components: { AvatarView },
  props: {
    name: {
      type: String,
      default: '',
    },
    followers: {
      type: Number,
      default: null,
    },
    following: {
      type: Number,
      default: null,
    },
    date: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    comments: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
