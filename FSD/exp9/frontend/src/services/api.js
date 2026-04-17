import axios from 'axios';
import { getStoredToken } from './session';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const api = axios.create({
  baseURL: API_BASE_URL
});

api.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers.Authorization = `Basic ${token}`;
  }

  return config;
});

export const buildBasicToken = (username, password) => window.btoa(`${username}:${password}`);

export const fetchUserProfile = () => api.get('/api/user/profile');

export const fetchAdminDashboard = () => api.get('/api/admin/dashboard');

export const authenticateAndResolveRole = async (username, password) => {
  const token = buildBasicToken(username, password);
  const authHeader = { Authorization: `Basic ${token}` };

  const profileResponse = await api.get('/api/user/profile', {
    headers: authHeader
  });

  let role = 'USER';

  try {
    await api.get('/api/admin/dashboard', {
      headers: authHeader
    });
    role = 'ADMIN';
  } catch (error) {
    const status = error.response?.status;
    if (status !== 401 && status !== 403) {
      throw error;
    }
  }

  return {
    user: profileResponse.data?.username || username,
    role,
    token,
    profile: profileResponse.data
  };
};

export default api;
