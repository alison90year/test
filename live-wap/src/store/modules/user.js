import { APIs } from '@/http';
import { getSessionStorage, setSessionStorage, removeSessionStorage} from '@/utils/storage';


const initState = () => {
  let userinfo = getSessionStorage('userinfo') ? getSessionStorage('userinfo') : null;
  let coins = getSessionStorage('coins') ? getSessionStorage('coins') : 0;
  let bankinfo = getSessionStorage('bankinfo') ? getSessionStorage('bankinfo') : null;
  return {
    userinfo, coins, bankinfo
  };
};

const state = initState();

const mutations = {
  SET_USERINFO: (state, userinfo) => {
    setSessionStorage('userinfo',userinfo);
    state.userinfo = userinfo;
  },
  SET_COINS: (state, coins) => {
    setSessionStorage('coins',coins);
    state.coins = coins;
  },
  DEL_USERINFO:(state) => {
    removeSessionStorage('userinfo');
    state.userinfo = null;
  },
  SET_BANKINFO: (state, bankinfo) => {
    setSessionStorage('bankinfo',bankinfo);
    state.bankinfo = bankinfo;
  },
};

const actions = {

  // 获取用户信息
  getUserInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      APIs.ugetUser(data)
        .then(response => {
          if(response.code === '200') {
            commit('SET_USERINFO', response.data);
            resolve(response);
          }else {
            commit('DEL_USERINFO');
            reject(response);
          }
        })
        .catch(error => {
          commit('DEL_USERINFO');
          reject(error);
        });
    });
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
};
