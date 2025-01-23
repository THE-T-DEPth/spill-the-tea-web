import React from 'react';
import * as S from '../../styles/ssulPage/SelectedKeywordStyle';

interface SelectedKeywordProps {
  keyword: string;
  isInModal: boolean;
}

const SelectedKeyword: React.FC<SelectedKeywordProps> = ({
  keyword,
  isInModal,
}) => {
  return <S.Container $isInModal={isInModal}>{keyword}</S.Container>;
};

export default SelectedKeyword;
