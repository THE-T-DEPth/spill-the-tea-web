import { api } from '../index';

// 프로필 이미지 변경 API 요청 함수
interface ChangeProfileImageResponse {
  success: boolean;
  message: string;
  profileImageUrl?: string;
}

// 프로필 이미지 변경 API 요청 함수
export async function changeProfileImage(
  file: File
): Promise<ChangeProfileImageResponse | null> {
  try {
    const formData = new FormData();
    formData.append('profile_image', file);

    const response = await api.put<ChangeProfileImageResponse>(
      '/members/image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.data.success) {
      return response.data;
    } else {
      console.error('프로필 이미지 변경 실패:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('프로필 이미지 변경 중 오류 발생:', error);
    return null;
  }
}
