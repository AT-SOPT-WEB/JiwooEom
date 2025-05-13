import axios from './axios';

export const updateNickname = (userId: number, nickname: string) =>
  axios.patch('/api/v1/users',
    { nickname },
    { headers: { userId }}
  );

export const getMyNickname = (userId: number) =>
  axios.get('/api/v1/users/me',
    { headers: { userId }}
);
