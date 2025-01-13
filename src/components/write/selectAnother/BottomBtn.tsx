import React from 'react';
import * as S from '../../../styles/Write/SelectAnotherComponentStyle';

interface BottomBtnProps {
  selectedType: string;
  handleNovelizationRemove: () => void;
  handleKeywordRemove: () => void;
  handleSubmitKeyword: () => void;
}

const BottomBtn: React.FC<BottomBtnProps> = ({
  selectedType,
  handleNovelizationRemove,
  handleKeywordRemove,
  handleSubmitKeyword,
}) => {
  return (
    <>
      {selectedType === '소설화' ? (
        <S.AnotherBottomDiv>
          <S.AnotherCancelBtn onClick={handleNovelizationRemove}>
            취소
          </S.AnotherCancelBtn>
          <S.AnotherSaveBtn>글에 적용</S.AnotherSaveBtn>
        </S.AnotherBottomDiv>
      ) : selectedType === '음성 출력' ? (
        <S.AnotherBottomDiv>
          <S.AnotherCancelBtn>작성 취소</S.AnotherCancelBtn>
          <S.AnotherSaveBtn>저장</S.AnotherSaveBtn>
        </S.AnotherBottomDiv>
      ) : selectedType === '키워드 지정' ? (
        <S.AnotherBottomDiv>
          <S.AnotherCancelBtn onClick={handleKeywordRemove}>
            작성 취소
          </S.AnotherCancelBtn>
          <S.AnotherSaveBtn onClick={handleSubmitKeyword}>
            저장
          </S.AnotherSaveBtn>
        </S.AnotherBottomDiv>
      ) : (
        <></>
      )}
    </>
  );
};
export default BottomBtn;
