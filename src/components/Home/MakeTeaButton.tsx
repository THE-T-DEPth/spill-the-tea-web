import React, { useState } from 'react';
import * as S from '../../styles/Home/MakeTeaButtonStyle';
import LeafIcon from '../../assets/icons/Leaf.svg';
import LoginRequestModal from './LoginRequestModal';
import { useNavigate } from 'react-router-dom';

const MakeTeaButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = true; // 실제 토큰 검사로 api연결할 예정

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
