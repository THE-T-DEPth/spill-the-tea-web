import { api } from "../index";

// 비밀번호 변경 API
export async function putChangePassword(email: string, password: string): Promise<{ success: boolean; message?: string }> {
	try {
		const response = await api.put(`/auth/password`, { email, password });

		if (response.data?.success) {
			return {
				success: true,
				message: response.data?.data?.message || "비밀번호 변경 완료",
			};
		}

		return {
			success: false,
			message: response.data?.data?.message || "비밀번호 변경에 실패했습니다.",
		};
	} catch (error) {
		console.error("changePassword 중 오류 발생", error);
		throw error;
	}
}
