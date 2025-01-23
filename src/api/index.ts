import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJzb3llb24wMzEwMTBAbmF2ZXIuY29tIiwiaWQiOiJzb3llb24wMzEwMTBAbmF2ZXIuY29tIiwiZXhwIjoxNzM3NjAwMzE4LCJlbWFpbCI6InNveWVvbjAzMTAxMEBuYXZlci5jb20ifQ.a2TV9enJvK7zAozfpi_Wi5G3oNou3wRv9jsRizoHbsywKcAAZYsZlRnYK9kguRzDEGHiYFyzoZTCPx-2uKxQ6A';

localStorage.setItem('token', Token);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
