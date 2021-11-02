<template>
  <div class="change_password">
    <div>
      <h3>Password</h3>
      <p class="description">
        Set a unique password to protect your personal account. To ensure your account is well protected, please use 8
        or more characters with a mix of letters, numbers & symbols.
      </p>
      <button v-if="!changePassword" class="black-button" @click="changePassword = !changePassword">
        Change password
      </button>
      <div v-if="changePassword" class="passwordWrapper">
        <div class="b-textinput name">
          <form @submit.prevent="onSubmit">
            <div class="sign__input__wrapper">
              <p class="description">Current password</p>
              <input
                v-model="password"
                class="sign__input"
                :type="isPasswordHidden ? 'password' : 'text'"
                placeholder="Enter your current password"
                autocomplete="current-password"
              />
              <span
                class="sign__hide-password"
                :class="{ 'sign__hide-password_hidden': isPasswordHidden }"
                @click="togglePasswordVisibility"
              >
                <icon class="sign__hide-password" data="@/assets/svg/eye.svg" alt="hide password" :original="true" />
              </span>
            </div>

            <div class="sign__input__wrapper">
              <p class="description">New password</p>
              <input
                v-model="newPassword"
                autocomplete="new-password"
                class="sign__input"
                :type="isPasswordHidden ? 'password' : 'text'"
                placeholder="Enter new password"
              />
              <span
                class="sign__hide-password"
                :class="{ 'sign__hide-password_hidden': isPasswordHidden }"
                @click="togglePasswordVisibility"
              >
                <icon class="sign__hide-password" data="@/assets/svg/eye.svg" alt="hide password" :original="true" />
              </span>
            </div>
            <div class="sign__input__wrapper">
              <p class="description">New password</p>
              <input
                v-model="confirmPassword"
                autocomplete="new-password"
                class="sign__input"
                :type="isPasswordHidden ? 'password' : 'text'"
                placeholder="Repeat new password"
              />
              <span
                class="sign__hide-password"
                :class="{ 'sign__hide-password_hidden': isPasswordHidden }"
                @click="togglePasswordVisibility"
              >
                <icon class="sign__hide-password" data="@/assets/svg/eye.svg" alt="hide password" :original="true" />
              </span>
            </div>

            <button class="purple-button" type="submit" :disabled="isFetchingLogin">Сhange password</button>

            <div v-if="loginErrorMsg" class="sign__error">
              {{ loginErrorMsg }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BSelect from '@/components/UKit/BSelect'
import { mapState } from 'vuex'
import { MODULE_NAME as AUTH, CHANGE_PASSWORD_REQUEST } from '@/store/modules/profile'
import _ from 'lodash'
export default {
  name: 'ProfileCard',
  components: { BSelect },
  data() {
    return {
      changed: false,
      password: '',
      newPassword: '',
      confirmPassword: '',
      isPasswordHidden: true,
      changePassword: false,
      user: {
        name: 'John Dunkan',
        email: 'bcw@index.com',
      },
    }
  },
  computed: {
    originalForm() {
      return this.$store.state.user
    },
    ...mapState({
      isFetchingChange: (state) => state[AUTH].changePassword.loading,
      loginError: (state) => state[AUTH].changePassword.error,
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
  watch: {
    originalForm() {
      this.form = _.cloneDeep(this.originalForm)
    },
    form: {
      handler() {
        this.changed = !_.isEqual(this.user, this.originalForm)
      },
      deep: true,
    },
  },

  created() {
    this.$store.dispatch('init')
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden
    },
    onSubmit() {
      this.$store.dispatch(CHANGE_PASSWORD_REQUEST, {
        email: this.email,
        password: this.password,
        newPassword: this.newPassword,
      })
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
