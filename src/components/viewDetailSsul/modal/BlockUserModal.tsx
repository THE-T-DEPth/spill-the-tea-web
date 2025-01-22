import * as S from '../../../styles/ViewDetailSsul/modal/ComplainModalComponentStyle';
import Close from '../../../assets/images/Close.svg';
import { useNavigate } from 'react-router-dom';
import { postBlock } from '../../../api/viewDetailSsul/viewDetailContent';

interface BlockModalProps {
  setOpenModal: (value: boolean) => void;
  memberId: number;
}

// React.FC를 사용한 ComplainModal 정의
const BlockUserModal: React.FC<BlockModalProps> = ({
  setOpenModal,
  memberId,
}) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  //여기 email 받아가지고
  const handleConfirmClick = () => {
    const fetchPostReport = async () => {
      try {
        await postBlock(memberId);
      } catch (error) {
        console.log('fetchPostReport 중 오류 발생', error);
        throw error;
      }
    };
    fetchPostReport();
    navigate('/');
  };

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <>
            <S.CloseBtn src={Close} onClick={handleCancelClick} />
            <S.ModalText>해당 사용자를 차단하시겠습니까?</S.ModalText>
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

export default BlockUserModal;
