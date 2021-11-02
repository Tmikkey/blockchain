<template>
  <div class="profile_info">
    <form @submit.prevent="onSubmit">
      <div class="b-textinput name">
        <p class="description">Display name</p>
        <input v-model="user.name" type="text" class="" />
      </div>
      <div class="b-textinput name">
        <p class="description">Email address</p>
        <input v-model="user.email" type="text" class="" />
      </div>
      <div class="b-textinput name">
        <p class="description">Сurrency</p>
        <BSelect
          :options="['U.S. Dollar (USD)', 'European Euro (EUR)', 'Swiss Franc (CHF)', 'Japanese Yen (JPY)']"
          :default="'U.S. Dollar (USD)'"
          class="select"
          @input="user.currency = $event"
        />
      </div>
      <button class="purple-button" :disabled="!changed">Save changes</button>
    </form>
  </div>
</template>

<script>
import BSelect from '@/components/UKit/BSelect'
import { mapState } from 'vuex'
import { MODULE_NAME as AUTH, CHANGE_INFO_REQUEST } from '@/store/modules/profile'

import _ from 'lodash'
export default {
  name: 'ProfileCard',
  components: { BSelect },
  data() {
    return {
      changed: false,
      user: {
        name: 'John Dunkan',
        email: 'bcw@index.com',
        currency: '',
      },
    }
  },
  computed: {
    originalForm() {
      return this.$store.state.user
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
    onSubmit() {
      this.$store.dispatch(CHANGE_INFO_REQUEST, {
        email: this.email,
        name: this.user.name,
        currency: this.user.currency,
      })
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
