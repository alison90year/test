<template>
  <div id="app">
    <router-view v-if="isShow" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    }
  }
};
</script>

<style lang="stylus">
@import './styles/common/common.styl';
@import './styles/index.styl';
</style>
