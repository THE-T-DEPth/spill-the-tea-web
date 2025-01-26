import * as S from '../../../styles/ViewDetailSsul/modal/ComplainModalComponentStyle';
import Close from '../../../assets/images/Close.svg';
import { useNavigate } from 'react-router-dom';
import { postPostReport } from '../../../api/viewDetailSsul/viewDetailContent';

interface BlockModalProps {
  setOpenModal: (value: boolean) => void;
  setAlreadyComplainModal: (value: boolean) => void;
  postId: number;
}

// React.FC를 사용한 ComplainModal 정의
const ReportPostModal: React.FC<BlockModalProps> = ({
  setOpenModal,
  setAlreadyComplainModal,
  postId,
}) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  //로그인 되면 아마 될거임
  const handleConfirmClick = () => {
    setOpenModal(false);

    const fetchPostReport = async () => {
      try {
        await postPostReport(postId);
        navigate('/');
      } catch (error) {
        setAlreadyComplainModal(true);
        console.log('fetchPostReport 중 오류 발생', error);
        throw error;
      }
    };
    fetchPostReport();
  };

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <>
            <S.CloseBtn src={Close} onClick={handleCancelClick} />
            <S.ModalText>해당 썰을 신고하시겠습니까?</S.ModalText>
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

export default ReportPostModal;
