<template>
  <div class="account-success-message">
    <div class="message">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M51 26C51 39.8071 39.8071 51 26 51C12.1929 51 1 39.8071 1 26C1 12.1929 12.1929 1 26 1C39.8071 1 51 12.1929 51 26Z"
          stroke="#76DF74"
          stroke-width="2"
        />
        <path
          d="M35.2863 18.6179C35.6276 18.1836 35.5521 17.5549 35.1178 17.2137C34.6836 16.8725 34.0549 16.9479 33.7137 17.3822L23.3496 30.573L18.1402 26.2318C17.7159 25.8783 17.0854 25.9356 16.7318 26.3599C16.3782 26.7841 16.4356 27.4147 16.8598 27.7683L22.856 32.7651C22.8616 32.7698 22.8672 32.7744 22.8729 32.779C23.2088 33.0496 23.6686 33.0679 24.0192 32.8551C24.1111 32.7992 24.1955 32.7275 24.2682 32.6402C24.2717 32.6361 24.2751 32.632 24.2784 32.6278C24.282 32.6234 24.2856 32.6189 24.289 32.6144L24.2863 32.6179C24.2837 32.6212 24.2811 32.6245 24.2784 32.6278"
          fill="#76DF74"
        />
      </svg>
      <h3>You’re all set!</h3>
    </div>
    <p class="description">You have successfully created your wallet.</p>
    <router-link
      :to="{
        name: 'account-history',
        params: { address },
      }"
      class="black-button"
    >
      Access your wallet
    </router-link>
    <!-- <button class="black-button">Access your wallet</button> -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // created from restore account view
    restoreAccount: {
      type: Boolean,
      default: false,
    },
    // account address
    address: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
