import Vue from 'vue';
import router from './router';
import store from './store';
import http from './http';
import App from './App.vue';
import 'lib-flexible';
import 'vant/lib/icon/local.css';
import {Toast, Dialog, Lazyload, List} from 'vant';

Vue.use(Dialog);
Vue.use(Lazyload);
Vue.use(List);

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$toast = Toast;

Vue.filter('timeFormat', function (value) {
  if (!value) return '00:00';
  let min = Math.floor(value / 60);
  min = min < 10 ? '0' + min : min; 
  let s = (value % 60 / 100).toFixed(2).slice(-2); 
  return min + ' : ' + s;
});

/**
 * 判断一个对象是否所有属性都有值
 * @param {Object} form 目标对象
 * @param {Array} except 排除该数组中的属性名
 * @returns {Boolean}
 */
Vue.prototype.$isFormReady = function (form, except) {
  for (let i in form) {
    if (except && except.indexOf(i) !== -1) continue;
    if (!form[i]) return true;
  }
  return false;
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
