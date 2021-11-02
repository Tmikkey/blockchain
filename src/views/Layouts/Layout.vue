<template>
  <div class="view-layout">
    <Menu use-bottom-menu />
    <div class="narrow-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu'
import { MODULE_NAME as AUTH } from '@/store/modules/auth'

export default {
  name: 'Layout',
  components: { Menu },
  mounted() {
    if (this.$store.state[AUTH].isAuthenticated) {
      // this.$store.dispatch(FETCH_PROFILE)
    }
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
