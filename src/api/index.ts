import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJzcGlsbHRoZXRlYUBnbWFpbC5jb20iLCJpZCI6InNwaWxsdGhldGVhQGdtYWlsLmNvbSIsImV4cCI6MTczNzQ3NTUwNCwiZW1haWwiOiJzcGlsbHRoZXRlYUBnbWFpbC5jb20ifQ.EYQvz8Oz-c-gu-ue6BTQqIpYEzdbHiXOf9TecxNhhMi-Yf-gSDTfCe5cutia0-q1Bjbs3-7AxsxmtoWWGPS64w';
const RefreshToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE3Mzc0MTYxNjB9.w3WeJjvZLZEtLa2af0vrN--oed4YdXYeFXj_rF001oyGASj-Wb1V1Yq6XWhM9IRuabSrod11N-YR3O63OLywzw';

localStorage.setItem('token', Token);
localStorage.setItem('refreshToken', RefreshToken);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
