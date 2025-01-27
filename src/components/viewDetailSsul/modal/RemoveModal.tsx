import * as S from '../../../styles/ViewDetailSsul/modal/ComplainModalComponentStyle';
import Close from '../../../assets/Images/Close.svg';
import { deleteMyPost } from '../../../api/viewDetailSsul/viewDetailContent';
import { useNavigate } from 'react-router-dom';

interface RemoveModalProps {
  setOpenModal: (value: boolean) => void;
  postId: number | undefined;
}

// React.FC를 사용한 ComplainModal 정의
const RemoveModal: React.FC<RemoveModalProps> = ({ setOpenModal, postId }) => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  //확인을 눌렀을 때, 삭제
  const handleConfirmClick = () => {
    console.log(postId);
    if (postId) {
      const fetchDeletePost = async () => {
        try {
          await deleteMyPost(postId);
        } catch (error) {
          console.log('fetchDeletePost 중 오류 발생', error);
          throw error;
        }
      };
      fetchDeletePost();
    }
    navigate('/');
  };

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <>
            <S.CloseBtn src={Close} onClick={handleCancelClick} />
            <S.ModalText>정말 썰을 삭제하시겠습니까?</S.ModalText>
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

export default RemoveModal;
