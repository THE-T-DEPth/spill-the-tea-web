import { api } from '../index';

// 회원가입 API
export async function postRegisterUser(email: string, password: string, name: string, nickname: string) {
	try {
		// POST 요청으로 회원가입 데이터 전송
		const response = await api.post('/auth/join', {
			email,
			password,
			name,
			nickname
		});

		if (response.status === 200 && response.data.success) {
			console.log('회원가입 성공:', response.data);
			return response.data;
		} else {
			throw new Error(`회원가입 실패: ${response.data?.data?.message || '알 수 없는 오류'}`);
		}
	} catch (error) {
		console.error('회원가입 중 오류 발생:', error);
		throw error;
	}
}
// 닉네임 중복 체크 API
export async function getcheckNicknameAvailability(nickname: string): Promise<{ success: boolean; data: { availability: boolean } }> {
	try {
		const response = await api.get(`/auth/nicknames`, {
			params: { nickname }, // GET 요청에 쿼리 파라미터 전달
		});

		if (response.status === 200) {
			console.log('닉네임 중복 확인 반환값:', response.data); // 응답 로깅
			return response.data;
		} else {
			throw new Error(`HTTP 오류 발생: ${response.status}`);
		}
	} catch (error) {
		console.error('닉네임 중복 체크 중 오류 발생:', error);
		throw error;
	}
}