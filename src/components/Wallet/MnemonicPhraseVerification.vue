<template>
  <div class="mnemonic-phrase mnemonic-phrase-verification">
    <h2>Verification</h2>

    <!-- <p>Please select the words in the correct order to verify your mnemonic phrase.</p> -->
    <div class="description-field">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM7 3C7 3.55228 6.55228 4 6 4C5.44772 4 5 3.55228 5 3C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3ZM4.75 4.75C4.33579 4.75 4 5.08579 4 5.5C4 5.91421 4.33579 6.25 4.75 6.25H5.5V8.25H4.75C4.33579 8.25 4 8.58579 4 9C4 9.41421 4.33579 9.75 4.75 9.75H7.75C8.16421 9.75 8.5 9.41421 8.5 9C8.5 8.58579 8.16421 8.25 7.75 8.25H7V5.6C7 5.13056 6.61944 4.75 6.15 4.75H4.75Z"
          fill="#B3B1BF"
        />
      </svg>
      {{ dMnemonicArray.length }}
      <p class="description">Please select the words in the correct order to verify your mnemonic phrase.</p>
    </div>

    <ul v-if="dMnemonicToVerify" class="phrase-list no-markers" @click="onMnemonicToVerifyClick">
      <li v-for="(item, index) in dMnemonicToVerify" :key="`mn${index}`" :data-idx="index">
        <span class="num">{{ index + 1 }}</span> {{ item }}
        <button v-if="item" class="btn light same-size round small" :aria-label="`remove word ${item}`">
          <!-- <icon data="@/assets/svg/times.svg"></icon> -->
        </button>
      </li>
    </ul>

    <div v-if="dErrorMsg" class="error_msg">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM7 3C7 3.55228 6.55228 4 6 4C5.44772 4 5 3.55228 5 3C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3ZM4.75 4.75C4.33579 4.75 4 5.08579 4 5.5C4 5.91421 4.33579 6.25 4.75 6.25H5.5V8.25H4.75C4.33579 8.25 4 8.58579 4 9C4 9.41421 4.33579 9.75 4.75 9.75H7.75C8.16421 9.75 8.5 9.41421 8.5 9C8.5 8.58579 8.16421 8.25 7.75 8.25H7V5.6C7 5.13056 6.61944 4.75 6.15 4.75H4.75Z"
          fill="#FB8977"
        />
      </svg>
      <p>{{ dErrorMsg }}</p>
    </div>

    <ul
      v-if="dShuffledMnemonic.length"
      class="phrase-list phrase-list-buttons no-markers"
      @click="onShuffledMnemonicClick"
    >
      <li v-for="(item, index) in dShuffledMnemonic" :key="`mns${index}`" class="btn-li">
        <button class="btn light" :disabled="item.disabled" :data-word="item.word">{{ item.word }}</button>
      </li>
    </ul>

    <!-- 
    <f-message v-if="dErrorMsg" type="error" with-icon>{{ dErrorMsg }}</f-message>
-->
    <div class="footer">
      <button class="purple-button" :disabled="dVerifyButDisabled" @click="onVerifyButClick">Verify</button>
    </div>
  </div>
</template>

<script>
// import { shuffle } from '../../utils/array.js';
import { ADD_ACCOUNT } from '../../store/actions.type.js'
// import FMessage from '../core/FMessage/FMessage.vue'

export default {
  //   components: { FMessage },
  props: {
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
      str: 'jee',
      // array of mnemonic words picked by user
      // dMnemonicToVerify: Array(this.$fWallet.getMnemonicArray(this.account.mnemonic).length).fill(''),
      // // mnemonic phrase converted to an array
      // dMnemonicArray: this.$fWallet.getMnemonicArray(this.account.mnemonic),
      // // mnemonic phrase converted to an shuffled array
      dShuffledMnemonic: this.getMnemonicArrayShuffled(this.account.mnemonic),
      // // is verify button disabled?
      dVerifyButDisabled: true,
      // // error message
      dErrorMsg: '',
      // dMnemonicToVerify: Array(this.dMnemonicArray.length).fill(''),
      dMnemonicToVerify: Array(24).fill(''),
      // dShuffledMnemonic: this.getMnemonicArrayShuffled(this.dMnemonicArray),
    }
  },

  created() {
    this._pickedWordsCount = 0
  },

  methods: {
    verify() {
      const ok =
        JSON.stringify(this.dMnemonicToVerify.slice(0, this._pickedWordsCount)) ===
        JSON.stringify(this.dMnemonicArray.slice(0, this._pickedWordsCount))

      this.dErrorMsg = !ok ? 'Incorrect mnemonic phrase order.' : ''

      return ok
    },

    /**
     * @param {String} _word
     */
    pickWord(_word) {
      const mnemonic = this.findShuffledMnemonicByWord(_word, false)

      if (mnemonic) {
        this.dMnemonicToVerify[this._pickedWordsCount] = mnemonic.word
        this._pickedWordsCount++
        this.$set(mnemonic, 'disabled', true)

        // if all words are picked, enable verify button
        if (this._pickedWordsCount === this.dMnemonicToVerify.length) {
          this.dVerifyButDisabled = false
        }

        this.verify()
      }
    },

    /**
     * @param {int} _idx
     */
    deleteWord(_idx) {
      const word = this.dMnemonicToVerify[_idx]
      const mnemonic = this.findShuffledMnemonicByWord(word, true)

      if (mnemonic) {
        this.dMnemonicToVerify.splice(_idx, 1)
        this.dMnemonicToVerify.push('')

        this._pickedWordsCount--

        this.$set(mnemonic, 'disabled', false)

        this.dVerifyButDisabled = true

        this.verify()
      }
    },

    /**
     * @param {String} _word
     * @param {Boolean} _disabled
     * @return {Array}
     */
    findShuffledMnemonicByWord(_word, _disabled) {
      return this.dShuffledMnemonic.find((_item) => _item.word === _word && _item.disabled === _disabled)
    },

    /**
     * @param {String }_mnemonic Mnemonic phrase.
     * @return {{disabled: Boolean, word: String}[]}
     */
    getMnemonicArrayShuffled(_mnemonic) {
      // const mnemonicArray = this.$fWallet.getMnemonicArray(_mnemonic)
      const mnemonicArray = [
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
      ]

      // shuffle(mnemonicArray);
      mnemonicArray.sort()

      return mnemonicArray.map((_item) => {
        return {
          word: _item,
          disabled: false,
        }
      })
    },

    /**
     * @param {Event} _event
     */
    onShuffledMnemonicClick(_event) {
      const button = _event.target.closest('button')
      let word = ''

      if (button) {
        word = button.getAttribute('data-word')
        if (word) {
          this.pickWord(word)
        }
      }
    },

    /**
     * @param {Event} _event
     */
    onMnemonicToVerifyClick(_event) {
      const button = _event.target.closest('button')
      const elem = button ? button.closest('[data-idx]') : null
      let idx = -1

      if (elem && !button.disabled) {
        idx = parseInt(elem.getAttribute('data-idx'))
        if (idx > -1) {
          this.deleteWord(idx)
        }
      }
    },

    // onSubmitButClick() {},

    onVerifyButClick() {
      if (this._pickedWordsCount === 24 && this.verify()) {
        // save account
        this.$store.dispatch(ADD_ACCOUNT, this.account.keystore)
        // go to success view
        this.$emit('change-component', {
          detail: {
            from: 'mnemonic-phrase-verification',
            data: {
              // address: this.$fWallet.toChecksumAddress(this.account.keystore.address),
            },
          },
        })
      }
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
