import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const API_URL = process.env.EXPO_PUBLIC_API_URL;
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${await AsyncStorage.getItem('token')}`;
  return config;
});

export default $api;
