import * as S from '../../../styles/Write/PostModalComponentStyle';
import Close from '../../../assets/images/Close.svg';

interface RemoveModalProps {
  setOpenPostModal: (value: boolean) => void;
}

// React.FC를 사용한 ComplainModal 정의
const PostModal: React.FC<RemoveModalProps> = ({ setOpenPostModal }) => {
  const handleConfirmClick = () => {
    setOpenPostModal(false); // 모달 닫기
    window.location.href = '/';
  };

  const handleViewPostClick = () => {
    setOpenPostModal(false); // 모달 닫기
    window.location.href = '/';
  };

  return (
    <>
      <S.Overlay onClick={handleConfirmClick}></S.Overlay>
      <S.Modal>
        <>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>핫한🥵 썰 게시 완료</S.ModalText>
          <S.ButtonDiv>
            <S.CancelButton onClick={handleViewPostClick}>
              글 보러 가기
            </S.CancelButton>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </>
        {/* <>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>
            아차차,,
            <br />
            제목을 정해주셔야 게시를 할 수 있어요!
          </S.ModalText>
          <S.ButtonDiv>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </>
        <>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>
            아차차,,
            <br />
            내용을 적어주셔야 게시를 할 수 있어요!
          </S.ModalText>
          <S.ButtonDiv>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </>
        <>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>
            아차차,,
            <br />
            대표 짤을 지정해주셔야 게시를 할 수 있어요!
          </S.ModalText>
          <S.ButtonDiv>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </>
        <>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>
            아차차,,
            <br />
            키워드는 꼭 3개를 지정해주셔야 저장이 가능해요!
          </S.ModalText>
          <S.ButtonDiv>
            <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </> */}
      </S.Modal>
    </>
  );
};

export default PostModal;
