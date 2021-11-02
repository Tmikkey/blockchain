<template>
  <div class="login-modal">
    <div class="header">
      <h3>Create an account</h3>
      <icon class="close" data="@/assets/svg/close.svg" alt="close" :original="true" />
    </div>
    <div class="body">
      <div v-if="!isOpenedConfirmationPage">
        <p class="sign_link">
          I have an account.
          <button class="clear-button" @click="Login()">Login</button>
        </p>
        <form @submit.prevent="onSubmit">
          <input v-model="email" class="sign__input" type="text" placeholder="Email *" autocomplete="username" />

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
          <p class="privacy">
            By proceeding, you agree to the
            <router-link to="/" class="privacy__link"> user agreement </router-link>
            and the company’s
            <router-link to="/" class="privacy__link"> privacy policy </router-link>
          </p>

          <button class="sign__submit" type="submit" :disabled="isFetchingSignup" @click="onSubmit">
            Register now
          </button>

          <infinite-loading v-if="isFetchingSignup" />

          <div v-if="!isFetchingSignup && signupErrror" class="sign__error">
            {{ signupErrror }}
          </div>
        </form>
      </div>

      <div v-if="isOpenedConfirmationPage" class="sign sign_confirmation">
        <icon
          class="sign__icon-confirmation"
          data="@/assets/svg/email-confirmation.svg"
          alt="notifications"
          :original="true"
        />

        <h2 class="sign__title">Check your mailbox</h2>

        <p class="sign__description">
          We have sent you a confirmation to:
          <a href="mailto:test@blockchain.ru" class="sign__description__link">{{ email }}</a>
          <br />
          Open the link in the email to confirm your registration.
        </p>

        <button class="sign__resend" @click="resendEmail">Resend</button>
        <infinite-loading v-if="isFetchingResendEmail" />
        <div v-if="!isFetchingResendEmail && resendEmailError" class="sign__error">
          {{ resendEmailError }}
        </div>
        <button class="sign__open-email" @click="activateEmail">Open email</button>
        <infinite-loading v-if="isFetchingActivateEmail" />
        <router-link :to="{ name: 'sign-in' }" class="sign__skip"> Skip </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SIGNUP_REQUEST,
  MODULE_NAME as AUTH,
  ACTIVATE_EMAIL_REQUEST,
  RESEND_CONFIRM_EMAIL_REQUEST,
} from '@/store/modules/auth'
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'SignUp',
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      email: '3x1s7or+02@gmail.com',
      password: '',
      confirmPassword: '',
      isPasswordHidden: true,
      isOpenedConfirmationPage: false,
      signupSid: null,
      // isOpenedConfirmationPage: true,
      // signupSid: '88439ee986f948c893ebc75b7c1b9167',
    }
  },
  computed: {
    ...mapState({
      isFetchingSignup: (state) => state[AUTH].signup.loading,
      signupErrror: (state) => state[AUTH].signup.error,
      isFetchingResendEmail: (state) => state[AUTH].resendConfirmEmail.loading,
      resendEmailError: (state) => state[AUTH].resendConfirmEmail.error,
      isFetchingActivateEmail: (state) => state[AUTH].activateEmail.loading,
    }),
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordHidden = !this.isPasswordHidden
    },
    openConfirmationPage() {
      this.isOpenedConfirmationPage = true
    },
    async onSubmit() {
      const { sid } = await this.$store.dispatch(SIGNUP_REQUEST, {
        email: this.email,
        password: this.password,
      })
      this.signupSid = sid
      this.openConfirmationPage()
    },
    async resendEmail() {
      if (!this.signupSid) {
        throw new Error('Sid has not been specified')
      }

      await this.$store.dispatch(RESEND_CONFIRM_EMAIL_REQUEST, {
        sid: this.signupSid,
      })
    },
    async activateEmail() {
      await this.$store.dispatch(ACTIVATE_EMAIL_REQUEST, {
        sid: this.signupSid,
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
