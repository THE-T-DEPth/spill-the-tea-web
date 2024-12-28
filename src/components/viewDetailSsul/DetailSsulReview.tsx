import { useState } from 'react';
import * as S from '../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import Send from '../../assets/images/CombinedShape.svg';
import commentDummy from '../../assets/dummy/CommentSSulDummy';
import FullHeart from '../../assets/images/FullHeart.svg';

const DetailSsulReview: React.FC<{
  setIsComplainModalOpen: (value: boolean) => void;
}> = ({ setIsComplainModalOpen }) => {
  const [nickname, setNickname] = useState<any>('');
  const [input, setInput] = useState<any>();

  const handleInputValue = (e: any) => {
    setInput(e.target.value);
  };

  const handleReviewClick = (nickname: string | null) => {
    setNickname('@' + nickname);
    setInput('@' + nickname + ' ');
  };

  const handleComplainClick = () => {
    setIsComplainModalOpen(true); // 모달 열기
    document.body.style.overflow = 'hidden';
  };

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
          <S.DSRSendImg src={Send} />
        </S.DSRInputDiv>
        {commentDummy.map((comment, index) => (
          <S.DSREachCommentDiv key={index}>
            <S.DSRProfileDiv>
              <S.DSRProfileImg
                src={comment.profile}
                alt={`${comment.nickname} 프로필`}
              />
              <S.DSRProfileName>{comment.nickname}</S.DSRProfileName>
            </S.DSRProfileDiv>
            <S.DSRContentDiv>
              <S.DSRContent>{comment.content}</S.DSRContent>
              <S.DSRReviewBtn
                onClick={() => handleReviewClick(comment.nickname)}>
                대댓글
              </S.DSRReviewBtn>
              <S.DSRHeartBtn>공감</S.DSRHeartBtn>
              <S.DSRComplainBtn onClick={handleComplainClick}>
                신고
              </S.DSRComplainBtn>
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
            {comment.review.length > 0 && (
              <div>
                {comment.review.map((reply, replyIndex) => (
                  <S.DSREachCommentDiv
                    key={replyIndex}
                    style={{ width: '95%', marginLeft: 'auto' }}>
                    <S.DSRProfileDiv>
                      <S.DSRProfileImg
                        src={reply.profile}
                        alt={`${reply.nickname} 프로필`}
                      />
                      <S.DSRProfileName>{reply.nickname}</S.DSRProfileName>
                    </S.DSRProfileDiv>
                    <S.DSRContentDiv>
                      <S.DSRContent>{reply.content}</S.DSRContent>
                      <S.DSRHeartBtn>공감</S.DSRHeartBtn>
                      <S.DSRComplainBtn onClick={handleComplainClick}>
                        신고
                      </S.DSRComplainBtn>
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
                  </S.DSREachCommentDiv>
                ))}
              </div>
            )}
          </S.DSREachCommentDiv>
        ))}
      </S.DSRDiv>
    </>
  );
};

export default DetailSsulReview;
