import React from 'react';
import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import FullHeart from '../../../assets/images/FullHeart.svg';
import ReReview from './ReReview';

interface Comment {
  profile: string;
  nickname: string;
  content: string;
  time: string;
  date: string;
  heart: number;
  review: Reply[];
}

interface Reply {
  profile: string;
  nickname: string;
  content: string;
  time: string;
  date: string;
  heart: number;
}

interface ReviewProps {
  comment: Comment;
  handleComplainClick: () => void;
  handleReviewClick: (nickname: string) => void;
}

const Review: React.FC<ReviewProps> = ({
  comment,
  handleComplainClick,
  handleReviewClick,
}) => {
  return (
    <>
      <S.DSRProfileDiv>
        <S.DSRProfileImg
          src={comment.profile}
          alt={`${comment.nickname} 프로필`}
        />
        <S.DSRProfileName>{comment.nickname}</S.DSRProfileName>
      </S.DSRProfileDiv>
      <S.DSRContentDiv>
        <S.DSRContent>{comment.content}</S.DSRContent>
        <S.DSRBtnDiv>
          <S.DSRReviewBtn onClick={() => handleReviewClick(comment.nickname)}>
            대댓글
          </S.DSRReviewBtn>
          <S.DSRHeartBtn>공감</S.DSRHeartBtn>
          <S.DSRComplainBtn onClick={handleComplainClick}>
            신고
          </S.DSRComplainBtn>
        </S.DSRBtnDiv>
      </S.DSRContentDiv>
      <S.DSRDateHeartDiv>
        <S.DSRDateDiv>
          <S.DSRDate>{comment.time}</S.DSRDate>
          <S.DSRDate>{comment.date}</S.DSRDate>
        </S.DSRDateDiv>
        <S.DSRHeartDiv>
          <S.DSRHeartImg src={FullHeart} alt='공감 수' />
          <S.DSRHeartNum>{comment.heart}</S.DSRHeartNum>
        </S.DSRHeartDiv>
      </S.DSRDateHeartDiv>
      {comment.review.length > 0 && ( //대댓글
        <div>
          {comment.review.map((reply: Reply, replyIndex: number) => (
            <S.DSREachCommentDiv
              key={replyIndex}
              style={{ width: '95%', marginLeft: 'auto' }}>
              <ReReview
                reply={reply}
                handleComplainClick={handleComplainClick}
              />
            </S.DSREachCommentDiv>
          ))}
        </div>
      )}
    </>
  );
};

export default Review;
