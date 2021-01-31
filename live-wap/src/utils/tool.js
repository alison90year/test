import md5 from 'js-md5';

//  防抖
export function debounce(fn, delay) {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}


// 密码加密
export function encodePass(pass, salt) {
  let newpass = md5(pass).toUpperCase();
  let passarr = newpass.split('');
  let saltarr = salt.split('');
  let newstr = '';
  for (let i = 0;i < saltarr.length;i++) {
    newstr += passarr[i * 2] + saltarr[i] + passarr[i * 2 + 1];
  }
  return newstr;
}


/**
 * 清楚一个对象所有属性前后是否有空白字符串
 * @param {Object} form 目标对象
 * @param {Array} except 排除该数组中的属性名
 */
export function formTrim (form, except) {
  let obj = form;
  console.log(obj);
  for (let i in form) {
    if (except && except.indexOf(i) !== -1) continue;
    if(Object.prototype.toString.call(obj[i]) === '[object String]') {
      obj[i] = obj[i].trim();
    }
  }
  return obj;
}
