<template>
  <div class="login-modal">
    <div class="header">
      <h3>Password recovery</h3>
      <icon class="close" data="@/assets/svg/close.svg" alt="close" :original="true" />
    </div>
    <div class="body">
      <div class="">
        <p class="info">
          Enter your email below, you will receive an email with instructions on how to reset your password in a few
          minutes. You can also set a new password if you’ve never set one before.
        </p>

        <form @submit.prevent="onSubmit">
          <input v-model="email" class="sign__input" type="text" placeholder="Email *" autocomplete="username" />

          <button class="sign__submit" type="submit" :disabled="email.length > 0">Send instructions</button>
          <infinite-loading v-if="isFetchingRecover" />

          <div v-if="recoverError" class="sign__error">
            {{ recoverError }}
          </div>
        </form>
      </div>
      <div class="success-form">
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
          <h3>Check your email</h3>
        </div>
        <p class="">An email has been sent to inbox@info.com with instructions to reset your password.</p>
        <p class="description">*If the email doesn't show up soon, check your spam folder.</p>
        <button class="purple-button" @click="Login()">Return to login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { MODULE_NAME as AUTH, RECOVER_PASSWORD_REQUEST, SIGNIN_REQUEST } from '@/store/modules/auth'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'RecoverPassword',
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      isPasswordHidden: true,
      isEmpty: true,
      errorsMap: {
        WrongUsernamePassword: 'Check if the input is correct.',
      },
    }
  },
  computed: {
    ...mapState({
      isFetchingRecover: (state) => state[AUTH].login.loading,
      recoverError: (state) => state[AUTH].login.error,
    }),
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden
    },
    async onSubmit() {
      await this.$store.dispatch(RECOVER_PASSWORD_REQUEST, {
        email: this.email,
      })
    },
    Login() {
      this.$emit('change-component', 'login')
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
