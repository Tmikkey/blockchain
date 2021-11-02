<template>
  <div class="create-account-view">
    <div class="login-modal">
      <!-- <div class="header">
        <h3>Login</h3>
        <icon class="close" data="@/assets/svg/close.svg" alt="close" :original="true" />
      </div> -->
      <!-- <Recovery /> -->
      <component :is="currentComponent" @change-component="currentComponent = $event" />
    </div>
  </div>
</template>

<script>
import Login from '../../components/Login/Login.vue'
import Signup from '../../components/Login/Signup.vue'
import Recovery from '../../components/Login/Recovery.vue'
import Update from '../../components/Login/Update.vue'

const DEFAULT_COMPONENT = 'login'
export default {
  components: { Login, Signup, Recovery, Update },

  data() {
    return {
      currentComponent: DEFAULT_COMPONENT,
      dStep: 1,
      title: 'Login',
    }
  },

  computed: {
    cCurrentComponentProperties() {
      switch (this.currentComponent) {
        case 'mnemonic-phrase':
        case 'mnemonic-phrase-verification':
          return {
            account: this._account,
          }
        case 'account-success-message':
          return {
            address: this._address,
          }
        default:
          return null
      }
    },
  },

  methods: {
    setDefaultComponent() {
      this.currentComponent = DEFAULT_COMPONENT
      this.dStep = 1
    },

    /**
     * @param {Object} _event
     */
    // onChangeComponent(_event, component) {
    //   const data = _event.detail

    //   if (data.from === 'login') {
    //     if (component == 'recovery') {
    //       this.currentComponent = 'recovery'
    //     }
    //     this.currentComponent = 'recovery'
    //     this.dStep = 2
    //   } else if (data.from === 'mnemonic-phrase') {
    //     this._account = data.data.account
    //     this.currentComponent = 'mnemonic-phrase-verification'
    //     this.dStep = 3
    //   } else if (data.from === 'mnemonic-phrase-verification') {
    //     this._address = data.data.address
    //     this.currentComponent = 'account-success-message'
    //     this.dStep = 4
    //   }

    //   this.deleteTmpProps()
    // },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
