import * as S from '../../../styles/ViewDetailSsul/DetailSsulContentComponentStyle';
import Speaker from '../../../assets/images/VolumeUp.svg';
import FullHeart from '../../../assets/images/FullHeart.svg';
import EmptyHeart from '../../../assets/images/EmptyHeart.svg';
import Comment from '../../../assets/images/GrayComment.svg';
import Share from '../../../assets/images/Share.svg';
import Menu from '../../../assets/images/FixMenu.svg';
import Profile from '../../../assets/images/Profile.svg';
import { useEffect, useState } from 'react';
import CopyUrlModal from '../modal/CopyUrlModal';
import TTSModal from '../modal/TTSModal';
import { useNavigate } from 'react-router-dom';

import {
  DeleteLike,
  getLike,
  getMyPost,
  getPostDetail,
  postLike,
} from '../../../api/viewDetailSsul/viewDetailContent';
import { getKeywordResult } from '../../../api/viewDetailSsul/viewDetailKeyword';
import { postTTS } from '../../../api/write/tts';

interface PostDetail {
  postId: number;
  title: string;
  keywordList: string[];
  nickname: string;
  profileImage: string;
  createDate: string;
  createTime: string;
  voiceType: string;
  content: string;
  thumbUrl: string; //이미지
  likedCount: number;
  commentCount: number;
  memberId: number;
}

