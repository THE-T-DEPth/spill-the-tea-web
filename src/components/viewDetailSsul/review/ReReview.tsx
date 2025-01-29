import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import FullHeart from '../../../assets/Images/FullHeart.svg';
import EmptyHeart from '../../../assets/Images/EmptyHeart.svg';
import Profile from '../../../assets/Images/Profile.svg';
import {
  deleteComment,
  postCommentLike,
} from '../../../api/viewDetailSsul/viewDetailComment';

interface Reply {
  commentId: number;
  mine: boolean;
  liked: boolean;
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
  setCommentId: (value: number) => void;
  view: boolean;
}

const ReReview: React.FC<ReReviewProps> = ({
  reply,
  handleComplainClick,
  openInput,
  setCommentId,
  view,
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

  const handleRemoveComment = () => {
    const fetchDeleteComment = async () => {
      try {
        await deleteComment(reply.commentId);
      } catch (error) {
        console.log('fetchDeleteComment 중 오류 발생', error);
        throw error;
      }
    };
    fetchDeleteComment();
  };

  return (
    <>
      <S.DSRCocomentDiv $inputclick={openInput ? 'true' : 'false'}>
        <S.DSRProfileDiv>
          <S.DSRProfileImg
            src={reply.profileImage ? reply.profileImage : Profile}
          />
          <S.DSRProfileName
            style={{ color: reply.mine ? 'var(--Green3)' : 'black' }}>
            {reply.nickname}
          </S.DSRProfileName>
        </S.DSRProfileDiv>
        <S.DSRContentDiv>
          <S.DSRContent>{reply.content}</S.DSRContent>
          {view ? (
            <S.DSRBtnDiv2>
              <S.DSRHeartBtn
                onClick={() => {
                  handleCommentHeartClick();
                }}>
                공감
              </S.DSRHeartBtn>
              {!reply.mine ? (
                <S.DSRComplainBtn
                  onClick={() => {
                    handleComplainClick();
                    setCommentId(reply.commentId);
                  }}>
                  신고
                </S.DSRComplainBtn>
              ) : (
                <S.DSRComplainBtn onClick={handleRemoveComment}>
                  삭제
                </S.DSRComplainBtn>
              )}
            </S.DSRBtnDiv2>
          ) : (
            <></>
          )}
        </S.DSRContentDiv>
        <S.DSRDateHeartDiv>
          <S.DSRDateDiv>
            <S.DSRDate>{reply.createTime}</S.DSRDate>
            <S.DSRDate>{reply.createDate}</S.DSRDate>
          </S.DSRDateDiv>
          <S.DSRHeartDiv>
            <S.DSRHeartImg
              src={!reply.liked && view ? EmptyHeart : FullHeart}
            />
            <S.DSRHeartNum>{reply.likedCount}</S.DSRHeartNum>
          </S.DSRHeartDiv>
        </S.DSRDateHeartDiv>
      </S.DSRCocomentDiv>
    </>
  );
};

export default ReReview;
