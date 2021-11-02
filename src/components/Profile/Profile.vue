<template>
  <div class="profile">
    <div class="left-col">
      <ChangePicture />
    </div>
    <div class="right-col">
      <ChangeInfo />
      <ChangePassword />
    </div>
  </div>
</template>

<script>
import BSelect from '@/components/UKit/BSelect'
import ChangeInfo from '@/components/Profile/ChangeInfo'
import ChangePassword from '@/components/Profile/ChangePassword'
import ChangePicture from '@/components/Profile/ChangePicture'
import _ from 'lodash'
export default {
  name: 'ProfileCard',
  components: { ChangeInfo, ChangePassword, ChangePicture },
  data() {
    return {
      changed: false,
      user: {
        name: 'John Dunkan',
        email: 'bcw@index.com',
      },
    }
  },
  computed: {
    // store the original form data
    originalForm() {
      return this.$store.state.user
    },
  },
  watch: {
    // by watching the original form data
    // create a clone of original form data
    // and assign it to the form data variable
    originalForm() {
      this.form = _.cloneDeep(this.originalForm)
    },

    // watch the changes on the form data variable
    form: {
      handler() {
        // using lodash to compare original form data and current form data
        this.changed = !_.isEqual(this.user, this.originalForm)
      },
      // useful to watch deeply nested properties on a data variable
      deep: true,
    },
  },

  created() {
    // dispatch an action to fill the store with data
    this.$store.dispatch('init')
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
