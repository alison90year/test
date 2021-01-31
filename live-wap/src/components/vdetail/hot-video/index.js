export default {
  name: 'hot-video',
  inject: ['reload'],
  components: {
  
  },
  props:{
    data: {
      type: Object,
      default:{},
    }
  },
  data() {
    return {
     
    };
  },
  created() {

  },
  methods: {
    toPlay() {
      let routeUrl = this.$router.resolve({ path: `/vdetail/${this.data.videoId}`});
      window.open(routeUrl.href,'_self');
      this.reload();
    }
  },
};
