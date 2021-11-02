<template>
  <div class="hamburger-switch" role="switch" :class="[cCssClass, `thickness${thickness}`]" @click="toggle">
    <div class="cont">
      <div class="l1" />
      <div v-if="!twoLines" class="l2" />
      <div class="l3" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false,
    },
    thickness: {
      type: String,
      default: '1',
    },
    twoLines: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      dOn: this.on,
    }
  },

  computed: {
    cCssClass() {
      return {
        on: this.dOn,
      }
    },
  },

  watch: {
    dOn() {
      if (this.dOn) {
        this.$emit('hamburger-switch-on')
      } else {
        this.$emit('hamburger-switch-off')
      }
    },
  },

  methods: {
    toggle() {
      this.dOn = !this.dOn
    },
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
