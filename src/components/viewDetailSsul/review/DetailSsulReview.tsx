import { useState } from 'react';
import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import Send from '../../../assets/images/CombinedShape.svg';
import commentDummy from '../../../assets/dummy/CommentSSulDummy';
import Review from './Review';

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

const DetailSsulReview: React.FC<{
  setIsComplainModalOpen: (value: boolean) => void;
}> = ({ setIsComplainModalOpen }) => {
  const [nickname, setNickname] = useState<string | null>('');
  const [input, setInput] = useState<
    string | number | readonly string[] | undefined
  >();

  const handleInputValue = (e: any) => {
    setInput(e.target.value);
  };

  const handleReviewClick = (nickname: string | null) => {
    setNickname('@' + nickname);
    setInput('@' + nickname + ' ');
  };

  const handleComplainClick = () => {
    setIsComplainModalOpen(true); // 모달 열기
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
        {commentDummy.map(
          (
            comment: Comment,
            index: number //댓글
          ) => (
            <S.DSREachCommentDiv key={index}>
              <Review
                handleComplainClick={handleComplainClick}
                handleReviewClick={handleReviewClick}
                comment={comment}
              />
            </S.DSREachCommentDiv>
          )
        )}
      </S.DSRDiv>
    </>
  );
};

export default DetailSsulReview;