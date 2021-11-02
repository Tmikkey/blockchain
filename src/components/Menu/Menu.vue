<template>
  <div class="menu" :class="cssClass">
    <hamburger-switch
      v-if="!useBottomMenu"
      thickness="2"
      two-lines
      @hamburger-switch-on="onHamburgerSwitchOn"
      @hamburger-switch-off="onHamburgerSwitchOff"
    />

    <div class="b-drawer" @click="onDrawerClick">
      <div class="header">
        <div class="header-logo">
          <router-link to="/main">
            <img src="b-white.svg" alt="" class="not-fluid" />
          </router-link>
        </div>
      </div>
      <div class="body">
        <div class="logo">
          <router-link class="logo-link" to="/main">
            <icon data="@/assets/svg/b-white.svg" width="46" height="50" :original="true" />
          </router-link>
        </div>
        <b-simple-navigator :items="navigation" />
      </div>
      <div class="footer">
        <div class="copyright">
          <a href="https://bcwallet.io/" target="_blank" rel="nofollow">©2021 BC Network</a>
        </div>
      </div>
    </div>
    <div v-if="useBottomMenu" class="bottom-menu">
      <b-simple-navigator :items="navigation" icon-size="26" />
    </div>
  </div>
</template>

<script>
import { helpersMixin } from '../../mixins/helpers.js'

import HamburgerSwitch from '@/components/HamburgerSwitch/HamburgerSwitch'
import BSimpleNavigator from '@/components/BSimpleNavigator/BSimpleNavigator'
import MainIcon from '../../assets/svg/main-icon.svg'
import NewsIcon from '../../assets/svg/news-icon.svg'
import WalletIcon from '../../assets/svg/wallet-icon.svg'
import ExchangeIcon from '../../assets/svg/exchange-icon.svg'
import InvestIcon from '../../assets/svg/invest-icon.svg'

export default {
  name: 'Menu',
  components: { HamburgerSwitch, BSimpleNavigator },
  mixins: [helpersMixin],
  props: {
    useBottomMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawerOn: false,
      menuTransitionOn: false,
      navigation: [
        {
          url: {
            name: 'main',
          },
          title: 'Home',
          icon: MainIcon,
          fill: true,
          original: true,
          soon: true,
        },
        {
          url: {
            name: 'news',
          },
          title: 'News',
          icon: NewsIcon,
          fill: true,
          original: true,
          soon: true,
        },
        {
          url: {
            name: 'wallet',
          },
          title: 'Wallets',
          icon: WalletIcon,
          fill: true,
          original: true,
          soon: true,
        },
        {
          url: {
            name: 'exchange',
          },
          title: 'Exchange',
          icon: ExchangeIcon,
          fill: true,
          original: true,
          soon: true,
        },
        {
          url: {
            name: 'invest',
          },
          title: 'Invest',
          icon: InvestIcon,
          fill: true,
          original: true,
          soon: true,
        },
      ],
    }
  },
  computed: {
    cssClass() {
      return {
        'drawer-on': this.drawerOn,
        'animate-menu': this.menuTransitionOn,
        'bottom-menu-on': this.useBottomMenu,
      }
    },
  },

  watch: {
    $route() {
      this.onHamburgerSwitchOff()
    },
  },

  methods: {
    hamburgerSwitchOff() {
      const hamburgerSwitch = this.findChildByName('hamburger-switch')

      if (hamburgerSwitch) {
        hamburgerSwitch.dOn = false
      }
    },

    onHamburgerSwitchOn() {
      this.drawerOn = true
    },

    onHamburgerSwitchOff() {
      this.drawerOn = false
    },

    onDrawerClick() {
      this.hamburgerSwitchOff()
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
