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

api.interceptors.request.use(async (config) => {
	// `config.url`을 통해 특정 요청에만 토큰 추가
	if (config.url !== "/post") {
		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");

		if (accessToken && checkTokenExpiration(accessToken)) {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_BASE_URL}/auth/reissue`,
					{
						headers: { Authorization: `Bearer ${refreshToken}` },
					}
				);
				const newAccessToken = response.data.data.accessToken;
				localStorage.setItem("accessToken", newAccessToken);
				config.headers.Authorization = `Bearer ${newAccessToken}`;
			} catch (error) {
				console.error("토큰 갱신 실패:", error);
				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
				throw new Error("로그인이 만료되었습니다. 다시 로그인해주세요.");
			}
		} else if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
	}
	return config;
});

