import axios from 'axios';
import { API_URL } from '../config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.push({
  request: (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
});

export const get = (endpoint, params = {}) => api.get(endpoint, { params });

export const post = (endpoint, data = {}) => api.post(endpoint, data);

export const put = (endpoint, data = {}) => api.put(endpoint, data);

export const patch = (endpoint, data = {}) => api.patch(endpoint, data);

export const deleteRequest = (endpoint) => api.delete(endpoint);

export default api;