<template>
  <div class="login-modal">
    <div class="header">
      <h3>Update Password</h3>
      <icon class="close" data="@/assets/svg/close.svg" alt="close" :original="true" />
    </div>
    <div class="body">
      <div class="">
        <form @submit.prevent="onSubmit">
          <div class="sign__input__wrapper">
            <input
              v-model="password"
              class="sign__input"
              :type="isPasswordHidden ? 'password' : 'text'"
              placeholder="Set a password*"
              autocomplete="new-password"
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

          <div class="sign__input__wrapper">
            <input
              v-model="confirmPassword"
              autocomplete="new-password"
              class="sign__input"
              :type="isPasswordHidden ? 'password' : 'text'"
              placeholder="Confirm the password*"
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

          <button class="sign__submit" type="submit" :disabled="password.length > 0">Update password</button>
          <infinite-loading v-if="isFetchingRecover" />

          <div v-if="recoverError" class="sign__error">
            {{ recoverError }}
          </div>
        </form>
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
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
