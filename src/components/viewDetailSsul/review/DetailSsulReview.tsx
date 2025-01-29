import { useEffect, useState } from 'react';
import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import Send from '../../../assets/Images/CombinedShape.svg';
import Review from './Review';
import Fire from '../../../assets/Images/Fire.png';
import {
  getComment,
  postComment,
} from '../../../api/viewDetailSsul/viewDetailComment';

interface Comment {
  commentId: number;
  mine: boolean;
  profileImage: string;
  nickname: string;
  content: string;
  createTime: string;
  createDate: string;
  likedCount: number;
  replyList: Reply[];
}

interface Reply {
  commentId: number;
  mine: boolean;
  parentCommentId: number;
  profileImage: string;
  nickname: string;
  content: string;
  createTime: string;
  createDate: string;
  likedCount: number;
}

const DetailSsulReview: React.FC<{
  setIsComplainModalOpen: (value: boolean) => void;
  setIsFailReviewModal: (value: boolean) => void;
  postId: number;
  setCommentId: (value: number) => void;
  view: boolean;
}> = ({
  setIsComplainModalOpen,
  setIsFailReviewModal,
  postId,
  setCommentId,
  view,
}) => {
  const [input, setInput] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleComplainClick = () => {
    setIsComplainModalOpen(true); // 모달 열기
  };

  const handleSubmitClick = () => {
    if (!input.trim()) {
      alert('댓글 내용을 입력해주세요!');
      return;
    }

    console.log(input.length);
    if (input.length > 200) {
      alert('댓글은 200자 제한입니다.');
      return;
    }

    const fetchPostComment = async () => {
      try {
        await postComment(postId, input);
      } catch (error) {
        setIsFailReviewModal(true);
        throw error;
      }
    };
    fetchPostComment();
    setInput('');
  };

  const onSubmitClick = (e: any) => {
    if (e.key === 'Enter') {
      if (!input.trim()) {
        alert('댓글 내용을 입력해주세요!');
        return;
      }

      console.log(input.length);
      if (input.length > 200) {
        alert('댓글은 200자 제한입니다.');
        return;
      }

      const fetchPostComment = async () => {
        try {
          await postComment(postId, input);
        } catch (error) {
          setIsFailReviewModal(true);
          throw error;
        }
      };

      fetchPostComment(); // if 조건 안에서 호출되도록 수정
      setInput('');
    }
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const data = await getComment(postId);
        const fire = (
          <img src={Fire} style={{ width: '13px', height: '13px' }} />
        );
        const modifiedComments = data.data.map(
          (comment: Comment, index: number) => {
            // 처음 3개의 댓글에 불꽃 이모지를 추가
            if (index < 3) {
              return {
                ...comment,
                content: (
                  <>
                    {fire} &nbsp; {comment.content}
                  </>
                ),
              };
            }
            // 나머지는 그대로
            return comment;
          }
        );
        setComments(modifiedComments); // 전체 데이터를 설정
      } catch (error) {
        console.log('fetchComment 오류 발생', error);
      }
    };

    fetchComment();
  }, [postId, handleSubmitClick]);

  return (
    <>
      <S.DSRDiv>
        {/* detail ssul review */}
        <S.DSRInputDiv>
          <S.DSRInput
            placeholder='댓글을 입력하세요.'
            onChange={(e) => handleInputValue(e)}
            onKeyUp={onSubmitClick}
            value={input}
          />
          <S.DSRSendImg src={Send} onClick={handleSubmitClick} />
        </S.DSRInputDiv>
        <S.DSRWholeCommentDiv>
          {comments.map(
            (
              comment: Comment,
              index: number //댓글
            ) => (
              <S.DSREachCommentDiv key={index}>
                <Review
                  handleComplainClick={handleComplainClick}
                  setCommentId={setCommentId}
                  comment={comment}
                  id={index}
                  postId={postId}
                  view={view}
                />
              </S.DSREachCommentDiv>
            )
          )}
        </S.DSRWholeCommentDiv>
      </S.DSRDiv>
    </>
  );
};

export default DetailSsulReview;
