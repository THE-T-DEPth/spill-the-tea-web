import { api } from '../index';

// 이메일 중복 체크 API
export async function getCheckEmailAvailability(email: string) {
	try {
		const response = await api.get(`/auth/emails`, {
			params: { email },
		});
		if (response.status === 200) {
			console.log('이메일 중복 체크 반환값:', response.data);
			return response.data;
		} else {
			throw new Error(`HTTP 오류 발생: ${response.status}`);
		}
	} catch (error) {
		console.error('이메일 중복 체크 중 오류 발생:', { email, error });
		throw error;
	}
}
// 인증번호 전송 API
export async function getVerificationCode(email: string) {
	try {
		// 인증번호 전송 API 호출
		const response = await api.get(`/mails/join`, {
			params: { email },
		});
		if (response.status === 200) {
			console.log('인증번호 전송 성공:', response.data);
			return response.data;
		} else {
			throw new Error(`HTTP 오류 발생: ${response.status}`);
		}
	} catch (error) {
		console.error('인증번호 전송 중 오류 발생:', { email, error });
		throw error;
	}
}

// 인증번호 확인 API
export async function getVerifyEmailCode(code: string) {
	try {

		const response = await api.get(`/mails/join/verify`, {
			params: { code },
		});
		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error(`HTTP 오류 발생: ${response.status}`);
		}
	} catch (error) {
		console.error('인증번호 확인 중 오류 발생:', { code, error });
		throw error;
	}
}
