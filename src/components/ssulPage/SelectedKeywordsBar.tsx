import React from 'react';
import * as S from '../../styles/ssulPage/SelectedKeywordsBarStyle';
import SelectedKeyword from './SelectedKeyword';

interface SelectedKeywordsBarProps {
  selectedKeywords: string[]; // 선택된 키워드 리스트
}

const SelectedKeywordsBar: React.FC<SelectedKeywordsBarProps> = ({
  selectedKeywords,
}) => {
  return (
    <S.Container>
      <S.Title>선택 키워드</S.Title>
      <S.KeywordsList>
        {selectedKeywords.map((keyword, index) => (
          <SelectedKeyword key={index} keyword={keyword} />
        ))}
      </S.KeywordsList>
    </S.Container>
  );
};

export default SelectedKeywordsBar;
