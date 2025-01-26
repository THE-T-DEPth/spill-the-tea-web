import axios from 'axios';

const Token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJzb3llb24wMzEwMTBAbmF2ZXIuY29tIiwiaWQiOiJzb3llb24wMzEwMTBAbmF2ZXIuY29tIiwiZXhwIjoxNzM3ODIxMDM1LCJlbWFpbCI6InNveWVvbjAzMTAxMEBuYXZlci5jb20ifQ.83JlhjUJdPrlctEFzeQCRuZzBoBLEvja5DH0ZiF5PNV_kX337DzYDyCvnW5-To5hBbzID9s1SpH8TOIItttnvA';
const RefreshToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE3Mzc4MzIxMDB9.vqjIo_ajvi-wd0lfE91eaBWIIZPJ51HNoJYifeeR65EvKJaWQCEfXLWpuAoVjQQK8RPv8hF5w35B1CwyMasF4Q';

localStorage.setItem('token', Token);
localStorage.setItem('refreshToken', RefreshToken);

export const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10000,
	headers: {
		Authorization: `Bearer ${Token}`,
	},
});

// Token 만료 여부 확인 함수
function checkTokenExpiration(token: string): boolean {
	const payload = JSON.parse(atob(token.split('.')[1]));
	const exp = payload.exp * 1000;
	return Date.now() >= exp;
}

// Axios Request Interceptor
api.interceptors.request.use(async (config) => {
	const accessToken = localStorage.getItem('accessToken');
	const refreshToken = localStorage.getItem('refreshToken');

	// 토큰이 없는 경우 요청 진행
	if (!accessToken || !refreshToken) {
		return config;
	}

	// AccessToken 만료 여부 확인
	const isAccessTokenExpired = checkTokenExpiration(accessToken);

	if (isAccessTokenExpired) {
		try {
			// auth/reissue로 새 accessToken 요청
			const response = await axios.get(
				`${import.meta.env.VITE_BASE_URL}/auth/reissue`,
				{
					headers: { Authorization: `Bearer ${refreshToken}` },
				}
			);

			const newAccessToken = response.data.data.accessToken;

			// 새 accessToken 저장
			localStorage.setItem('accessToken', newAccessToken);
			config.headers.Authorization = `Bearer ${newAccessToken}`;
		} catch (error) {
			console.error('토큰 갱신 실패:', error);
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
			throw new Error('로그인이 만료되었습니다. 다시 로그인해주세요.');
		}
	} else {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});
