<template>
  <div class="transactions-page">
    <header-nav :title="$route.meta.title"></header-nav>
  </div>
</template>

<script>
export default {
  components:{
    headerNav: () => import('@/views/user/components/header')
  }
};
</script>
<style lang="stylus">
@import './index.styl';
</style>