<template>
  <div class="sign">
    <icon class="sign__logo" data="@/assets/svg/logo-wide.svg" alt="notifications" :original="true" />
    <p class="sign__description">
      Don’t have an account?
      <router-link :to="{ name: 'sign-up' }" class="sign__description__link"> Register now</router-link>
    </p>

    <form @submit.prevent="onSubmit">
      <input v-model="email" class="sign__input" type="text" placeholder="Your email" autocomplete="username" />

      <div class="sign__input__wrapper">
        <input
          v-model="password"
          class="sign__input"
          :type="isPasswordHidden ? 'password' : 'text'"
          placeholder="Your password"
          autocomplete="current-password"
        />
        <span
          class="sign__hide-password"
          :class="{ 'sign__hide-password_hidden': isPasswordHidden }"
          @click="togglePasswordVisibility"
        >
          <icon class="sign__hide-password" data="@/assets/svg/eye-password.svg" alt="hide password" :original="true" />
        </span>
      </div>

      <button class="sign__submit" type="submit" :disabled="isFetchingLogin">Login</button>
      <infinite-loading v-if="isFetchingLogin" />

      <div v-if="loginErrorMsg" class="sign__error">
        {{ loginErrorMsg }}
      </div>
      <router-link :to="{ name: 'recover-password' }" class="sign__recover-password"> Recover password</router-link>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { MODULE_NAME as AUTH, SIGNIN_REQUEST } from '@/store/modules/auth'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'SignIn',
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      isPasswordHidden: true,
      errorsMap: {
        WrongUsernamePassword: 'Wrong username or password',
      },
    }
  },
  computed: {
    ...mapState({
      isFetchingLogin: (state) => state[AUTH].login.loading,
      loginError: (state) => state[AUTH].login.error,
    }),
    loginErrorMsg() {
      if (this.loginError in this.errorsMap) {
        return this.errorsMap[this.loginError]
      } else if (this.loginError) {
        return this.loginError
      } else {
        return ''
      }
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden
    },
    onSubmit() {
      this.$store.dispatch(SIGNIN_REQUEST, {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
