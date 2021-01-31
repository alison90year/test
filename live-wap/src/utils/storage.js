export function getSessionStorage(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export function setSessionStorage(key,value) {
  sessionStorage.setItem(key,JSON.stringify(value));
}

export function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key,value) {
  localStorage.setItem(key,JSON.stringify(value));
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}