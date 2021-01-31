import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'main',
    component: () => import('@/views/main/index.vue'),
    children:[
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/video',
        name: 'Vmain',
        component: () => import('@/views/video/index.vue')
      },
      {
        path: '/match',
        name: 'match',
        component: () => import('@/views/match/index.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
      },
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue')
  },
  {
    path: '/vdetail/:id',
    name: 'Vdetail',
    component: () => import('@/views/vdetail/index.vue')
  },
  {
    path: '/live/:id',
    name: 'live',
    component: () => import('@/views/live/index.vue')
  },
  {
    path: '/user/info',
    name: 'Uinfo',
    component: () => import('@/views/user/info/index.vue'),
    meta: {
      title: '个人资料',
      isLogin:true
    }
  },
  {
    path: '/user/info/nickname',
    name: 'Unickname',
    component: () => import('@/views/user/info/nickname/index.vue'),
    meta: {
      title: '个人资料',
      isLogin:true
    }
  },
  {
    path: '/user/info/safe',
    name: 'Usafe',
    component: () => import('@/views/user/info/safe/index.vue'),
    meta: {
      title: '账号与安全',
      isLogin:true
    }
  },
  {
    path: '/user/info/safe/change',
    name: 'Uchange',
    component: () => import('@/views/user/info/safe/change/index.vue'),
    meta:{
      isLogin:true
    }
  },
  {
    path: '/user/info/bankcard',
    name: 'Ubankcard',
    component: () => import('@/views/user/info/bankcard/index.vue'),
    meta: {
      title: '银行卡',
      isLogin:true
    }
  },
  {
    path: '/user/wallet',
    name: 'Uwallet',
    component: () => import('@/views/user/wallet/index.vue'),
    meta: {
      title:'钱包',
      isLogin:true
    }
  },
  {
    path: '/user/wallet/transactions',
    name: 'Utransactions',
    component: () => import('@/views/user/wallet/transactions/index.vue'),
    meta: {
      title:'账户明细',
      isLogin:true
    }
  },
  {
    path: '/user/tasks',
    name: 'Utasks',
    component: () => import('@/views/user/tasks/index.vue'),
    meta: {
      title:'任务',
      isLogin:true
    }
  },
  {
    path: '/user/following',
    name: 'Ufollowing',
    component: () => import('@/views/user/following/index.vue'),
    meta: {
      title:'我的关注',
      isLogin:true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/user/message',
    name: 'Umessage',
    component: () => import('@/views/user/message/index.vue'),
    meta: {
      title:'站内信',
      isLogin:true
    }
  },
  {
    path: '/user/message/detail',
    name: 'Umessage-detail',
    component: () => import('@/views/user/message/messageDetail.vue'),
    meta: {
      isLogin:true
    }
  },
  {
    path: '/user/settings',
    name: 'Usettings',
    component: () => import('@/views/user/settings/index.vue'),
    meta: {
      title:'设置'
    }
  },
  {
    path: '/user/settings/barrage',
    name: 'Usettings',
    component: () => import('@/views/user/settings/barrage/index.vue'),
    meta: {
      title:'弹幕设置'
    }
  },
  {
    path: '/user/settings/aboutus',
    name: 'Uaboutus',
    component: () => import('@/views/user/settings/aboutus/index.vue'),
    meta: {
      title:'关于我们'
    }
  },
  {
    path: '/user/anchor',
    name: 'Uanchor',
    component: () => import('@/views/user/anchor/index.vue'),
    meta: {
      title:'主播中心',
      isLogin:true
    }
  },
  {
    path: '/user/anchor/notice',
    name: 'UanchorNotice',
    component: () => import('@/views/user/anchor/notice.vue'),
    meta: {
      title:'直播公告',
      isLogin:true
    }
  },
  {
    path: '/user/anchor/apply',
    name: 'UanchorApply',
    component: () => import('@/views/user/anchor/apply.vue'),
    meta: {
      title:'申请主播',
      isLogin:true
    }
  },
  {
    path: '/*',
    redirect: '/home'
  }
];

/* eslint-disable no-undef */
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});


// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

router.beforeEach((to, from, next) => {
  //  判断是否需要登录后才能访问
  const userinfo = sessionStorage.getItem('userinfo');
  if(to.matched.some(res => res.meta.isLogin)) {
    if (userinfo) {
      next();
    }else{
      next('/login');
    }
  }else {
    next();
  }
});

export default router;
