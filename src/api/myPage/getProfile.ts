import { api } from '../index';

// 회원 정보 조회 API 요청 함수
interface ProfileResponse {
  success: boolean;
  data: {
    profileImage: string;
    nickname: string;
  };
}

export async function getProfile(): Promise<ProfileResponse | null> {
  try {
    const response = await api.get('/members');

    if (response.data.success) {
      return response.data;
    } else {
      console.error('서버에서 실패 응답을 반환했습니다.');
      return null;
    }
  } catch (error) {
    console.error('프로필 데이터를 가져오는 중 오류 발생:', error);
    return null;
  }
}
