<template>
  <div class="login-modal">
    <div class="header">
      <h3>Login</h3>
      <icon class="close" data="@/assets/svg/close.svg" alt="close" :original="true" />
    </div>
    <div class="body">
      <p class="sign_link">
        New in Blockchain.ru?
        <button class="clear-button" @click="SignUp()">Create an account</button>
      </p>

      <form @submit.prevent="onSubmit">
        <input v-model="email" class="sign__input" type="text" placeholder="Email *" autocomplete="username" />

        <div class="sign__input__wrapper">
          <input
            v-model="password"
            class="sign__input"
            :type="isPasswordHidden ? 'password' : 'text'"
            placeholder="Password"
            autocomplete="current-password"
          />
          <span
            class="sign__hide-password"
            :class="{ 'sign__hide-password_hidden': isPasswordHidden }"
            @click="togglePasswordVisibility"
          >
            <icon
              class="sign__hide-password"
              data="@/assets/svg/eye-password.svg"
              alt="hide password"
              :original="true"
            />
          </span>
        </div>
        <button class="clear-button" @click="onSubmitButClick()">Forgot password?</button>
        <button class="sign__submit" type="submit" :disabled="isFetchingLogin">Login</button>
        <infinite-loading v-if="isFetchingLogin" />

        <div v-if="loginErrorMsg" class="sign__error">
          {{ loginErrorMsg }}
        </div>
      </form>
    </div>
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
      recovery: 'recovery',
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
    onSubmitButClick() {
      this.$emit('change-component', 'recovery')
    },
    SignUp() {
      this.$emit('change-component', 'signup')
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
