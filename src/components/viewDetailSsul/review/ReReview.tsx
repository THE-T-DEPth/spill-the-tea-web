import React from 'react';
import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import FullHeart from '../../../assets/images/FullHeart.svg';

interface Reply {
  profile: string;
  nickname: string;
  content: string;
  time: string;
  date: string;
  heart: number;
}

interface ReReviewProps {
  reply: Reply;
  handleComplainClick: () => void;
}

const ReReview: React.FC<ReReviewProps> = ({ reply, handleComplainClick }) => {
  return (
    <>
      <S.DSRCocomentDiv>
        <S.DSRProfileDiv>
          <S.DSRProfileImg
            src={reply.profile}
            alt={`${reply.nickname} 프로필`}
          />
          <S.DSRProfileName>{reply.nickname}</S.DSRProfileName>
        </S.DSRProfileDiv>
        <S.DSRContentDiv>
          <S.DSRContent>{reply.content}</S.DSRContent>
          <S.DSRBtnDiv2>
            <S.DSRHeartBtn>공감</S.DSRHeartBtn>
            <S.DSRComplainBtn onClick={handleComplainClick}>
              신고
            </S.DSRComplainBtn>
          </S.DSRBtnDiv2>
        </S.DSRContentDiv>
        <S.DSRDateHeartDiv>
          <S.DSRDateDiv>
            <S.DSRDate>{reply.time}</S.DSRDate>
            <S.DSRDate>{reply.date}</S.DSRDate>
          </S.DSRDateDiv>
          <S.DSRHeartDiv>
            <S.DSRHeartImg src={FullHeart} alt='공감 수' />
            <S.DSRHeartNum>{reply.heart}</S.DSRHeartNum>
          </S.DSRHeartDiv>
        </S.DSRDateHeartDiv>
      </S.DSRCocomentDiv>
    </>
  );
};

export default ReReview;
