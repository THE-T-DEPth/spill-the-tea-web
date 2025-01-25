import { api } from "../index";

export async function getPassword(data: { email: string }): Promise<string | null> {
	try {

		const response = await api.get(`/mails/password`, {
			params: { email: data.email },
		});

		if (response.data?.success) {
			return response.data?.data?.code;
		}
		return null;
	} catch (error) {
		console.error("getPassword 중 오류 발생", error);
		throw error;
	}
}
