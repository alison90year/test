
<template>
  <div class="aboutus-page">
    <header-nav :title="$route.meta.title"></header-nav>
    <div class="aboutus-container pd-top-13"></div>
  </div>
</template>

<script>
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
  },

  data() {
    return {
 
    };
  },

  created() {

  },
  methods:{
    
  }
};
</script>
