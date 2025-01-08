import * as S from '../../../styles/Write/PostModalComponentStyle';
import Close from '../../../assets/images/Close.svg';

interface RemoveModalProps {
  setOpenPostModal: (value: boolean) => void;
  titleInput: string | null;
  textInput: any | undefined;
  selectedThreeKeywords: string[];
  imageCount: number;
}

const PostModal: React.FC<RemoveModalProps> = ({
  setOpenPostModal,
  titleInput,
  textInput,
  selectedThreeKeywords,
  imageCount,
}) => {
  const handleConfirmClick = () => {
    setOpenPostModal(false); // 모달 닫기
    window.location.href = '/';
  };

  const handleOkayClick = () => {
    setOpenPostModal(false); // 모달 닫기
  };

  const handleViewPostClick = () => {
    setOpenPostModal(false); // 모달 닫기
    window.location.href = '/';
  };

  const isTextEmpty =
    !textInput ||
    textInput.html.trim() === '' ||
    textInput.html === '<p><br></p>';

  // 조건별 메시지 설정
  let modalMessage = '';
  if (!titleInput || titleInput.trim() === '') {
    modalMessage = '아차차,,\n제목을 정해주셔야 게시를 할 수 있어요!';
  } else if (isTextEmpty) {
    modalMessage = '아차차,,\n내용을 적어주셔야 게시를 할 수 있어요!';
  } else if (imageCount == 0) {
    modalMessage = '아차차,,\n짤을 최소 1개 지정해주셔야 게시를 할 수 있어요!';
  } else if (selectedThreeKeywords.length !== 3) {
    modalMessage = '아차차,,\n키워드를 지정해주셔야 게시를 할 수 있어요!';
  }
  const modalMessageFormatted = modalMessage.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <S.Overlay>
      {modalMessage === '' ? (
        // 모든 조건이 충족되었을 때
        <S.Modal>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>핫한🥵 썰 게시 완료!</S.ModalText>
          <S.ButtonDiv>
            <S.CancelButton onClick={handleViewPostClick}>
              글 보러 가기
            </S.CancelButton>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </S.Modal>
      ) : (
        <S.Modal>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>{modalMessageFormatted}</S.ModalText>
          <S.ButtonDiv>
            <S.ConfirmButton onClick={handleOkayClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </S.Modal>
      )}
    </S.Overlay>
  );
};

export default PostModal;
