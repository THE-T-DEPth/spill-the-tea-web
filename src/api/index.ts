import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJzb3llb24yMDAzMTAxMEBnbWFpbC5jb20iLCJpZCI6InNveWVvbjIwMDMxMDEwQGdtYWlsLmNvbSIsImV4cCI6MTczNjkyMzY4MiwiZW1haWwiOiJzb3llb24yMDAzMTAxMEBnbWFpbC5jb20ifQ.BprTLoRgTcL5hTIaopHtA1qkJPMfXInnqKx72jOIdYBO6_gzVxDlFsB28WpXjF5TZOLYuojRBO1rSfOZaYLmNg';

localStorage.setItem('token', Token);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
