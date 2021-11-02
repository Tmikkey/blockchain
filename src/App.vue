<template>
  <div id="app">
    <router-view />

    <b-breakpoints @b-breakepoint-change="onFBreakpointChange">
      <b-breakpoint value="576px" code="small" />
      <b-breakpoint value="600px" code="data-table-mobile-view" />
      <b-breakpoint value="768px" code="menu-mobile" />
      <b-breakpoint value="769px" code="medium" />
      <b-breakpoint value="870px" code="account-transaction-list-dt-mobile-view" />
      <b-breakpoint value="890px" code="pairs-list-mobile-view" />
      <b-breakpoint value="992px" code="large" />
      <b-breakpoint value="1100px" code="validator-list-dt-mobile-view" />
    </b-breakpoints>
  </div>
</template>

<script>
import { SET_BREAKPOINT } from './store/mutations.type'
import BBreakpoint from '@/components/BBreakpoints/BBreakpoint'
import BBreakpoints from '@/components/BBreakpoints/BBreakpoints'
export default {
  name: 'App',
  components: { BBreakpoints, BBreakpoint },
  methods: {
    onFBreakpointChange(_event) {
      this.$store.commit(SET_BREAKPOINT, _event.detail)
    },
  },
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
