<template>
  <div class="lottery">
    <h1 class="title lottery__title">{{name}} page</h1>
    <SectionMain />
    <SectionSteps />
  </div>
</template>


<style lang="scss" scoped>
  @import "Lottery";
</style>


<script>
  import SectionMain from '@/components/Sections/Main'
  import SectionSteps from '@/components/Sections/Steps'

  export default {
    components: {
      SectionMain,
      SectionSteps,
    },
    data: () => ({
      name: 'Lottery',
    })
  }
</script>
