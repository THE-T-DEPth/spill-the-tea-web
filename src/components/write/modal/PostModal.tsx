import * as S from '../../../styles/Write/PostModalComponentStyle';
import Close from '../../../assets/Images/Close.svg';
import { postWrite, putWrite } from '../../../api/write/writePost';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RemoveModalProps {
  setOpenPostModal: (value: boolean) => void;
  titleInput: string | null;
  textInput: any | undefined;
  selectedThreeKeywords: string[];
  imageCount: number;
  confirmVoice: string;
  firstImg: string | null;
  mode: string;
  postId: number;
}

const PostModal: React.FC<RemoveModalProps> = ({
  setOpenPostModal,
  titleInput,
  textInput,
  selectedThreeKeywords,
  imageCount,
  confirmVoice,
  firstImg,
  mode,
  postId,
}) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [newPostId, setNewPostId] = useState<number>();
  const postInProgress = useRef(false);
  const navigate = useNavigate();

  let modalMessage = '';
  const handleConfirmClick = () => {
    setOpenPostModal(false); // 모달 닫기
    navigate('/');
  };

  const handleOkayClick = () => {
    setOpenPostModal(false);
  };

  const handleViewPostClick = () => {
    setOpenPostModal(false); // 모달 닫기
    // window.location.href = `/viewDetailSsul/${postId}`;
    if (mode == 'write') {
      navigate(`/viewDetailSsul/${newPostId}`);
    } else {
      navigate(`/viewDetailSsul/${postId}`);
    }
  };

  const countCharactersInHTML = (html: string): number => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    // const paragraphs = doc.querySelectorAll('p');

    return doc.body.textContent?.trim().length || 0;
  };

  const handlePost = () => {
    if (postInProgress.current) return;
    postInProgress.current = true;

    const fetchPostWrite = async () => {
      console.log(
        titleInput,
        textInput,
        selectedThreeKeywords,
        confirmVoice,
        firstImg
      );
      try {
        setIsPosting(true);
        if (mode == 'write') {
          const response = await postWrite(
            titleInput ? titleInput : '',
            textInput,
            firstImg ? firstImg : null,
            selectedThreeKeywords,
            confirmVoice
          );
          setSuccess(true);
          setNewPostId(response.data);
        } else if (mode == 'edit') {
          await putWrite(
            postId,
            titleInput ? titleInput : '',
            textInput,
            selectedThreeKeywords,
            confirmVoice,
            firstImg ? firstImg : null
          );
          setSuccess(true);
        }
      } catch (error) {
        console.log('fetchPostWrite 중 오류 발생', error);
        console.log(countCharactersInHTML(textInput));
        setSuccess(false);
        throw error;
      } finally {
        setIsPosting(false);
      }
    };
    fetchPostWrite();
  };

  const isTextEmpty =
    !textInput ||
    // textInput.html.trim() === '' ||
    textInput.html === '<p><br></p>';

  // 조건별 메시지 설정
  if (!titleInput || titleInput.trim() === '') {
    modalMessage = '아차차,,\n제목을 정해주셔야 게시를 할 수 있어요!';
  } else if (titleInput.length > 12) {
    modalMessage = '아차차,,\n제목은 12자 이내로 입력해주세요!';
  } else if (isTextEmpty) {
    modalMessage = '아차차,,\n내용을 적어주셔야 게시를 할 수 있어요!';
  } else if (imageCount == 0) {
    modalMessage = '아차차,,\n짤을 최소 1개 지정해주셔야 게시를 할 수 있어요!';
  } else if (selectedThreeKeywords.length !== 3) {
    modalMessage = '아차차,,\n키워드를 지정해주셔야 게시를 할 수 있어요!';
    //여기에
  } else if (
    countCharactersInHTML(textInput) < 2 ||
    countCharactersInHTML(textInput) > 1500
  ) {
    modalMessage = '아차차,,\n글씨는 2 ~ 1,500자 사이로 작성해주셔야 해요!';
  } else {
    modalMessage = '';
  }
  const modalMessageFormatted = modalMessage.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  useEffect(() => {
    // 유효성 검사 통과 시 자동으로 게시하기
    if (modalMessage === '' && !success && !isPosting) {
      handlePost();
    }
  }, [modalMessage, success, isPosting]);

  useEffect(() => {
    // console.log(titleInput, textInput, imageCount, selectedThreeKeywords);
    modalMessage = '아차차,,\n제목을 정해주셔야 게시를 할 수 있어요!';
  }, []);

  return (
    <S.Overlay>
      {modalMessage === '' && success ? (
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
      ) : modalMessage === '' && !success && !isPosting ? (
        // 성공하지 못했을 때
        <S.Modal>
          <S.CloseBtn src={Close} onClick={() => setOpenPostModal(false)} />
          <S.ModalText>게시에 실패했습니다.</S.ModalText>
          <S.ButtonDiv>
            <S.ConfirmButton onClick={handleOkayClick}>확인</S.ConfirmButton>
          </S.ButtonDiv>
        </S.Modal>
      ) : (
        // 기본적으로 오류 메시지를 출력하는 모달
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
