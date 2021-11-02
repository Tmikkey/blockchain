<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu'
export default {
  name: 'Auth',
  components: { Menu },
}
</script>

<style lang="scss">
@import 'style';
</style>
