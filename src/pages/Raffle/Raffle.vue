<template>
  <div class="raffle">
    <h1 class="title raffle__title">{{name}} page</h1>
  </div>
</template>


<style lang="scss" scoped>
  @import "Raffle";
</style>


<script>
  export default {
    data: () => ({
      name: 'Raffle',
    })
  }
</script>
