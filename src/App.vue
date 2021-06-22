<template>
  <div :class="this.lotteryName">

    <div class="nav">
      <router-link to="/">Lottery</router-link> |
      <router-link to="/raffle">Raffle</router-link> |
      <router-link to="/account">Account</router-link>
    </div>

    <component :is="layout">
      <router-view/>
    </component>

  </div>
</template>

<style lang="scss">
  .#{$lottery_name} {
    .wrapper {
      position: relative;
      min-height: 300px;
    }
    .title {
      font-size: 50px;
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>


<script>
import MainLayout from '@/layouts/MainLayout';
import AccountLayout from '@/layouts/AccountLayout';
import EmptyLayout from '@/layouts/EmptyLayout';

export default {
  components: {
    EmptyLayout,
    MainLayout,
    AccountLayout
  },
  data: () => ({
    lotteryName: 'battleCoupons',
    rtl: false,
  }),
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  mounted: function() {
    // RTL first try
    // const hash = location.search.replace(/\?/, ""),
    //       hashArray = location.pathname.split('/');
    //
    // this.rtl = hash === 'rtl';
    //
    // if(this.rtl) {
    //   require("@/assets/styles/rtl.scss/");
    // } else {
    //   require("@/assets/styles/styles.scss/");
    // }
  }
}
</script>
