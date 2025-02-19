import type { AxiosError } from 'axios';
import { API } from '@/utils/constants/api';
import axios from 'axios';

export const api = axios.create({
  baseURL: API.BASE_URL
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ reason: string; success: boolean }>) => {
    if (error.response) {
      throw new Error(error.response.data.reason);
    }
    return Promise.reject(error);
  }
);
