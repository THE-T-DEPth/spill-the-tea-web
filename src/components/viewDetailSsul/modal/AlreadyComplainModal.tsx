import * as S from '../../../styles/ViewDetailSsul/modal/AlreadyComplainModalComponentStyle';
import Close from '../../../assets/images/Close.svg';

interface AlreadyProps {
  setOpenModal: (value: boolean) => void;
}

// React.FC를 사용한 ComplainModal 정의
const AlreadyComplainModal: React.FC<AlreadyProps> = ({ setOpenModal }) => {
  const handleCancelClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <>
            <S.CloseBtn src={Close} onClick={handleCancelClick} />
            <S.ModalText>이미 신고가 완료되었습니다.</S.ModalText>
            <S.ButtonDiv>
              <S.ConfirmButton onClick={handleCancelClick}>
                확인
              </S.ConfirmButton>
            </S.ButtonDiv>
          </>
        </S.Modal>
      </S.Overlay>
    </>
  );
};

export default AlreadyComplainModal;
