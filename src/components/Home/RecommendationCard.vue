<template>
  <router-link :to="{ path: '/news/' + id }">
    <div class="home__recomendations__row">
      <div class="recomendation-card">
        <div class="home__recomendations__item">
          <img class="home__recomendations__image" src="@/assets/images/recomendations__back.png" alt="back" />
          <p class="home__recomendations__title">{{ title }}</p>
          <p class="home__recomendations__description">{{ text }}</p>
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
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
