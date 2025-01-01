import React from 'react';
import * as S from '../../styles/ssulPage/KeywordStyle';

interface KeywordProps {
  keyword: string;
  addKeyword: (keyword: string) => void; // 키워드 추가 함수
  removeKeyword: (keyword: string) => void; // 키워드 제거 함수
  isSelected: boolean; // 현재 키워드 선택 상태
}

const Keyword: React.FC<KeywordProps> = ({
  keyword,
  addKeyword,
  removeKeyword,
  isSelected,
}) => {
  const handleClick = () => {
    if (isSelected) {
      removeKeyword(keyword);
    } else {
      addKeyword(keyword);
    }
  };

  return (
    <S.KeywordContainer $isSelected={isSelected} onClick={handleClick}>
      {keyword}
    </S.KeywordContainer>
  );
};

export default Keyword;
