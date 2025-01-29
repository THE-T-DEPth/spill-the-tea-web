import * as S from '../../../styles/ViewDetailSsul/modal/ComplainModalComponentStyle';
import Close from '../../../assets/Images/Close.svg';
import { useNavigate } from 'react-router-dom';

interface EditModalProps {
  setOpenModal: (value: boolean) => void;
}

// React.FC를 사용한 ComplainModal 정의
const FailEnterReviewModal: React.FC<EditModalProps> = ({ setOpenModal }) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  //확인을 눌렀을 때, 수정 페이지로 이동
  const handleConfirmClick = () => {
    navigate(`/login`);
  };

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <>
            <S.CloseBtn src={Close} onClick={handleCancelClick} />
            <S.ModalText>로그인이 필요한 서비스 입니다.</S.ModalText>
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

export default FailEnterReviewModal;
