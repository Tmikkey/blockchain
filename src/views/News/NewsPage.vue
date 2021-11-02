<template>
  <div class="news">
    <div class="page__header">
      <h1 class="page__title">News</h1>
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

    <div class="news-page">
      <div class="news__item__top">
        <icon class="news__item__top__image" data="@/assets/svg/news-logo.svg" alt="image" :original="true" />
        <p class="news__item__top__title">
          bcwallet.io
          <br />
          <span class="news__item__top__title_grey">213 Followers / 389 Following</span>
        </p>
        <icon class="news__item__top__favorites" data="@/assets/svg/star.svg" alt="favorites" :original="true" />
      </div>

      <img class="news-page__image" src="@/assets/images/news-image.png" alt="image" :original="true" />

      <p class="news-page__date">09:38, 20 september</p>
      <h2 class="news-page__title">
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
        will give you a complete account.
      </h2>
      <p class="news-page__description">
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
        will give you a complete account of the system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
        pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain
        some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has
        no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the.
      </p>

      <img class="news-page__image" src="@/assets/images/news-image.png" alt="image" :original="true" />

      <p class="news-page__date">09:38, 20 september</p>
      <h2 class="news-page__title">
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
        will give you a complete account.
      </h2>
      <p class="news-page__description">
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
        will give you a complete account of the system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
        pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain
        some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has
        no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the.
      </p>

      <div class="news-page__comments">
        <h3 class="news-page__comments__title">comments</h3>

        <div class="news-page__comments__item">
          <p class="news-page__comments__text">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and expound the actual teachings of the.
          </p>
          <div class="news-page__comments__user">
            <img
              class="news-page__comments__image"
              src="@/assets/images/news-page__avatar.png"
              alt="image"
              :original="true"
            />
            <div>
              <p class="news-page__comments__name">John Mayers</p>
              <p class="news-page__comments__time">3 min ago</p>
            </div>
          </div>
        </div>

        <div class="news-page__comments__item">
          <p class="news-page__comments__text">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and expound the actual teachings of the.
          </p>
          <div class="news-page__comments__user">
            <img
              class="news-page__comments__image"
              src="@/assets/images/news-page__avatar.png"
              alt="image"
              :original="true"
            />
            <div>
              <p class="news-page__comments__name">John Mayers</p>
              <p class="news-page__comments__time">3 min ago</p>
            </div>
          </div>
        </div>

        <textarea class="news-page__comments__textarea" placeholder="Type your message here…" rows="5" cols="45" />
      </div>
    </div>
  </div>
</template>

<script>
import BNewsList from '@/components/BNewsList/BNewsList'
export default {
  name: 'NewsPage',
  components: { BNewsList },
}
</script>

<style lang="scss">
@import 'style';
</style>
