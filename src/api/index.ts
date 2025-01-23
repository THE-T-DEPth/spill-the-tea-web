import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJzb3llb24yMDAzMTAxMEBnbWFpbC5jb20iLCJpZCI6InNveWVvbjIwMDMxMDEwQGdtYWlsLmNvbSIsImV4cCI6MTczNzU1MjA0OSwiZW1haWwiOiJzb3llb24yMDAzMTAxMEBnbWFpbC5jb20ifQ.5nZXaXQJxoQxT1xNEL_LUwSGA05m-HjDnvlXWROdoYRSIXvfQJIntYRFWyl1weGttU4zDNaB2BHXsZbKZazj2w';

localStorage.setItem('token', Token);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
