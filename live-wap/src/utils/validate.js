// 验证密码
export function isPassword(value) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
  return reg.test(value);
}

// 验证手机号
export function isPhone(value) {
  const reg = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
  return reg.test(value);
}

// 验证验证码
export function isCode(value) {
  const reg = /^\d{6}$/;
  return reg.test(value);
}

// 验证邮箱
export function isEmail(value) {
  const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return reg.test(value);
}

// 验证银行卡号
export function isBankCard(value) {
  const reg = /^[0-9]{8,19}$/;
  return reg.test(value);
}