const DetailSsulContent: React.FC<{
  setIsRemoveModal: (value: boolean) => void;
  setIsEditModal: (value: boolean) => void;
  setIsReportModal: (value: boolean) => void;
  setIsBlockModal: (value: boolean) => void;
  postId: number;
  setMemberId: (value: number) => void;
}> = ({
  setIsRemoveModal,
  setIsEditModal,
  setIsReportModal,
  setIsBlockModal,
  postId,
  setMemberId,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHeartClick, setIsHeartClick] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openUrl, setOpenUrl] = useState<boolean>(false);
  const [openTTS, setOpenTTS] = useState<boolean>(false);
  const [postDetail, setPostDetail] = useState<PostDetail>();
  const [token, setToken] = useState<string | null>();
  const [view, setView] = useState<boolean>(false);
  const [myPost, setMyPost] = useState<boolean>();
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditModal(true);
  };

  const handleRemoveClick = () => {
    //게시물 삭제 버튼을 클릭했을 때 나타나는 동작
    setIsRemoveModal(true);
  };

  const handleReportClick = () => {
    setIsReportModal(true);
  };

  const handleBlockClick = () => {
    if (postDetail?.memberId) {
      setMemberId(postDetail?.memberId);
    }
    console.log(postDetail?.memberId);
    setIsBlockModal(true);
  };

  //메뉴 버튼 클릭했을 시
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  //공유버튼 클릭했을 시
  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setOpenUrl(true);
      })
      .catch((err) => {
        console.error('주소 복사에 실패했습니다:', err); // 에러 처리
      });
  };

  const handleKeywordClick = (keyword: string) => {
    navigate('/ssulpage', { state: { newKeyword: keyword } });
  };

  const handlePlay = async () => {
    const htmlContent = postDetail?.content ?? '';
    // HTML을 텍스트로 변환
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlContent;
    const plainText = tempElement.textContent || tempElement.innerText || '';
    if (plainText == '') {
      alert('글 내용이 없습니다.');
      return;
    }
    try {
      if (postDetail?.voiceType) {
        if (postDetail.voiceType == 'ko_KR_Standard_A') {
          await postTTS('ko-KR-Standard-A', plainText);
        } else if (postDetail.voiceType == 'ko_KR_Standard_C') {
          await postTTS('ko-KR-Standard-C', plainText);
        }
      }
    } catch (error) {
      console.log('fetch 중 에러 발생', error);
    }
  };

  //하트 post 및 delete
  const handleHeartClick = async () => {
    if (!token) return;

    const nextIsHeartClick = !isHeartClick;

    try {
      if (nextIsHeartClick) {
        // 좋아요 추가
        await postLike(postId);
      } else {
        // 좋아요 삭제
        await DeleteLike(postId);
      }
      // API 성공 시 상태 업데이트
      setIsHeartClick(nextIsHeartClick);
    } catch (error) {
      console.log('좋아요 처리 중 오류 발생:', error);
    }
  };

  //post 가져오기
  useEffect(() => {
    const fetchPostDetailData = async () => {
      try {
        // API 호출 및 데이터 가져오기
        const data = await getPostDetail(postId);
        const keywordArray = data.data.keywordList
          .replace(/^\[|\]$/g, '') // 대괄호 제거
          .split(',') // 콤마로 분리
          .map((keyword: string) => keyword.trim()); // 앞뒤 공백 제거

        setPostDetail({
          ...data.data, // 기존 데이터 복사
          keywordList: keywordArray, // keywordList 업데이트
        });
      } catch (error) {
        console.log('오류 발생:', error);
      }
    };
    fetchPostDetailData();
  }, [postId, postDetail]);

  //하트 클릭상태 최신 유지
  useEffect(() => {
    const fetchMyLike = async (currentPostId: number) => {
      if (token) {
        try {
          const data = await getLike(); // API 호출
          const likedPosts = data.data.contents; // 좋아요 목록 데이터 추출

          // 현재 postId가 좋아요 목록에 있는지 확인
          const isLiked = likedPosts.some(
            (post: { postId: number }) => post.postId === currentPostId
          );

          setView(true); //정보를 불러올 수 있는지 없는지 확인함으로써 회원 정보, 로그인 정보를 확인
          setIsHeartClick(isLiked);
        } catch (error) {
          console.log('fetchMyLike 중 오류 발생', error);
          setView(false);
          throw error;
        }
      }
    };
    fetchMyLike(postId);

    const fetchMyPost = async (currentPostId: number) => {
      if (token) {
        try {
          const data = await getMyPost();
          const IsMyPost = data.data.contents.some(
            (post: { postId: number }) => post.postId === currentPostId
          );
          setMyPost(IsMyPost);
        } catch (error) {}
      }
    };
    fetchMyPost(postId);
  }, [postId, token]);

  //반응형 크기 조정
  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
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
    <>
      {!isMobile ? (
        <S.CDiv>
          <S.DSCTitleDiv>
            <S.DSCTitle>{postDetail?.title}</S.DSCTitle>
          </S.DSCTitleDiv>
          <S.DSCMenuDiv>
            {/*토큰과 내 게시글임이 맞을때 view*/}
            {token && view ? (
              <S.DSCMenuImg src={Menu} onClick={handleMenuClick} />
            ) : (
              <></>
            )}
            {openMenu && token && view ? (
              <S.DSCMenuDetailContainer>
                {myPost ? (
                  <>
                    <S.DSCMenuDetailFixDiv>
                      <S.DSCDSCMenuDetail onClick={handleEditClick}>
                        수정하기
                      </S.DSCDSCMenuDetail>
                    </S.DSCMenuDetailFixDiv>
                    <S.DSCMenuDetailRemoveDiv>
                      <S.DSCDSCMenuDetail onClick={handleRemoveClick}>
                        삭제하기
                      </S.DSCDSCMenuDetail>
                    </S.DSCMenuDetailRemoveDiv>
                  </>
                ) : (
                  <>
                    <S.DSCMenuDetailFixDiv>
                      <S.DSCDSCMenuDetail onClick={handleReportClick}>
                        신고하기
                      </S.DSCDSCMenuDetail>
                    </S.DSCMenuDetailFixDiv>
                    <S.DSCMenuDetailRemoveDiv>
                      <S.DSCDSCMenuDetail onClick={handleBlockClick}>
                        차단하기
                      </S.DSCDSCMenuDetail>
                    </S.DSCMenuDetailRemoveDiv>
                  </>
                )}
              </S.DSCMenuDetailContainer>
            ) : (
              <></>
            )}
          </S.DSCMenuDiv>
          <S.DSCContentWholeDiv>
            <S.DSCTagDiv style={{ marginTop: token && view ? '' : '10px' }}>
              {postDetail?.keywordList ? (
                postDetail.keywordList.map((value, index) => (
                  <S.DSCEachTag
                    key={index}
                    onClick={() => handleKeywordClick(value)}>
                    # {value}
                  </S.DSCEachTag>
                ))
              ) : (
                <p>로딩 중...</p>
              )}
            </S.DSCTagDiv>

            <S.DSCProfileDiv>
              <S.DSCProfileImg
                src={
                  postDetail?.profileImage ? postDetail.profileImage : Profile
                }
              />
              <S.DSCProfileTextDiv>
                <S.DSCName>{postDetail?.nickname}</S.DSCName>
                <S.DSCProfileDate>
                  {postDetail?.createDate} / {postDetail?.createTime}
                </S.DSCProfileDate>
              </S.DSCProfileTextDiv>
            </S.DSCProfileDiv>
            {postDetail?.voiceType == 'none' ? (
              <S.DSCSpeaker
                src={Speaker}
                style={{ opacity: '0.5', cursor: 'default' }}
              />
            ) : (
              <S.DSCSpeaker
                src={Speaker}
                onClick={() => {
                  setOpenTTS(true); // TTS 모달 열기
                }}
              />
            )}
            <S.DSCContentDiv>
              <S.DSCContentText
                dangerouslySetInnerHTML={{ __html: postDetail?.content ?? '' }}
              />
            </S.DSCContentDiv>
            <S.DSCAnoterDiv>
              <S.DSCHeartImg
                onClick={token && view ? handleHeartClick : () => {}}
                src={isHeartClick || !view ? FullHeart : EmptyHeart}
              />
              <S.DSCHeartNum>{postDetail?.likedCount}</S.DSCHeartNum>
              <S.DSCCommenttImg src={Comment} />
              <S.DSCCommenttNum>{postDetail?.commentCount}</S.DSCCommenttNum>
              <S.DSCShareImg src={Share} onClick={handleShareClick} />
            </S.DSCAnoterDiv>
          </S.DSCContentWholeDiv>
          {openUrl ? <CopyUrlModal setOpenUrl={setOpenUrl} /> : <></>}
          {openTTS ? (
            <TTSModal
              setOpenModal={setOpenTTS}
              setConfirmTTS={(value) => {
                if (value) {
                  handlePlay();
                }
              }}
            />
          ) : (
            <></>
          )}
        </S.CDiv>
      ) : (
        <S.CDiv>
          <S.DSCProfileDiv>
            <S.DSCProfileImg
              src={
                postDetail?.profileImage ? postDetail?.profileImage : Profile
              }
            />
            <S.DSCProfileTextDiv>
              <S.DSCName>{postDetail?.nickname}</S.DSCName>
              <S.DSCProfileDate>
                {postDetail?.createDate} / {postDetail?.createTime}
              </S.DSCProfileDate>
            </S.DSCProfileTextDiv>
            <S.DSCMenuDiv>
              {/*토큰과 내 게시글임이 맞을때 view*/}
              {token && view ? (
                <S.DSCMenuImg src={Menu} onClick={handleMenuClick} />
              ) : (
                <></>
              )}
              {openMenu && token && view ? (
                <S.DSCMenuDetailContainer>
                  {myPost ? (
                    <>
                      <S.DSCMenuDetailFixDiv>
                        <S.DSCDSCMenuDetail onClick={handleEditClick}>
                          수정하기
                        </S.DSCDSCMenuDetail>
                      </S.DSCMenuDetailFixDiv>
                      <S.DSCMenuDetailRemoveDiv>
                        <S.DSCDSCMenuDetail onClick={handleRemoveClick}>
                          삭제하기
                        </S.DSCDSCMenuDetail>
                      </S.DSCMenuDetailRemoveDiv>
                    </>
                  ) : (
                    <>
                      <S.DSCMenuDetailFixDiv>
                        <S.DSCDSCMenuDetail onClick={handleReportClick}>
                          신고하기
                        </S.DSCDSCMenuDetail>
                      </S.DSCMenuDetailFixDiv>
                      <S.DSCMenuDetailRemoveDiv>
                        <S.DSCDSCMenuDetail onClick={handleBlockClick}>
                          차단하기
                        </S.DSCDSCMenuDetail>
                      </S.DSCMenuDetailRemoveDiv>
                    </>
                  )}
                </S.DSCMenuDetailContainer>
              ) : (
                <></>
              )}
            </S.DSCMenuDiv>
          </S.DSCProfileDiv>
          <S.DSCTagDiv>
            {postDetail?.keywordList ? (
              postDetail.keywordList.map((value, index) => (
                <S.DSCEachTag
                  key={index}
                  onClick={() => handleKeywordClick(value)}>
                  # {value}
                </S.DSCEachTag>
              ))
            ) : (
              <p>로딩 중...</p>
            )}
          </S.DSCTagDiv>
          <S.DSCTitleDiv>
            <S.DSCTitle>{postDetail?.title}</S.DSCTitle>
            {postDetail?.voiceType == 'none' ? (
              <S.DSCSpeaker
                src={Speaker}
                style={{ opacity: '0.5', cursor: 'default' }}
              />
            ) : (
              <S.DSCSpeaker
                src={Speaker}
                onClick={() => {
                  setOpenTTS(true); // TTS 모달 열기
                }}
              />
            )}
          </S.DSCTitleDiv>
          <S.DSCContentWholeDiv>
            <S.DSCContentDiv>
              <S.DSCContentText
                dangerouslySetInnerHTML={{ __html: postDetail?.content ?? '' }}
              />
            </S.DSCContentDiv>
            <S.DSCAnoterDiv>
              <S.DSCHeartImg
                onClick={token && view ? handleHeartClick : () => {}}
                src={isHeartClick || !view ? FullHeart : EmptyHeart}
              />
              <S.DSCHeartNum>{postDetail?.likedCount}</S.DSCHeartNum>
              <S.DSCCommenttImg src={Comment} />
              <S.DSCCommenttNum>{postDetail?.commentCount}</S.DSCCommenttNum>
              <S.DSCShareImg src={Share} onClick={handleShareClick} />
            </S.DSCAnoterDiv>
          </S.DSCContentWholeDiv>
          {openUrl ? <CopyUrlModal setOpenUrl={setOpenUrl} /> : <></>}
          {openTTS ? (
            <TTSModal
              setOpenModal={setOpenTTS}
              setConfirmTTS={(value) => {
                if (value) {
                  handlePlay();
                }
              }}
            />
          ) : (
            <></>
          )}
        </S.CDiv>
      )}
    </>
  );
};

export default DetailSsulContent;
