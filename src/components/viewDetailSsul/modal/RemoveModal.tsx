import * as S from '../../../styles/ViewDetailSsul/ComplainModalComponentStyle';
import Close from '../../../assets/images/Close.svg';

interface RemoveModalProps {
  setOpenModal: (value: boolean) => void;
}

// React.FC를 사용한 ComplainModal 정의
const RemoveModal: React.FC<RemoveModalProps> = ({ setOpenModal }) => {
  const handleCancelClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  //확인을 눌렀을 때, 삭제
  const handleConfirmClick = () => {
    //삭제 api
  };

  return (
    <>
      <S.Overlay onClick={handleCancelClick}></S.Overlay>
      <S.Modal>
        <>
          <S.CloseBtn src={Close} onClick={handleCancelClick} />
          <S.ModalText>정말 썰을 삭제하시겠습니까?</S.ModalText>
          <S.ButtonDiv>
            <S.CancelButton onClick={handleCancelClick}>취소</S.CancelButton>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </>
      </S.Modal>
    </>
  );
};

export default RemoveModal;
