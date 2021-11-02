<template>
  <div class="page__header">
    <h1 class="page__title">
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.8839 2.88388C15.372 2.39573 15.372 1.60427 14.8839 1.11612C14.3957 0.627961 13.6043 0.627961 13.1161 1.11612L1.11675 13.1155C1.11654 13.1157 1.11633 13.1159 1.11612 13.1161C1.0551 13.1771 1.00171 13.2429 0.955941 13.3122C0.816274 13.5237 0.747648 13.7684 0.750062 14.0124C0.750811 14.0883 0.758418 14.164 0.772882 14.2387C0.818647 14.4751 0.933058 14.7008 1.11612 14.8839L13.1161 26.8839C13.6043 27.372 14.3957 27.372 14.8839 26.8839C15.372 26.3957 15.372 25.6043 14.8839 25.1161L3.76777 14L14.8839 2.88388Z"
          fill="#7A788D"
        />
      </svg>

      {{ $route.name }}
    </h1>
    <div class="page__header__right">
      <!-- <div class="page__search">
        <input id="" class="page__search__input" placeholder="Search" type="text" name="" />
        <icon class="page__search__icon" data="@/assets/svg/search.svg" alt="notifications" :original="true" />
      </div> -->
      <!-- <button class="page__notifications">
        <icon class="page__notifications__icon" data="@/assets/svg/bell.svg" alt="notifications" :original="true" />
        <span class="page__notifications__amount"> {{ user.notifications.amount }}</span>
      </button> -->
      <div class="language">
        <button ref="menu-lang" class="lang-btn" @click="lang = !lang">
          <icon data="@/assets/svg/lang.svg" alt="dislikes" class="lang-svg" :original="true" />
          {{ currentLanguage }}
          <svg class="arrow-down" width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.78787 3.78787L0.512132 0.512132C0.323143 0.323143 0.456993 0 0.724264 0H7.27574C7.54301 0 7.67686 0.323142 7.48787 0.512131L4.21213 3.78787C4.09497 3.90503 3.90503 3.90503 3.78787 3.78787Z"
              fill="#7A788D"
            />
          </svg>
        </button>
        <div v-if="lang" class="profileMenu-lang">
          <a href="" v-for="lang in langs" :key="lang.id">
            {{ lang.title }}
          </a>
        </div>
      </div>

      <div class="profile">
        <button ref="menu" class="profile-btn" @click="isOpen = !isOpen">
          <router-link to="/" class="page__profile-link">
            <AvatarView class="page__profile-link__image" />
            <!-- <img class="page__profile-link__image" src="@/assets/svg/photo-profile.png" alt="profile" :original="true" /> -->
          </router-link>
          {{ user.name }}
          <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.78787 3.78787L0.512132 0.512132C0.323143 0.323143 0.456993 0 0.724264 0H7.27574C7.54301 0 7.67686 0.323142 7.48787 0.512131L4.21213 3.78787C4.09497 3.90503 3.90503 3.90503 3.78787 3.78787Z"
              fill="#7A788D"
            />
          </svg>
        </button>
        <div v-if="isOpen" class="profileMenu">
          <router-link to="/" class="page__logout-link">
            <icon data="@/assets/svg/settings.svg" alt="dislikes" :original="true" />
            Settings
          </router-link>
          <hr />
          <router-link to="/" class="page__logout-link">
            <icon data="@/assets/svg/logout.svg" alt="dislikes" :original="true" />
            Log out
          </router-link>
        </div>
      </div>
    </div>
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
  data() {
    return {
      isOpen: false,
      lang: false,
      selected: '',
      currentLanguage: 'EN',
      langs: [
        {
          id: 'en',
          title: 'English',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
