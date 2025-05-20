import axios from './axios';

export const searchMembers = (userId: number, query: string) => {
  return axios.get(`/api/v1/users?keyword=${query.trim()}`, 
  { headers: { userId }});
};
