<template>
  <div class="create-account-view">
    <div class="window">
      <div class="header">
        <h1>
          Create a new wallet
          <span class="steps"> {{ dStep }} <span class="count">/ 4</span> </span>
          <router-link to="/" class="router-link">
            <icon data="@/assets/svg/close.svg" width="24" height="24"></icon>
          </router-link>
        </h1>
      </div>
      <div class="body">
        <component :is="currentComponent" v-bind="cCurrentComponentProperties" @change-component="onChangeComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import CreatePasswordForm from '../../components/Wallet/CreatePasswordForm.vue'
import MnemonicPhrase from '../../components/Wallet/MnemonicPhrase.vue'
import MnemonicPhraseVerification from '../../components/Wallet/MnemonicPhraseVerification.vue'
import AccountSuccessMessage from '../../components/Wallet/AccountSuccessMessage.vue'

// const DEFAULT_COMPONENT = 'create-password-form'
const DEFAULT_COMPONENT = 'mnemonic-phrase'
// const DEFAULT_COMPONENT = 'account-success-message'
// const DEFAULT_COMPONENT = 'mnemonic-phrase-verification'

export default {
  components: { AccountSuccessMessage, MnemonicPhraseVerification, MnemonicPhrase, CreatePasswordForm },

  data() {
    return {
      currentComponent: DEFAULT_COMPONENT,
      dStep: 1,
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

  created() {
    this._account = {
      privateKey: '',
      mnemonic: '',
      keystore: null,
    }
    this._address = ''
  },

  methods: {
    /**
     * Delete temporaty properties.
     */
    deleteTmpProps() {
      this.$nextTick(() => {
        this._account = {
          privateKey: '',
          mnemonic: '',
          keystore: null,
        }
        this._address = ''
      })
    },

    setDefaultComponent() {
      this.currentComponent = DEFAULT_COMPONENT
      this.dStep = 1
    },

    /**
     * @param {Object} _event
     */
    onChangeComponent(_event) {
      const data = _event.detail

      if (data.from === 'create-password-form') {
        this._account = data.data.account
        this.currentComponent = 'mnemonic-phrase'
        this.dStep = 2
      } else if (data.from === 'mnemonic-phrase') {
        this._account = data.data.account
        this.currentComponent = 'mnemonic-phrase-verification'
        this.dStep = 3
      } else if (data.from === 'mnemonic-phrase-verification') {
        this._address = data.data.address
        this.currentComponent = 'account-success-message'
        this.dStep = 4
      }

      this.deleteTmpProps()
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
