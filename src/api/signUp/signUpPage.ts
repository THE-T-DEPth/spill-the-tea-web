import { api } from '../index';

export async function postRegisterUser(email: string, password: string, name: string, nickname: string) {
	try {
		const response = await api.post('/auth/join', {
			email,
			password,
			name,
			nickname,
		});

		console.log('회원가입 응답 데이터:', response.data);

		if ((response.status === 200 || response.status === 201) && response.data.success) {

			return response.data;
		} else {

			throw new Error(response.data?.message || '회원가입에 실패했습니다.');
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
			params: { nickname },
		});

		if (response.status === 200) {
			console.log('닉네임 중복 확인 반환값:', response.data);
			return response.data;
		} else {
			throw new Error(`HTTP 오류 발생: ${response.status}`);
		}
	} catch (error) {
		console.error('닉네임 중복 체크 중 오류 발생:', error);
		throw error;
	}
}