import React from "react";
import * as S from "../../../styles/Write/SelectAnotherComponentStyle";

interface BottomBtnProps {
  selectedType: string;
  handleNovelizationRemove: () => void;
  handleKeywordRemove: () => void;
  handleSubmitKeyword: () => void;
  setConfirmVoice: (value: string) => void;
  selectedVoice: string;
  novelizationValue: string;
}

const BottomBtn: React.FC<BottomBtnProps> = ({
  selectedType,
  handleNovelizationRemove,
  handleKeywordRemove,
  handleSubmitKeyword,
  setConfirmVoice,
  selectedVoice,
  novelizationValue,
}) => {
  const handleVoiceConfirm = () => {
    if (selectedVoice == "차분한 성인 남성") {
      setConfirmVoice("ko_KR_Standard_C");
    } else if (selectedVoice == "차분한 성인 여성") {
      setConfirmVoice("ko_KR_Standard_A");
    }
    alert("음성이 저장되었습니다.");
  };

  const handleVoiceRemove = () => {
    setConfirmVoice("none");
    alert("음성이 삭제되었습니다.");
  };

  const handleNovelizationCopy = () => {
    if (!novelizationValue) {
      alert("복사할 내용이 없습니다.");
      return;
    }
    navigator.clipboard
      .writeText(novelizationValue)
      .then(() => {
        alert("소설화 된 글이 복사되었습니다.");
      })
      .catch((err) => {
        console.error("복사 중 오류가 발생했습니다.", err);
        alert("복사에 실패했습니다.");
      });
  };

  return (
    <>
      {selectedType === "소설화" ? (
        <S.AnotherBottomDiv>
          <S.AnotherCancelBtn onClick={handleNovelizationRemove}>
            취소
          </S.AnotherCancelBtn>
          <S.AnotherSaveBtn
            onClick={handleNovelizationCopy}
            style={{ padding: "0 20px" }}>
            소설화 된 글 복사
          </S.AnotherSaveBtn>
        </S.AnotherBottomDiv>
      ) : selectedType === "음성 출력" ? (
        <S.AnotherBottomDiv>
          <S.AnotherCancelBtn onClick={handleVoiceRemove}>
            작성 취소
          </S.AnotherCancelBtn>
          <S.AnotherSaveBtn onClick={handleVoiceConfirm}>저장</S.AnotherSaveBtn>
        </S.AnotherBottomDiv>
      ) : selectedType === "키워드 지정" ? (
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
