import { api } from '../index';

// 회원 탈퇴 API 요청 함수
interface DeleteProfileResponse {
  success: boolean;
  message: string;
}

export async function deleteProfile(): Promise<DeleteProfileResponse | null> {
  try {
    const response = await api.delete<DeleteProfileResponse>('/auth/exit');
    if (response.data.success) {
      return response.data;
    } else {
      console.error('회원 탈퇴 실패:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('회원 탈퇴 처리 중 오류 발생:', error);
    return null;
  }
}
