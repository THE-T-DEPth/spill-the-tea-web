import { api } from '../index';

// 회원 정보 업데이트 API 요청 함수
export async function putMembersUpdate(
  nickname?: string,
  newPassword?: string,
  confirmPassword?: string
) {
  try {
    const response = await api.put('/members/update', {
      nickname,
      newPassword,
      confirmPassword,
    });

    return response.data;
  } catch (error) {
    console.error('회원 정보 업데이트 중 오류 발생:', error);
    throw error;
  }
}
