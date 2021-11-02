<template>
  <div class="bnews_card">
    <div class="bnews_card__head">
      <div class="bnews_card__image">
        <img v-if="news.img" :src="news.img[0][0]" />
      </div>
      <div class="bnews_card__author">
        <div class="author">
          <avatar-view class="author__image" :title="news.source" />
          <div class="author__content">
            <a :href="news.link" target="_blank" class="author__header">{{ news.source }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bnews_card__body">
      <p class="bnews_card__title">
        {{ news.title }}
      </p>
      <p class="bnews_card__text">
        {{ news.text[0] }}
      </p>
    </div>
    <div class="bnews_card__foot">
      <router-link to="/" />
      <span class="bnews_card__link">Read more</span>
    </div>
    <div class="bnews_card__border" />
  </div>
</template>

<script>
import AvatarView from '@/components/AvatarView/AvatarView'
export default {
  components: { AvatarView },
  props: {
    news: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    console.log('this', this.news)
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
