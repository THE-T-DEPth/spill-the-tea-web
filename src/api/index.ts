import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJrc3lnaXJ1QGdtYWlsLmNvbSIsImlkIjoia3N5Z2lydUBnbWFpbC5jb20iLCJleHAiOjE3Mzc0MDgzNjAsImVtYWlsIjoia3N5Z2lydUBnbWFpbC5jb20ifQ.3vbJFaErpSyRyaM12Pn2or282M2ioL3Uwy1h7XqK1Kgife5xc7p8ozI9JxeCXCjdOelgNByy2QFGBz7XMn2_dg';
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
