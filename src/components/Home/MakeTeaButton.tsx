import React, { useState, useEffect } from 'react';
import * as S from '../../styles/Home/MakeTeaButtonStyle';
import LeafIcon from '../../assets/icons/Leaf.svg';
import LoginRequestModal from './LoginRequestModal';
import { useNavigate } from 'react-router-dom';

const MakeTeaButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 토큰 존재 여부로 로그인 상태 확인
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log('토큰 존재 여부:', token ? '존재' : '없음');
    setIsLoggedIn(!!token);
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/write');
    } else {
      setIsModalVisible(true);
    }
  };

  return (
    <>
      <S.ButtonContainer onClick={handleButtonClick}>
        <S.Leaf src={LeafIcon} alt='Leaf Icon' />티 만들기
      </S.ButtonContainer>
      {isModalVisible && (
        <LoginRequestModal onCancel={() => setIsModalVisible(false)} />
      )}
    </>
  );
};

export default MakeTeaButton;
