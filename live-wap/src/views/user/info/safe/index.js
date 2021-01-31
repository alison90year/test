import { Cell } from 'vant';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Cell.name]: Cell
  },
  data() {
    return {
      userinfo: this.$store.getters.userinfo
    };
  },
};