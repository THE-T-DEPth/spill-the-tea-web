import * as S from '../../../styles/ViewDetailSsul/modal/ComplainModalComponentStyle';
import Close from '../../../assets/Images/Close.svg';

interface TTSProp {
  setOpenModal: (value: boolean) => void;
  setConfirmTTS: (value: boolean) => void;
}

// React.FC를 사용한 ComplainModal 정의
const TTSModal: React.FC<TTSProp> = ({ setOpenModal, setConfirmTTS }) => {
  const handleCancelClick = () => {
    setConfirmTTS(false);
    setOpenModal(false); // 모달 닫기
  };

  const handleConfirmClick = () => {
    setConfirmTTS(true);
    setOpenModal(false);
  };

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <>
            <S.CloseBtn src={Close} onClick={handleCancelClick} />
            <S.ModalText>TTS 기능을 사용하시겠습니까?</S.ModalText>
            <S.ButtonDiv>
              <S.CancelButton onClick={handleCancelClick}>취소</S.CancelButton>
              <S.ConfirmButton onClick={handleConfirmClick}>
                확인
              </S.ConfirmButton>
            </S.ButtonDiv>
          </>
        </S.Modal>
      </S.Overlay>
    </>
  );
};

export default TTSModal;
