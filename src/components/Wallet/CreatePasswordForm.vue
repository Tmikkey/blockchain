<template>
  <div class="keystore-password-form">
    <form @f-form-submit="onFormSubmit" @f-form-change="onFormChange" @f-form-input="onFormInput">
      <legend class="h2">
        <template v-if="downloadKeystoreFile"> Create a keystore file and password </template>
        <template v-else> Set the password for your wallet </template>
      </legend>

      <div class="form-body">
        <div class="main">
          <!-- <f-password-field
              v-model="primaryPwd"
              :label="cSetPasswordT"
              type="password"
              field-size="large"
              name="primaryPwd"
              :validator="checkPrimaryPassword"
              validate-on-input
            >
              <template #bottom="sProps">
                <f-message v-show="sProps.showErrorMessage" type="error" role="alert" with-icon>
                  Make sure to enter at least 8 and max 200 characters, including one upper-case letter, a symbol and a
                  number
                </f-message>
                <f-message v-show="!sProps.showErrorMessage" type="info" with-icon>
                  Make sure to enter at least 8 and max 200 characters, including one upper-case letter, a symbol and a
                  number
                </f-message>
              </template>
            </f-password-field> -->
          <p class="description">Set a password</p>
          <input
            v-model="primaryPwd"
            :label="cSetPasswordT"
            type="password"
            field-size="large"
            name="primaryPwd"
            :validator="checkPrimaryPassword"
            validate-on-input
            placeholder="Set a password*"
          />
          <div class="description-field">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM7 3C7 3.55228 6.55228 4 6 4C5.44772 4 5 3.55228 5 3C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3ZM4.75 4.75C4.33579 4.75 4 5.08579 4 5.5C4 5.91421 4.33579 6.25 4.75 6.25H5.5V8.25H4.75C4.33579 8.25 4 8.58579 4 9C4 9.41421 4.33579 9.75 4.75 9.75H7.75C8.16421 9.75 8.5 9.41421 8.5 9C8.5 8.58579 8.16421 8.25 7.75 8.25H7V5.6C7 5.13056 6.61944 4.75 6.15 4.75H4.75Z"
                fill="#B3B1BF"
              />
            </svg>
            <p class="description">
              Make sure to enter at least 8 and max 200 characters, including one upper-case letter, a symbol and a
              number.
            </p>
          </div>
          <p class="description">Repeat password</p>

          <input
            v-model="secondaryPwd"
            label="Re-enter password"
            type="password"
            field-size="large"
            name="secondaryPwd"
            :validator="checkSecondaryPassword"
            validate-on-input
            placeholder="Repeat password*"
          />

          <!-- <f-password-field
              v-model="secondaryPwd"
              label="Re-enter password"
              type="password"
              field-size="large"
              name="secondaryPwd"
              :validator="checkSecondaryPassword"
              validate-on-input
            >
              <template #bottom="sProps">
                <b-message v-show="sProps.showErrorMessage" type="error" role="alert" with-icon>
                  The entered password does not match
                </b-message>
              </template>
            </f-password-field> -->
          <div class="checkbox">
            <input v-model="confirmation" name="confirmation" type="checkbox" />
            <label class="checkbox-label">
              I understand that I will need both the keystore file and the password to access my wallet. Once I have
              downloaded the file below, I will safely store it as well as the password
            </label>
          </div>
          <template v-if="downloadKeystoreFile"></template>
          <!-- <template v-else>
              I understand that I will need this password to verify all transactions within my wallet. I will safely
              store the password.
            </template> -->
          <!-- </input> -->
        </div>

        <div class="footer">
          <button type="submit" class="purple-button" style="max-width: 100%" :class="{ disabled: submitDisabled }">
            <!-- <template v-if="downloadKeystoreFile"> Download keystore file and continue </template> -->
            Confirm
          </button>
        </div>
      </div>
      <!-- </fieldset> -->
    </form>
  </div>
</template>

<script>
// import FForm from '../core/FForm/FForm.vue'
import { ADD_ACCOUNT } from '../../store/actions.type.js'
// import FCheckbox from '../core/FCheckbox/FCheckbox.vue'
import BMessage from '@/components/UKit/BMessage.vue'
// import FPasswordField from '../core/FPasswordField/FPasswordField.vue'
// import { clientInfo } from '../../utils/client-info.js'

export default {
  components: {
    BMessage,
    // FPasswordField,
    // FMessage,
    // FForm,
    // FCheckbox,
  },

  props: {
    // created from restore account view
    restoreAccount: {
      type: Boolean,
      default: false,
    },
    // private key
    privateKey: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      primaryPwd: '',
      secondaryPwd: '',
      confirmation: false,
      submitDisabled: true,
      downloadKeystoreFile: true,
      //downloadKeystoreFile: !clientInfo.mobile && !this.restoreAccount,
    }
  },

  computed: {
    cSetPasswordT() {
      return this.restoreAccount ? 'Set a new password' : 'Set a password'
    },
  },

  // mounted() {
  //   const el = findFirstFocusableDescendant(this.$el)
  //   if (el) {
  //     el.focus()
  //   }
  // },

  methods: {
    checkPrimaryPassword(_value) {
      return this.$fWallet.checkPrimaryPassword(_value)
    },

    checkSecondaryPassword(_value) {
      return _value === this.primaryPwd && _value.length > 0
    },

    checkPasswords() {
      return this.checkPrimaryPassword(this.primaryPwd) && this.checkSecondaryPassword(this.secondaryPwd)
    },

    validate() {
      return this.checkPasswords() && this.confirmation
    },

    onFormInput() {
      this.submitDisabled = !this.validate()
    },

    onFormChange() {
      this.submitDisabled = !this.validate()
    },

    async onFormSubmit(_event) {
      const pwd = _event.detail.data.primaryPwd
      let account = null
      let keystore = null
      const fWallet = this.$fWallet

      if (this.validate()) {
        if (pwd) {
          if (this.privateKey) {
            // from restore account - private key, mnemonic
            keystore = fWallet.encryptToKeystore(this.privateKey, pwd)
          } else if (this.restoreAccount) {
            // from restore account - keystore
            account = fWallet.createAccount()
            keystore = fWallet.encryptToKeystore(account.privateKey, pwd)

            account = null
          }

          if (keystore) {
            // fWallet.downloadKeystore(keystore);

            if (this.restoreAccount) {
              // save account
              this.$store.dispatch(ADD_ACCOUNT, keystore)
              // go to success view
              this.$emit('change-component', {
                detail: {
                  from: 'create-password-form',
                  to: 'account-success-message',
                  data: {
                    address: fWallet.toChecksumAddress(keystore.address),
                  },
                },
              })
            }
          } else if (!this.restoreAccount) {
            // create new account
            account = await this.$fWallet.createMnemonic(pwd)

            if (this.downloadKeystoreFile) {
              fWallet.downloadKeystore(account.keystore)
            }

            this.$emit('change-component', {
              detail: {
                from: 'create-password-form',
                data: { account },
              },
            })
          }
        }
      }
    },
  },
}
</script>

<style lang="scss"></style>
