const SESSION_KEYS = {
  USER: 'user',
  ROLE: 'role',
  AUTH_TOKEN: 'authToken'
};

export const saveAuthSession = ({ user, role, token }) => {
  sessionStorage.setItem(SESSION_KEYS.USER, user);
  sessionStorage.setItem(SESSION_KEYS.ROLE, role);
  sessionStorage.setItem(SESSION_KEYS.AUTH_TOKEN, token);
};

export const clearAuthSession = () => {
  sessionStorage.removeItem(SESSION_KEYS.USER);
  sessionStorage.removeItem(SESSION_KEYS.ROLE);
  sessionStorage.removeItem(SESSION_KEYS.AUTH_TOKEN);
};

export const getStoredUser = () => sessionStorage.getItem(SESSION_KEYS.USER);
export const getStoredRole = () => sessionStorage.getItem(SESSION_KEYS.ROLE);
export const getStoredToken = () => sessionStorage.getItem(SESSION_KEYS.AUTH_TOKEN);

export const isLoggedIn = () => Boolean(getStoredToken());

export const SESSION_STORAGE_KEYS = SESSION_KEYS;
