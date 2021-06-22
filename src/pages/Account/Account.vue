<template>
  <div class="account">
    <h1 class="title account__title">{{name}} page</h1>
  </div>
</template>


<style lang="scss" scoped>
  @import "Account";
</style>


<script>
  export default {
    data: () => ({
      name: 'Account',
    })
  }
</script>
