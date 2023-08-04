import { makeAutoObservable } from 'mobx';
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { API_URL } from '../http';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  role = '';
  reredner = false;
  errorModalState = false;
  errorText = '';
  constructor() {
    makeAutoObservable(this);
  }
  setRerender() {
    this.reredner = !this.reredner;
  }

  setAuth(bool: any) {
    this.isAuth = bool;
  }

  setUser(user: any) {
    this.user = user;
  }

  setRole(role: any) {
    this.role = role;
  }

  setLoading(bool: any) {
    this.isLoading = bool;
  }
  async showError() {
    if (this.errorModalState) {
      return;
    } else {
      this.errorModalState = true;
    }
    setTimeout(() => {
      this.hideError();
    }, 8000);
  }
  hideError() {
    this.errorModalState = false;
  }
  setTextError(textError: any) {
    this.showError();
    this.errorText = textError?.response?.data?.message || textError?.message;
  }
  setCustomErrorText(textError: any) {
    this.showError();
    this.errorText = textError;
  }

  async login(email: string, password: string, role: string) {
    try {
      const response = await AuthService.login(email, password, role);
      return this.loginUserFunc(response);
    } catch (e: any) {
      console.error('login error', e);
      return false;
    }
  }
  async loginGoogle(data: any) {
    try {
      return this.loginUserFunc(data);
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return false;
    }
  }
  async loginUserFunc(response: any) {
    await AsyncStorage.setItem('token', response.data.accessToken);
    this.setAuth(true);
    this.setUser(response.data.user || response.data.doctor);
    if (response.data.user) {
      this.setRole(response.data?.user.scenario);
      await AsyncStorage.setItem('role', response.data?.user.scenario);
      return 'user';
    } else {
      this.setRole(response.data?.doctor.scenario);
      await AsyncStorage.setItem('role', response.data?.doctor.scenario);
      return 'doctor';
    }
  }
  async registration(email: string, password: string, role: string) {
    try {
      const response = await AuthService.registration(email, password, role);
      return true;
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return e.response?.data?.message;
    }
  }

  async logout(): Promise<void> {
    try {
      await AuthService.logout();
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('role');
      this.setRole(undefined);
      this.setAuth(undefined);
      this.setUser(undefined);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    }
  }

  async checkAuth(): Promise<boolean | undefined> {
    this.setLoading(true);

    try {
      const localRole = await AsyncStorage.getItem('role');
      const checkDoctorRole = localRole === 'doctor';
      const response = await axios.get(`${API_URL}${checkDoctorRole ? '/doctorApi' : ''}/refresh`, {
        withCredentials: true,
      });
      await AsyncStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      if (response.data.user) {
        this.setUser(response.data.user);
        this.setRole(response.data?.user.scenario);
        await AsyncStorage.setItem('role', response.data?.user.scenario);
      } else {
        this.setUser(response.data.doctor);
        this.setRole(response.data?.doctor.scenario);
        await AsyncStorage.setItem('role', response.data?.doctor.scenario);
      }
      return true;
    } catch (e: any) {
      console.error(e.response?.data?.message);
      this.logout();
    } finally {
      this.setLoading(false);
    }
  }
}
