import React from 'react';
import * as S from '../../styles/ssulPage/KeywordStyle';

interface KeywordProps {
  keyword: string;
  addKeyword: (keyword: string) => void; // 키워드 추가,제거 함수
  isSelected: boolean; // 현재 키워드 선택 상태
}

const Keyword: React.FC<KeywordProps> = ({
  keyword,
  addKeyword,
  isSelected,
}) => {
  const handleClick = () => {
    addKeyword(keyword); // 선택 시 추가 또는 제거
  };

  return (
    <S.KeywordContainer $isSelected={isSelected} onClick={handleClick}>
      {keyword}
    </S.KeywordContainer>
  );
};

export default Keyword;
