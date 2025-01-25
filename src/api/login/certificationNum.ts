import { api } from "../index"; // Axios 인스턴스 import

// 인증번호 검증 API
export async function postVerify(code: string): Promise<{ success: boolean; tempPassword?: string; message?: string }> {
	try {

		const response = await api.post(`/mails/password/verify`, null, {
			params: { code },
		});

		if (response.data?.success) {
			return {
				success: true,
				tempPassword: response.data?.data?.temp_password,
			};
		}

		return {
			success: false,
			message: response.data?.data?.message || "인증에 실패했습니다.",
		};
	} catch (error) {
		console.error("verifyCertificationNumber 중 오류 발생", error);
		throw error;
	}
}
