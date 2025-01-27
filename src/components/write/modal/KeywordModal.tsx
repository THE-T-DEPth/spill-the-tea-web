import * as S from '../../../styles/Write/KeywordModalComponentStyle';
import Close from '../../../assets/Images/Close.svg';

interface KeywordModalProps {
  setOpenModal: (value: boolean) => void;
}

// React.FC를 사용한 ComplainModal 정의
const KeywordModal: React.FC<KeywordModalProps> = ({ setOpenModal }) => {
  const handleConfirmClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <>
            <S.CloseBtn src={Close} onClick={handleConfirmClick} />
            <S.ModalText>
              아차차,,
              <br />
              키워드는 꼭 3개를 지정해주셔야 저장이 가능해요!
            </S.ModalText>
            <S.ButtonDiv>
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

export default KeywordModal;
