<template>
  <div class="message-detail-page">
    <header-nav :title="title"></header-nav>
    <div class="message-detail-container pd-top-13">
      <p class="message-title">{{message.title}}</p>
      <p class="message-content">{{message.content}}</p>
      <p class="message-send-time">{{message.sendTime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    headerNav: () => import('@/views/user/components/header'),
  },

  data () {
    return {
      title: '站内信',
      message: {}
    };
  },

  created () {
    this.message = JSON.parse(window.localStorage.getItem('message'));
  },
  methods: {

  }
};
</script>
<style lang="stylus">
.message-detail-page
  padding 20px 30px
  .message-title
    font-size 30px
    font-weight 500
    color $theme-txt-color
  .message-content
    margin-top 30px
    line-height 1.5
    font-size 26px
    color $theme-txt-color4
  .message-send-time
    margin-top 30px
    text-align right
    font-size 26px
    color $theme-txt-color4
</style>