<template>
  <div class="circle">
    {{ title[0] }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
