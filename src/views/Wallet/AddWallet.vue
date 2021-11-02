<template>
  <div class="wallet">
    <div class="page__header">
      <h1 class="page__title">
        <span @click="$router.go(-1)">
          <icon class="page__icon-back" data="@/assets/svg/arrow-back.svg" alt="notifications" :original="true" />
        </span>
        Add wallet
      </h1>
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

    <div class="add-wallet">
      <el-radio-group v-model="walletType" class="add-wallet__types">
        <el-radio-button label="Cold" class="add-wallet__types__item">
          <p class="add-wallet__types__title">
            <span>
              <icon
                class="add-wallet__types__icon"
                data="@/assets/svg/snowflake.svg"
                alt="notifications"
                :original="true"
              />
            </span>
            Cold
          </p>
          <p class="add-wallet__types__description">Zwei flinke Boxer jagen die quirlige…</p>
        </el-radio-button>

        <el-radio-button label="Hot" class="add-wallet__types__item">
          <p class="add-wallet__types__title">
            <span>
              <icon class="add-wallet__types__icon" data="@/assets/svg/fire.svg" alt="notifications" :original="true" />
            </span>
            Hot
          </p>
          <p class="add-wallet__types__description">The quick, brown fox jumps over a…</p>
        </el-radio-button>
      </el-radio-group>

      <div class="add-wallet__select-wrapper">
        <img class="add-wallet__select__icon" src="@/assets/images/btc.png" alt="logo" :original="true" />
        <el-select
          v-model="selectedExchange"
          class="add-wallet__select"
          placeholder="Select"
          popper-class="add-wallet__select__dropdown"
        >
          <el-option v-for="item in exchange" :key="item.value" :label="item.label" :value="item.value">
            <p class="add-wallet__select__text">
              {{ item.value }}
            </p>
            <img class="add-wallet__select__icon-dropdown" src="@/assets/images/btc.png" alt="logo" :original="true" />
          </el-option>
        </el-select>
      </div>

      <input class="page__input add-wallet__text-input" type="text" placeholder="Enter name" />

      <div class="add-wallet__balance">
        <p class="add-wallet__balance__text">Hide balance</p>
        <icon class="add-wallet__balance__icon" data="@/assets/svg/info.svg" alt="notifications" :original="true" />
        <input class="add-wallet__balance__switch" type="checkbox" checked />
      </div>

      <button class="add-wallet__submit">Add wallet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddWallet',
  data() {
    return {
      activeColdType: true,
      exchange: [
        {
          value: 'Bitcoin',
          label: 'Bitcoin',
          icon: '@/assets/svg/arrow-back.svg',
        },
        {
          value: 'Waves',
          label: 'Waves',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      value: '',
      walletType: 'Cold',
      selectedExchange: 1,
    }
  },
  mounted() {
    this.selectedExchange = this.exchange[0].value
  },
  methods: {
    switchTypeToCold() {
      this.activeColdType = true
    },
    switchTypeToHot() {
      this.activeColdType = false
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
