import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import FullHeart from '../../../assets/images/FullHeart.svg';
import Profile from '../../../assets/images/Profile.svg';
import { postCommentLike } from '../../../api/viewDetailSsul/viewDetailComment';

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

interface ReReviewProps {
  reply: Reply;
  handleComplainClick: () => void;
  openInput: boolean;
}

const ReReview: React.FC<ReReviewProps> = ({
  reply,
  handleComplainClick,
  openInput,
}) => {
  const handleCommentHeartClick = () => {
    const fetchPostCommentLike = async () => {
      try {
        await postCommentLike(reply.commentId);
      } catch (error) {
        console.log('fetchPostCommentLike 중 오류 발생', error);
        throw error;
      }
    };
    fetchPostCommentLike();
  };

  return (
    <>
      <S.DSRCocomentDiv $inputclick={openInput ? 'true' : 'false'}>
        <S.DSRProfileDiv>
          <S.DSRProfileImg
            src={reply.profileImage ? reply.profileImage : Profile}
            alt={`${reply.nickname} 프로필`}
          />
          <S.DSRProfileName>{reply.nickname}</S.DSRProfileName>
        </S.DSRProfileDiv>
        <S.DSRContentDiv>
          <S.DSRContent>{reply.content}</S.DSRContent>
          <S.DSRBtnDiv2>
            <S.DSRHeartBtn
              onClick={() => {
                handleCommentHeartClick();
              }}>
              공감
            </S.DSRHeartBtn>
            <S.DSRComplainBtn onClick={handleComplainClick}>
              신고
            </S.DSRComplainBtn>
          </S.DSRBtnDiv2>
        </S.DSRContentDiv>
        <S.DSRDateHeartDiv>
          <S.DSRDateDiv>
            <S.DSRDate>{reply.createTime}</S.DSRDate>
            <S.DSRDate>{reply.createDate}</S.DSRDate>
          </S.DSRDateDiv>
          <S.DSRHeartDiv>
            <S.DSRHeartImg src={FullHeart} alt='공감 수' />
            <S.DSRHeartNum>{reply.likedCount}</S.DSRHeartNum>
          </S.DSRHeartDiv>
        </S.DSRDateHeartDiv>
      </S.DSRCocomentDiv>
    </>
  );
};

export default ReReview;
