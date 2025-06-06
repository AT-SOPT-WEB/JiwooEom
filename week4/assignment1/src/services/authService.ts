import axios from './axios';

export const signIn = (loginId: string, password: string) =>
  axios.post('/api/v1/auth/signin', {
    loginId,
    password,
  });

export const signUp = (loginId: string, password: string, nickname: string) =>
  axios.post('/api/v1/auth/signup', {
    loginId,
    password,
    nickname,
  });