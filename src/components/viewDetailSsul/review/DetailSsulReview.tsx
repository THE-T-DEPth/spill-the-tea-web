import { useEffect, useState } from 'react';
import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import Send from '../../../assets/images/CombinedShape.svg';
import Review from './Review';
import {
  getComment,
  postComment,
} from '../../../api/viewDetailSsul/viewDetailComment';

interface Comment {
  commentId: number;
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
  postId: number;
  setCommentId: (value: number) => void;
}> = ({ setIsComplainModalOpen, postId, setCommentId }) => {
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

    const fetchPostComment = async () => {
      try {
        await postComment(postId, input);
      } catch (error) {
        console.log('postComment 중 오류 발생', error);
      }
    };
    fetchPostComment();
    setInput('');
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const data = await getComment(postId);
        setComments(data.data);
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
