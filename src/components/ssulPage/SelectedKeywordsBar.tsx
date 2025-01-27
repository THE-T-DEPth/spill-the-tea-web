import React from 'react';
import * as S from '../../styles/ssulPage/SelectedKeywordsBarStyle';
import SelectedKeyword from './SelectedKeyword';
import useNSMediaQuery from '../../hooks/useNSMediaQuery';

interface SelectedKeywordsBarProps {
  selectedKeywords: string[]; // 선택된 키워드 리스트
  isInModal: boolean;
}

const SelectedKeywordsBar: React.FC<SelectedKeywordsBarProps> = ({
  selectedKeywords,
  isInModal = false,
}) => {
  const { isMobile } = useNSMediaQuery();

  console.log('전달된 키워드:', selectedKeywords);

  return (
    <S.Container $isInModal={isInModal}>
      {isMobile && !isInModal ? null : (
        <S.MobileTitle $isInModal={isInModal}>지정 키워드</S.MobileTitle>
      )}

      {!isMobile && <S.Title>선택 키워드</S.Title>}

      <S.KeywordsList $isInModal={isInModal}>
        {selectedKeywords.map((keyword, index) => (
          <SelectedKeyword
            key={index}
            keyword={`# ${keyword}`}
            isInModal={isInModal}
          />
        ))}
      </S.KeywordsList>
    </S.Container>
  );
};

export default SelectedKeywordsBar;
