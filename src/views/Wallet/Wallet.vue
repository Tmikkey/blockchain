<template>
  <div class="wallet">
    <div class="page__header">
      <h1 class="page__title">Wallet</h1>
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

    <div class="wallet__top-block">
      <p class="wallet__top-block__date">Data for September 13, 2020</p>
      <router-link :to="{ name: 'add-wallet' }" class="wallet__top-block__add-wallet">
        Add wallet
        <span><icon data="@/assets/svg/plus-in-circle.svg" alt="plus" :original="true" /></span>
      </router-link>
    </div>

    <div class="wallet__list">
      <div class="wallet__list-item">
        <div class="row wallet__row">
          <div class="wallet__column wallet__column_logo">
            <icon data="@/assets/svg/wallet__logo-waves.svg" alt="logo waves" :original="true" />
          </div>

          <div class="wallet__column wallet__column_name">
            <span class="wallet__column__circle wallet__column__circle_orange" />
            Wallet name
          </div>

          <div class="wallet__column wallet__column_amount">
            <span class="wallet__column__big-number">245.22</span>
            WAVES
          </div>

          <div class="wallet__column wallet__column_cost">2 075 880.78 ₽</div>

          <div class="wallet__column wallet__column_percent wallet__column_percent_green">
            <icon data="@/assets/svg/wallet__graphic_green.svg" alt="graphic" :original="true" />
            +3.12%
          </div>

          <div class="wallet__column wallet__column_actions">
            <button>
              <icon data="@/assets/svg/trash.svg" alt="trash" :original="true" />
            </button>
            <router-link :to="{ name: 'edit-wallet' }">
              <icon data="@/assets/svg/edit.svg" alt="edit" :original="true" />
            </router-link>
          </div>
        </div>
      </div>

      <div class="wallet__list-item">
        <div class="row wallet__row">
          <div class="wallet__column wallet__column_logo">
            <icon data="@/assets/svg/wallet__logo-waves.svg" alt="logo waves" :original="true" />
          </div>

          <div class="wallet__column wallet__column_name">
            <span class="wallet__column__circle wallet__column__circle_blue" />
            Wallet name
          </div>

          <div class="wallet__column wallet__column_amount">
            <span class="wallet__column__big-number">245.22</span>
            WAVES
          </div>

          <div class="wallet__column wallet__column_cost">2 075 880.78 ₽</div>

          <div class="wallet__column wallet__column_percent wallet__column_percent_red">
            <icon data="@/assets/svg/wallet__graphic_red.svg" alt="graphic" :original="true" />
            +3.12%
          </div>

          <div class="wallet__column wallet__column_actions">
            <button>
              <icon data="@/assets/svg/trash.svg" alt="trash" :original="true" />
            </button>
            <router-link :to="{ name: 'edit-wallet' }">
              <icon data="@/assets/svg/edit.svg" alt="edit" :original="true" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallet',
}
</script>

<style lang="scss">
@import 'style';
</style>
