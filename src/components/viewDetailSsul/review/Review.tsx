import React, { useEffect, useState } from 'react';
import * as S from '../../../styles/ViewDetailSsul/DetailSsulReviewComponentStyle';
import FullHeart from '../../../assets/images/FullHeart.svg';
import Send from '../../../assets/images/CombinedShape.svg';
import ReReview from './ReReview';
import {
  deleteComment,
  postComment,
  postCommentLike,
} from '../../../api/viewDetailSsul/viewDetailComment';
import Profile from '../../../assets/images/Profile.svg';
import ArrowSmall from '../../../assets/images/Arrow_small.svg';
import ArrowUpSmall from '../../../assets/images/ArrowUp_small.svg';

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

interface ReviewProps {
  comment: Comment;
  handleComplainClick: () => void;
  setCommentId: (value: number) => void;
  id: number;
  postId: number;
}

const Review: React.FC<ReviewProps> = ({
  comment,
  handleComplainClick,
  setCommentId,
  id,
  postId,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openRereviewInput, setOpenRereviewInput] = useState<number | null>(
    null
  );
  const [openRereviewIds, setOpenRereviewIds] = useState<Set<number>>(
    new Set()
  ); // 펼쳐진 대댓글 ID 관리
  const [nickname, setNickname] = useState<string | null>('');
  const [input, setInput] = useState<string>('');

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleReviewClick = (nickname: string | null) => {
    setNickname('@' + nickname);
    setInput('@' + nickname + ' ');
  };

  //제출 버튼을 클릭했을 때
  const handleRereviewSubmitClick = (
    parentCommentId: number,
    nickname: string
  ) => {
    if (input !== '@' + nickname + '') {
      alert('댓글 내용을 입력해주세요!');
      return;
    }
    const fetchPostRereview = async () => {
      try {
        await postComment(postId, input, parentCommentId);
      } catch (error) {
        console.log('fetchPostRereview 중 오류 발생', error);
      }
    };
    fetchPostRereview();
    setInput('@' + nickname + ' ');
  };

  //input 내에서 enter와 backspace 처리
  const onSubmitClick = (parentCommentId: number, nickname: string, e: any) => {
    if (e.key === 'Enter') {
      if (input !== '@' + nickname + '') {
        alert('댓글 내용을 입력해주세요!');
        return;
      }
      const fetchPostRereview = async () => {
        try {
          await postComment(postId, input, parentCommentId);
        } catch (error) {
          console.log('onSubmitClick 중 오류 발생', error);
        }
      };
      fetchPostRereview();
      setInput('@' + nickname + ' ');
    } else if (e.key === 'Backspace' && input === '@' + nickname + '') {
      setInput('');
    }
  };

  const handleToggleRereview = (key: number) => {
    setOpenRereviewIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key); // 이미 열려있으면 닫기
      } else {
        newSet.add(key); // 닫혀있으면 열기
      }
      return newSet;
    });
  };

  const handleRereviewInputClick = (key: number) => {
    setOpenRereviewInput((prev) => (prev === key ? null : key)); // 같은 키를 클릭하면 닫기
  };

  const handleCommentHeartClick = () => {
    const fetchPostCommentLike = async () => {
      try {
        await postCommentLike(comment.commentId);
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
        await deleteComment(comment.commentId);
      } catch (error) {
        console.log('fetchDeleteComment 중 오류 발생', error);
        throw error;
      }
    };
    fetchDeleteComment();
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

  return (
    <S.ReviewDiv $openrereview={openRereviewInput == id ? 'true' : 'false'}>
      {!isMobile ? (
        <>
          {/* 댓글 프로필 영역 */}
          <S.DSRProfileDiv>
            <S.DSRProfileImg
              src={comment.profileImage ? comment.profileImage : Profile}
            />
            <S.DSRProfileName
              style={{ color: comment.mine ? 'var(--Green3)' : 'black' }}>
              {comment.nickname}
            </S.DSRProfileName>
          </S.DSRProfileDiv>
          {/* 댓글 본문 */}
          <S.DSRContentDiv>
            <S.DSRContent>{comment.content}</S.DSRContent>
            <S.DSRBtnDiv>
              <S.DSRReviewBtn
                onClick={() => {
                  handleReviewClick(comment.nickname);
                  handleRereviewInputClick(id);
                }}>
                대댓글
              </S.DSRReviewBtn>
              <S.DSRHeartBtn onClick={handleCommentHeartClick}>
                공감
              </S.DSRHeartBtn>
              {!comment.mine ? (
                <S.DSRComplainBtn
                  onClick={() => {
                    handleComplainClick(); // 기존 함수 호출
                    setCommentId(id); // 추가 동작 수행
                  }}>
                  신고
                </S.DSRComplainBtn>
              ) : (
                <S.DSRComplainBtn
                  onClick={() => {
                    handleRemoveComment(); // 기존 함수 호출
                  }}>
                  삭제
                </S.DSRComplainBtn>
              )}
            </S.DSRBtnDiv>
          </S.DSRContentDiv>
          {/* 댓글 시간 및 공감수 */}
          <S.DSRDateHeartDiv>
            <S.DSRDateDiv>
              <S.DSRDate>{comment.createTime}</S.DSRDate>
              <S.DSRDate>{comment.createDate}</S.DSRDate>
            </S.DSRDateDiv>
            <S.DSRHeartDiv>
              <S.DSRHeartImg src={FullHeart} alt='공감 수' />
              <S.DSRHeartNum>{comment.likedCount}</S.DSRHeartNum>
            </S.DSRHeartDiv>
          </S.DSRDateHeartDiv>

          {!openRereviewIds.has(id) ? (
            <S.RereviewDiv onClick={() => handleToggleRereview(id)}>
              <S.RereviewArrowImg src={ArrowSmall} />
              <S.RereviewP>대댓글 더보기</S.RereviewP>
            </S.RereviewDiv>
          ) : (
            <></>
          )}

          {id === openRereviewInput && (
            <S.DSRRInputDiv>
              <S.DSRInput
                placeholder='댓글을 입력하세요.'
                onChange={(e) => handleInputValue(e)}
                onKeyUp={(e) =>
                  onSubmitClick(comment.commentId, comment.nickname, e)
                }
                value={input}
              />
              <S.DSRSendImg
                src={Send}
                onClick={() =>
                  handleRereviewSubmitClick(comment.commentId, comment.nickname)
                }
              />
            </S.DSRRInputDiv>
          )}

          {/* 대댓글 보기 / 접기 */}
          {!openRereviewIds.has(id) ? (
            <></>
          ) : (
            <>
              {comment.replyList.map((reply: Reply, replyIndex: number) => (
                <S.DSREachCommentDiv
                  key={replyIndex}
                  style={{ width: '95%', marginLeft: 'auto' }}>
                  <ReReview
                    openInput={id === openRereviewInput}
                    reply={reply}
                    handleComplainClick={handleComplainClick}
                  />
                </S.DSREachCommentDiv>
              ))}
              <S.RereviewDiv onClick={() => handleToggleRereview(id)}>
                <S.RereviewArrowImg src={ArrowUpSmall} />
                <S.RereviewP>대댓글 접기</S.RereviewP>
              </S.RereviewDiv>
            </>
          )}
        </>
      ) : (
        <>
          <S.DSRProfileDiv>
            <S.DSRProfileImg
              src={comment.profileImage ? comment.profileImage : Profile}
              alt={`${comment.nickname} 프로필`}
            />
            <S.DSRProfileName
              style={{ color: comment.mine ? 'var(--Green3)' : 'black' }}>
              {comment.nickname}
            </S.DSRProfileName>
            <S.DSRBtnDiv>
              <S.DSRReviewBtn
                onClick={() => {
                  handleReviewClick(comment.nickname);
                  handleRereviewInputClick(id);
                }}>
                대댓글
              </S.DSRReviewBtn>
              <S.DSRHeartBtn onClick={handleCommentHeartClick}>
                공감
              </S.DSRHeartBtn>
              {!comment.mine ? (
                <S.DSRComplainBtn
                  onClick={() => {
                    handleComplainClick(); // 기존 함수 호출
                    setCommentId(id); // 추가 동작 수행
                  }}>
                  신고
                </S.DSRComplainBtn>
              ) : (
                <S.DSRComplainBtn
                  onClick={() => {
                    handleRemoveComment();
                  }}>
                  삭제
                </S.DSRComplainBtn>
              )}
            </S.DSRBtnDiv>
          </S.DSRProfileDiv>
          <S.DSRContentDiv>
            <S.DSRContent>{comment.content}</S.DSRContent>
          </S.DSRContentDiv>
          <S.DSRDateHeartDiv>
            <S.DSRDateDiv>
              <S.DSRDate>{comment.createTime}</S.DSRDate>
              <S.DSRDate>{comment.createDate}</S.DSRDate>
            </S.DSRDateDiv>
            <S.DSRHeartDiv>
              <S.DSRHeartImg src={FullHeart} alt='공감 수' />
              <S.DSRHeartNum>{comment.likedCount}</S.DSRHeartNum>
            </S.DSRHeartDiv>
          </S.DSRDateHeartDiv>
          {!openRereviewIds.has(id) ? (
            <S.RereviewDiv onClick={() => handleToggleRereview(id)}>
              <S.RereviewArrowImg src={ArrowSmall} />
              <S.RereviewP>대댓글 더보기</S.RereviewP>
            </S.RereviewDiv>
          ) : (
            <></>
          )}

          {id === openRereviewInput && (
            <S.DSRRInputDiv>
              <S.DSRInput
                placeholder='댓글을 입력하세요.'
                onChange={(e) => handleInputValue(e)}
                onKeyUp={(e) =>
                  onSubmitClick(comment.commentId, comment.nickname, e)
                }
                value={input}
              />
              <S.DSRSendImg
                src={Send}
                onClick={() =>
                  handleRereviewSubmitClick(comment.commentId, comment.nickname)
                }
              />
            </S.DSRRInputDiv>
          )}

          {/* 대댓글 보기 / 접기 */}
          {!openRereviewIds.has(id) ? (
            <></>
          ) : (
            <>
              {comment.replyList.map((reply: Reply, replyIndex: number) => (
                <S.DSREachCommentDiv
                  key={replyIndex}
                  style={{
                    width: '95%',
                    marginLeft: 'auto',
                  }}>
                  <ReReview
                    openInput={id === openRereviewInput}
                    reply={reply}
                    handleComplainClick={handleComplainClick}
                  />
                </S.DSREachCommentDiv>
              ))}
              <S.RereviewDiv onClick={() => handleToggleRereview(id)}>
                <S.RereviewArrowImg src={ArrowUpSmall} />
                <S.RereviewP>대댓글 접기</S.RereviewP>
              </S.RereviewDiv>
            </>
          )}
        </>
      )}
    </S.ReviewDiv>
  );
};

export default Review;
