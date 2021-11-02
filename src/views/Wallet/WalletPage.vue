<template>
  <div class="wallet">
    <div class="page__header">
      <h1 class="page__title">Wallet name</h1>
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
        <router-link to="/" class="page__logout-link"> Log out </router-link>
      </div>
    </div>

    <div class="wallet-page__popular">
      <h2 class="main-description">popular about waves</h2>

      <div class="wallet-page__popular__filters">
        <button
          v-for="(item, index) in filters"
          :key="index"
          class="wallet-page__popular__filters__item"
          :class="{ 'wallet-page__popular__filters__item_active': item.active }"
          @click="toggleFilter(index)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <div class="wallet-page__item">
          <img
            class="wallet-page__item__image"
            src="@/assets/images/recomendations__back.png"
            alt="image"
            :original="true"
          />

          <h3 class="wallet-page__item__title">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
          </h3>

          <div class="wallet-page__item__bottom">
            <p class="wallet-page__item__bottom__date">09:38, 20 september</p>
            <p class="wallet-page__item__bottom__comments">
              <span
                ><icon
                  class="wallet-page__item__bottom__icon-chat"
                  data="@/assets/svg/chat.svg"
                  alt="image"
                  :original="true"
              /></span>
              322 comments
            </p>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="wallet-page__item">
          <img
            class="wallet-page__item__image"
            src="@/assets/images/recomendations__back.png"
            alt="image"
            :original="true"
          />

          <h3 class="wallet-page__item__title">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
          </h3>

          <div class="wallet-page__item__bottom">
            <p class="wallet-page__item__bottom__date">09:38, 20 september</p>
            <p class="wallet-page__item__bottom__comments">
              <span
                ><icon
                  class="wallet-page__item__bottom__icon-chat"
                  data="@/assets/svg/chat.svg"
                  alt="image"
                  :original="true"
              /></span>
              322 comments
            </p>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="wallet-page__item">
          <img
            class="wallet-page__item__image"
            src="@/assets/images/recomendations__back.png"
            alt="image"
            :original="true"
          />

          <h3 class="wallet-page__item__title">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
          </h3>

          <div class="wallet-page__item__bottom">
            <p class="wallet-page__item__bottom__date">09:38, 20 september</p>
            <p class="wallet-page__item__bottom__comments">
              <span
                ><icon
                  class="wallet-page__item__bottom__icon-chat"
                  data="@/assets/svg/chat.svg"
                  alt="image"
                  :original="true"
              /></span>
              322 comments
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletPage',
  data() {
    return {
      filters: [
        {
          name: 'News',
        },
        {
          name: 'Filter 01',
        },
        {
          name: 'Filter 02',
        },
      ],
      // activeFilter: false
    }
  },
  methods: {
    toggleFilter(index) {
      let item = this.filters[index]
      item.active = !item.active
      this.$set(this.filters, index, item)
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
