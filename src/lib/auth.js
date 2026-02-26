const TOKEN_KEY = "token";
const USER_TYPE_KEY = "userType";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUserType() {
  return localStorage.getItem(USER_TYPE_KEY) || null;
}

export function setAuth(token, userType) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_TYPE_KEY, userType);
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_TYPE_KEY);
}

export function isAuthenticated() {
  return Boolean(getToken());
}
