import { Tab, Tabs, Button, NumberKeyboard} from 'vant';
import { APIs } from '@/http';

export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [NumberKeyboard.name]: NumberKeyboard
  },
  data() {
    return {
      tabActive: 0,  // 控制tab显示的索引
      amountActive: 0, // 控制充值金额焦点class显示
      numberKeyBoardShow: false, // 控制数字键盘显示
      amountList:[
        { amount:10, coin:100 },
        { amount:50, coin:500 },
        { amount:100, coin:1000 }
      ],
      topUpAmount: ''  // 充值金额
    };
  },
  created() {
    this.getPayInfo();
  },
  methods: {

    // 点击其他金额输入框时触发
    tapAmountInput() {
      // 设置焦点class 初始化金额 弹出数字输入框
      this.amountActive = 3;
      this.topUpAmount = '';
      this.numberKeyBoardShow = true;
    },

    // 点击固定金额时触发
    tapAmount(item,index) {
      this.amountActive = index;
      this.topUpAmount = item.amount.toString();
    },

    // 获取支付初始数据
    getPayInfo() {
      APIs.getpayinfo().then(res => {
        console.log(res);
      });

    }
  }
};