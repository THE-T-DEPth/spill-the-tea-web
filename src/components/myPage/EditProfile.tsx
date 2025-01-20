import React, { useState, useEffect } from 'react';
import * as S from '../../styles/myPage/EditProfileStyle';
import { getProfile } from '../../api/myPage/getProfile';
import { putMembersUpdate } from '../../api/myPage/editProfile';
import { changeProfileImage } from '../../api/myPage/changeProfileImage';

// 연속된 문자 검사 함수
const hasSequentialChars = (value: string) => {
  for (let i = 0; i < value.length - 2; i++) {
    const charCode1 = value.charCodeAt(i);
    const charCode2 = value.charCodeAt(i + 1);
    const charCode3 = value.charCodeAt(i + 2);

    if (
      (charCode2 === charCode1 + 1 && charCode3 === charCode2 + 1) || // 증가
      (charCode2 === charCode1 - 1 && charCode3 === charCode2 - 1) // 감소
    ) {
      return true;
    }
  }
  return false;
};

// 비밀번호 유효성 검사 함수
const validatePassword = (value: string) => {
  const isLengthValid = value.length >= 8 && value.length <= 20;
  const hasUpperLower = /[A-Z]/.test(value) && /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const noSeq = !hasSequentialChars(value);
  const noRepeat = !/(.)\1\1/.test(value);

  if (!isLengthValid) return '8자 이상으로 구성되어야 합니다.';
  if (!(hasUpperLower && hasNumber && hasSpecialChar))
    return '대소문자, 숫자, 특수문자를 각각 최소 1개씩 포함해야 합니다.';
  if (!noSeq || !noRepeat)
    return '연속되거나 반복되는 문자는 사용할 수 없습니다.';

  return '';
};

const EditProfile = () => {
  const defaultMessage =
    '8~20자 이내, 대소문자, 숫자, 특수문자를 각각 최소 1개씩 포함해야 합니다.';
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [passwordError, setPasswordError] = useState(defaultMessage);
  const [checkPasswordError, setCheckPasswordError] = useState('');
  const [isMatch, setIsMatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getProfile();
        if (profileData) {
          setNickname(profileData.data.nickname);
          setProfileImage(profileData.data.profileImage);
        } else {
          console.error('프로필 데이터를 가져오지 못했습니다.');
        }
      } catch (error) {
        console.error('프로필 불러오기 실패:', error);
      }
    };
    fetchData();
  }, []);

  const checkPasswordsMatch = (password: string, checkPassword: string) => {
    if (checkPassword.trim() === '') {
      setCheckPasswordError('');
      setIsMatch(false);
    } else if (password === checkPassword) {
      setCheckPasswordError('비밀번호 확인이 완료되었습니다.');
      setIsMatch(true);
    } else {
      setCheckPasswordError('비밀번호가 일치하지 않습니다.');
      setIsMatch(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (value.length > 20) return;

    setPassword(value);

    if (value.trim() === '') {
      setPasswordError(defaultMessage);
    } else {
      setPasswordError(validatePassword(value) || '');
    }

    checkPasswordsMatch(value, checkPassword);
  };

  const handleCheckPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: string = e.target.value;
    setCheckPassword(value);

    checkPasswordsMatch(password, value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setNickname(value);
  };

  // 사진 변경 핸들러 (미리보기만)
  const handleProfileImageChange = async () => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = async (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files[0]) {
          const file = target.files[0];

          // 미리보기 이미지 업데이트 (API 호출 없음)
          const imageUrl = URL.createObjectURL(file);
          setProfileImage(imageUrl);
          setSelectedImage(file);
        }
      };

      input.click(); // 파일 선택창 강제 실행
    } catch (error) {
      console.error('프로필 이미지 변경 중 오류 발생:', error);
    }
  };

  // 저장 버튼 클릭 시 API 호출
  const handleSave = async () => {
    if (password && password !== checkPassword) {
      setCheckPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsLoading(true);

    try {
      // 이미지가 선택된 경우에만 API 호출
      if (selectedImage) {
        const response = await changeProfileImage(selectedImage);
        if (response && response.success) {
          console.log('프로필 이미지가 성공적으로 업데이트되었습니다.');
          setProfileImage(response.profileImageUrl || profileImage);
          setSelectedImage(null); // 이미지 업데이트 후 초기화
        } else {
          alert('프로필 이미지 업데이트에 실패했습니다.');
        }
      }

      // 닉네임과 비밀번호 업데이트 API 호출
      await putMembersUpdate(nickname, password, checkPassword);
      console.log('회원 정보가 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.error('회원 정보 업데이트 중 오류 발생:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDefaultMessage = passwordError === defaultMessage;

  return (
    <S.Container>
      <S.Title>프로필 사진</S.Title>
      <S.ImgContainer>
        <img src={profileImage} alt='프로필 이미지' />
      </S.ImgContainer>
      <S.ProfileButton>
        <S.ChangeButton onClick={handleProfileImageChange}>
          사진 변경
        </S.ChangeButton>
        <S.DeleteButton>사진 삭제</S.DeleteButton>
      </S.ProfileButton>
      <S.NicknameLabel>닉네임 수정</S.NicknameLabel>
      <S.NicknameInput value={nickname} onChange={handleNicknameChange} />
      <S.PasswordLabel>비밀번호 수정</S.PasswordLabel>
      <S.PasswordContainer>
        <S.PasswordInput
          type='password'
          placeholder='새로운 비밀번호'
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && (
          <S.ErrorMessage $isDefault={isDefaultMessage}>
            {passwordError}
          </S.ErrorMessage>
        )}
      </S.PasswordContainer>
      <S.CheckContainer>
        <S.CheckInput
          type='password'
          placeholder='비밀번호 재확인'
          value={checkPassword}
          onChange={handleCheckPasswordChange}
        />
        {checkPasswordError && (
          <S.CheckMessage $isMatch={isMatch}>
            {checkPasswordError}
          </S.CheckMessage>
        )}
      </S.CheckContainer>
      <S.ButtonContainer>
        <S.CancelButton disabled={isLoading}>취소</S.CancelButton>
        <S.SaveButton onClick={handleSave} disabled={isLoading}>
          {isLoading ? '저장 중...' : '저장'}
        </S.SaveButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default EditProfile;
