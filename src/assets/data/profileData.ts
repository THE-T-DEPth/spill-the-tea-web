// 사용자 프로필 타입 정의
export interface ProfileData {
  id: number; //
  profileImage: string; // 프로필 이미지 URL
  nickname: string; // 닉네임
}

export const ProfileData: ProfileData = {
  id: 1,
  profileImage: "/src/assets/images/profileimg.png",
  nickname: "멋쟁이 뎁스 돌맹이 777",
};

export default ProfileData;
