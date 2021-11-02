<template>
  <div class="page__header__right">
    <div class="page__search">
      <input id="" class="page__search__input" placeholder="Search" type="text" name="" />
      <icon class="page__search__icon" data="@/assets/svg/search.svg" alt="notifications" :original="true" />
    </div>
    <button class="page__notifications">
      <icon class="page__notifications__icon" data="@/assets/svg/bell.svg" alt="notifications" :original="true" />
      <span class="page__notifications__amount">3</span>
    </button>
    <router-link to="/" class="page__profile-link">
      <img class="page__profile-link__image" src="@/assets/svg/photo-profile.png" alt="profile" :original="true" />
      John Dunkan
    </router-link>
    <a class="page__logout-link" href="#" @click.prevent="logout"> Log out </a>
  </div>
</template>

<script>
import { LOGOUT_REQUEST } from '@/store/modules/auth'

export default {
  name: 'HeaderRight',
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT_REQUEST)
    },
  },
}
</script>
