import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10000,
});

// Token 만료 여부 확인 함수
function checkTokenExpiration(token: string): boolean {
	try {
		const payload = JSON.parse(atob(token.split(".")[1]));
		const exp = payload.exp * 1000;
		return Date.now() >= exp;
	} catch (error) {
		console.error("유효하지 않은 토큰 형식입니다:", error);
		return true; // 토큰이 유효하지 않다고 가정
	}
}

// Axios Request Interceptor
api.interceptors.request.use(async (config) => {
	const accessToken = localStorage.getItem("accessToken");
	const refreshToken = localStorage.getItem("refreshToken");

	if (!accessToken || !refreshToken) {
		return config; // 토큰이 없으면 요청 진행
	}

	const isAccessTokenExpired = checkTokenExpiration(accessToken);

	if (isAccessTokenExpired) {
		try {
			const response = await api.get("/auth/reissue", {
				headers: { Authorization: `Bearer ${refreshToken}` },
			});

			const newAccessToken = response.data.data.accessToken;

			localStorage.setItem("accessToken", newAccessToken);
			config.headers.Authorization = `Bearer ${newAccessToken}`;
		} catch (error) {
			console.error("토큰 갱신 실패:", error);

			// 토큰 삭제 및 로그인 페이지로 리다이렉트
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
			window.location.href = "/login"; // 로그인 페이지로 리다이렉트
			throw error;
		}
	} else {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});
