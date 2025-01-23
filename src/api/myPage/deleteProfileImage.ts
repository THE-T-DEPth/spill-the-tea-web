import { api } from '../index';

// 프로필 이미지 삭제 API 요청 함수
interface DeleteProfileImageResponse {
  success: boolean;
  data: {
    message: string;
  };
}

export async function deleteProfileImage(): Promise<DeleteProfileImageResponse | null> {
  try {
    const response =
      await api.delete<DeleteProfileImageResponse>('/members/image');
    if (response.data.success) {
      return response.data;
    } else {
      console.error('프로필 이미지 삭제 실패:', response.data.data.message);
      return null;
    }
  } catch (error) {
    console.error('프로필 이미지 삭제 중 오류 발생:', error);
    return null;
  }
}
