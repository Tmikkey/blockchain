<template>
  <vue-friendly-iframe :src="hello" @load="onLoad" />
</template>

<script>
import VueFriendlyIframe from 'vue-friendly-iframe'

export default {
  components: [VueFriendlyIframe],
  props: {
    news: {
      type: Object,
      default: null,
    },
  },
  watch: {
    $route(_value) {
      // eslint-disable-next-line no-unused-vars
      const { idnews } = _value.params
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
