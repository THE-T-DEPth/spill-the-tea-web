import React from 'react';
import * as S from '../../styles/Home/TopBarStyle';

interface BarProps {
  text: string; // Bar에 표시할 텍스트 내용
}

const TopBar: React.FC<BarProps> = ({ text }) => {
  return <S.Container>{text}</S.Container>;
};

export default TopBar;
