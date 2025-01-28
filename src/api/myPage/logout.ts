import { api } from '../index';

interface LogoutResponse {
  success: boolean;
  data: {
    message: string;
  };
}

// 로그아웃 API 요청 함수
export async function logout(
  navigate: (path: string) => void
): Promise<string | null> {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || !refreshToken) {
      throw new Error('로그아웃 실패: 토큰이 존재하지 않습니다.');
    }

    //로그아웃 요청
    try {
      const response = await api.delete<LogoutResponse>('/auth/logout', {
        data: {
          accessToken,
          refreshToken,
        },
      });
      console.log('서버 로그아웃 성공:', response.data.data.message);
    } catch (error) {
      console.log('서버 로그아웃 요청 실패:', error);
    }

    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    console.log('로컬 스토리지 토큰 삭제 완료');
    navigate('/');

    return '로그아웃 성공';
  } catch (error) {
    console.error('로그아웃 처리 중 오류 발생:', error);
    return null;
  }
}
