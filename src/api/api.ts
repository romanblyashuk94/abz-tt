import axios from 'axios';
import { User } from '../types/User';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

interface UsersResp {
  success: boolean,
  total_pages: number,
  total_users: number,
  count: number,
  page: number,
  links: {
    next_url: string | null
    prev_url: string | null
  }
  users: User[]
}

export const getUsers = (page = 1, count = 6): Promise<UsersResp> => {
  return axios.get(`/users?page=${page}&count=${count}`).then(res => res.data);
};
