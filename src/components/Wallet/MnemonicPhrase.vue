<template>
  <div class="mnemonic-phrase" tabindex="-1">
    <h2>Your mnemonic phrase</h2>

    <!-- <f-message type="info" with-icon>
      Please backup the text below on paper and keep it somewhere secret and safe.
    </f-message> -->
    <div class="description-field">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM7 3C7 3.55228 6.55228 4 6 4C5.44772 4 5 3.55228 5 3C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3ZM4.75 4.75C4.33579 4.75 4 5.08579 4 5.5C4 5.91421 4.33579 6.25 4.75 6.25H5.5V8.25H4.75C4.33579 8.25 4 8.58579 4 9C4 9.41421 4.33579 9.75 4.75 9.75H7.75C8.16421 9.75 8.5 9.41421 8.5 9C8.5 8.58579 8.16421 8.25 7.75 8.25H7V5.6C7 5.13056 6.61944 4.75 6.15 4.75H4.75Z"
          fill="#B3B1BF"
        />
      </svg>
      <p class="description">Please backup the text below on paper and keep it somewhere secret and safe.</p>
    </div>

    <ul v-if="dMnemonicArray.length" class="phrase-list no-markers" aria-label="mnemonic phrase - list of words">
      <li v-for="(item, index) in dMnemonicArray" :key="`mn${index}`" tabindex="0" :aria-label="item">
        <span class="num" aria-hidden="true">{{ index + 1 }}</span> {{ item }}
      </li>
    </ul>

    <div class="footer">
      <button class="purple-button" @click="onSubmitButClick">I wrote down my recovery key</button>
      <button class="black-button" @click="onPrivateKeyButClick">View your private key</button>
    </div>
  </div>
</template>

<script>
// import FMessage from '../core/FMessage/FMessage.vue'
export default {
  //   components: { FMessage },

  props: {
    // {privateKey: string, mnemonic: string, keystore: EncryptedKeystoreV3Json}
    account: {
      type: Object,
      default() {
        return {
          privateKey: '',
          mnemonic: '',
          keystore: null,
        }
      },
    },
  },

  data() {
    return {
      // dMnemonicArray: this.$fWallet.getMnemonicArray(this.account.mnemonic),
      dMnemonicArray: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
      ],
    }
  },

  mounted() {
    setTimeout(() => {
      this.$el.focus()
    }, 10)
  },

  methods: {
    onSubmitButClick() {
      this.$emit('change-component', {
        detail: {
          from: 'mnemonic-phrase',
          data: { account: this.account },
        },
      })
    },

    onPrivateKeyButClick() {
      alert(this.account.privateKey)
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
