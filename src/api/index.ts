import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJzb3llb24wMzEwMTBAbmF2ZXIuY29tIiwiaWQiOiJzb3llb24wMzEwMTBAbmF2ZXIuY29tIiwiZXhwIjoxNzM3MjkxOTU0LCJlbWFpbCI6InNveWVvbjAzMTAxMEBuYXZlci5jb20ifQ.LS-vUdIlaajJww9Y1Y6-fieIFozZdmy-Hgdgw56ekmmsGiu622Uc6tBZhQWld3WrmsQYOD98Av0O_AE8f2Appg';
localStorage.setItem('token', Token);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
