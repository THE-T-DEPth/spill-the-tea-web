import React, { useEffect, useState } from 'react';
import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import FullHeart from '../../../assets/images/FullHeart.svg';
import Send from '../../../assets/images/CombinedShape.svg';
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
  id: number;
}

const Review: React.FC<ReviewProps> = ({
  comment,
  handleComplainClick,
  id,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openRereview, setOpenRereview] = useState<number | null>(null);
  const [nickname, setNickname] = useState<string | null>('');
  const [input, setInput] = useState<
    string | number | readonly string[] | undefined
  >();

  const handleInputValue = (e: any) => {
    setInput(e.target.value);
  };

  const handleRereviewClick = (key: number) => {
    setOpenRereview((prev) => (prev === key ? null : key)); // 같은 키를 클릭하면 닫기
  };

  const handleReviewClick = (nickname: string | null) => {
    setNickname('@' + nickname);
    setInput('@' + nickname + ' ');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    handleResize(); // 초기 설정
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //모바일일때와 아닐때 구조 순서가 달라짐으로 isMobile로 html 구조를 분리

  return (
    <S.ReviewDiv $openrereview={openRereview == id ? 'true' : 'false'}>
      {!isMobile ? (
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
              <S.DSRReviewBtn
                onClick={() => {
                  handleReviewClick(comment.nickname);
                  handleRereviewClick(id);
                }}>
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
          {comment.review.length > 0 &&
            id == openRereview && ( //대댓글
              <div>
                <S.DSRRInputDiv>
                  <S.DSRInput
                    placeholder='댓글을 입력하세요.'
                    onChange={(e) => handleInputValue(e)}
                    value={input}
                  />
                  <S.DSRSendImg src={Send} />
                </S.DSRRInputDiv>
                {comment.review.map((reply: Reply, replyIndex: number) => (
                  <S.DSREachCommentDiv
                    key={replyIndex}
                    style={{ width: '90%', marginLeft: 'auto' }}>
                    <ReReview
                      reply={reply}
                      handleComplainClick={handleComplainClick}
                    />
                  </S.DSREachCommentDiv>
                ))}
              </div>
            )}
        </>
      ) : (
        <>
          <S.DSRProfileDiv>
            <S.DSRProfileImg
              src={comment.profile}
              alt={`${comment.nickname} 프로필`}
            />
            <S.DSRProfileName>{comment.nickname}</S.DSRProfileName>
            <S.DSRBtnDiv>
              <S.DSRReviewBtn
                onClick={() => {
                  handleReviewClick(comment.nickname);
                  handleRereviewClick(id);
                }}>
                대댓글
              </S.DSRReviewBtn>
              <S.DSRHeartBtn>공감</S.DSRHeartBtn>
              <S.DSRComplainBtn onClick={handleComplainClick}>
                신고
              </S.DSRComplainBtn>
            </S.DSRBtnDiv>
          </S.DSRProfileDiv>
          <S.DSRContentDiv>
            <S.DSRContent>{comment.content}</S.DSRContent>
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
          {comment.review.length > 0 &&
            id == openRereview && ( //대댓글
              <div>
                <S.DSRRInputDiv>
                  <S.DSRInput
                    placeholder='댓글을 입력하세요.'
                    onChange={(e) => handleInputValue(e)}
                    value={input}
                  />
                  <S.DSRSendImg src={Send} />
                </S.DSRRInputDiv>
                {comment.review.map((reply: Reply, replyIndex: number) => (
                  <S.DSREachCommentDiv
                    key={replyIndex}
                    style={{ width: '90%', marginLeft: 'auto' }}>
                    <ReReview
                      reply={reply}
                      handleComplainClick={handleComplainClick}
                    />
                  </S.DSREachCommentDiv>
                ))}
              </div>
            )}
        </>
      )}
    </S.ReviewDiv>
  );
};

export default Review;
