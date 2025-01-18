import { api } from "..";
import { AxiosError } from "axios";


export async function postLogin({
	email,
	password,
}: {
	email: string;
	password: string;
}) {
	try {
		const response = await api.post("/auth/login", {
			email: email,
			password: password,
		});
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw error;
		} else {
			throw new Error("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
		}
	}
}
