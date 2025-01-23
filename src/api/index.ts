import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJzb3llb24yMDAzMTAxMEBnbWFpbC5jb20iLCJpZCI6InNveWVvbjIwMDMxMDEwQGdtYWlsLmNvbSIsImV4cCI6MTczNzUyNzEzMSwiZW1haWwiOiJzb3llb24yMDAzMTAxMEBnbWFpbC5jb20ifQ.4O7DW79bnOsKXkTXXTpz1WMMwAjmL1lToMmuBPwZI2XgmHwqcqYRWEADR8--s6uYMLr9jUD2iLACx57NUBb6bg';

localStorage.setItem('token', Token);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
