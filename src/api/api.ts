/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
import axios from 'axios';
import { Position } from '../types/Position';
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

interface PosistionResp {
  success: boolean
  positions: Position[]
}

export const getUsers = (page = 1, count = 6): Promise<UsersResp> => {
  return axios.get(`/users?page=${page}&count=${count}`).then(res => res.data);
};

export const getUserById = (userId: number) => {
  return axios.get(`/users/${userId}`).then(res => res.data);
};

export const getPositions = (): Promise<PosistionResp> => {
  return axios.get('/positions').then(res => res.data);
};

export const addUser = async (user: FormData) => {
  const { data: { token } } = await axios.get('/token');

  return axios.post('/users', user, { headers: { Token: token } })
    .then(res => res.data.user_id);
};
