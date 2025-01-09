import React from 'react';
import * as S from '../../styles/ssulPage/SelectedKeywordStyle';

interface SelectedKeywordProps {
  keyword: string;
}

const SelectedKeyword: React.FC<SelectedKeywordProps> = ({ keyword }) => {
  return <S.Container>{keyword}</S.Container>;
};

export default SelectedKeyword;
