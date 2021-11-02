<template>
  <div class="sign">
    <icon class="sign__logo" data="@/assets/svg/logo-wide.svg" alt="notifications" :original="true" />
    <p class="sign__description">
      Don’t have an account?
      <router-link :to="{ name: 'sign-up' }" class="sign__description__link"> Register now</router-link>
    </p>

    <form @submit.prevent="onSubmit">
      <input v-model="email" class="sign__input" type="text" placeholder="Your email" autocomplete="username" />

      <button class="sign__submit" type="submit" :disabled="isFetchingRecover">Recover password</button>
      <infinite-loading v-if="isFetchingRecover" />

      <div v-if="recoverError" class="sign__error">
        {{ recoverError }}
      </div>
      <router-link :to="{ name: 'sign-in' }" class="sign__recover-password"> Login</router-link>
    </form>
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
      errorsMap: {
        WrongUsernamePassword: 'Wrong username or password',
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
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
