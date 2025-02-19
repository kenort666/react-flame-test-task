import { API } from '@/utils/constants/api';
import axios from 'axios';

export const api = axios.create({
  baseURL: API.BASE_URL
});
