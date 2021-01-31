import userNav from './userNav';
import { Cell, Image as VanImage } from 'vant';
import { APIs } from '@/http';
import { getSessionStorage } from '@/utils/storage';
import { mapGetters } from 'vuex';

export default {
  components:{
    [Cell.name]: Cell,
    [VanImage.name]: VanImage
  },
  computed:{
    ...mapGetters(['userinfo','coins'])
  },
  data() {
    return{
      userNav,
    };
  },
  created() {

    // 判断是否登录 登录后获取最新用户信息
    if(this.userinfo && getSessionStorage('userinfo')) {
      this.$store.dispatch('user/getUserInfo',{userId:this.userinfo.userId});
      this.getCoins();
    }

  },
  methods:{

    // 获取用户分数
    getCoins() {
      APIs.getBalance().then(res => {
        if(res.code === '200') {
          this.$store.commit('user/SET_COINS',res.data);
        }
      });
    }
  }
};
