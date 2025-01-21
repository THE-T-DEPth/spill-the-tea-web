import { api } from '../index';

interface LogoutResponse {
  success: boolean;
  data: {
    message: string;
  };
}

// 로그아웃 API 요청 함수
export async function logout(): Promise<string | null> {
  try {
    const accessToken = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || !refreshToken) {
      throw new Error('로그아웃 실패: 토큰이 존재하지 않습니다.');
    }

    const response = await api.delete<LogoutResponse>('/auth/logout', {
      data: {
        accessToken,
        refreshToken,
      },
    });

    if (response.data.success) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      console.log('로그아웃 성공:', response.data.data.message);
      return response.data.data.message;
    } else {
      console.error('로그아웃 실패:', response.data.data.message);
      return null;
    }
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
    return null;
  }
}
