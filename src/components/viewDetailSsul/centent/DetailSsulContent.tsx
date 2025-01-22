import * as S from '../../../styles/ViewDetailSsul/DetailSsulContentComponentStyle';
import dummyData from '../../../assets/dummy/DetailSSulDummy';
import Speaker from '../../../assets/images/VolumeUp.svg';
import FullHeart from '../../../assets/images/FullHeart.svg';
import EmptyHeart from '../../../assets/images/EmptyHeart.svg';
import Comment from '../../../assets/images/GrayComment.svg';
import Share from '../../../assets/images/Share.svg';
import Menu from '../../../assets/images/FixMenu.svg';
import { useEffect, useState } from 'react';
import CopyUrlModal from '../modal/CopyUrlModal';
import TTSModal from '../modal/TTSModal';
import {
  DeleteLike,
  deleteMyPost,
  getLike,
  getMyPost,
  getPostDetail,
  postLike,
} from '../../../api/viewDetailSsul/viewDetailContent';
import { getKeywordResult } from '../../../api/viewDetailSsul/viewDetailKeyword';

//반환값 바뀔꺼임 memberid 없애고 사용자 프로필, 사용자 이름, email 추가하고 email setBlockEmail로 넘겨주기
interface PostDetail {
  postId: number;
  title: string;
  keywordList: string[];
  nickname: string;
  createdDateTime: string;
  voiceType: string;
  content: string;
  thumb: string; //이미지
  likedCount: number;
  commentCount: number;
  memberId: number;
}

const DetailSsulContent: React.FC<{
  setIsRemoveModal: (value: boolean) => void;
  setIsEditModal: (value: boolean) => void;
  setIsReportModal: (value: boolean) => void;
  setIsBlockModal: (value: boolean) => void;
  setBlockEmail: (value: string) => void;
  postId: number;
  setMemberId: (value: number) => void;
}> = ({
  setIsRemoveModal,
  setIsEditModal,
  setIsReportModal,
  setIsBlockModal,
  setBlockEmail,
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
  const [myPost, setMyPost] = useState<boolean>();

  //하트 post 및 delete
  const handleHeartClick = () => {
    console.log(token);
    const nextIsHeartClick = !isHeartClick;
    if (token) {
      setIsHeartClick(nextIsHeartClick);
      if (nextIsHeartClick) {
        const fetchPostLike = async () => {
          try {
            await postLike(postId);
          } catch (error) {
            console.log('fetchPostLike 중 오류 발생', error);
          }
        };
        fetchPostLike();
      } else if (nextIsHeartClick == false) {
        const fetchDeleteLike = async () => {
          try {
            await DeleteLike(postId);
          } catch (error) {
            console.log('fetchDeleteLike 중 오류 발생', error);
          }
        };
        fetchDeleteLike();
      }
    }
  };

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

  //이거 시간 설정 잘못된듯 - 저녁20:30분 게시글 11:30이라고 뜸
  const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);

    // 날짜 추출
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const year = date.getFullYear().toString().slice(-2); // 마지막 두 자리

    // 시간 추출
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // 원하는 형식으로 반환
    return `${year}.${month}.${day} / ${hours}:${minutes}`;
  };

  const handleKeywordClick = (keyword: string) => {
    const fetchKeywordResult = async () => {
      try {
        const response = await getKeywordResult(keyword);
        console.log(response.data.contents);
      } catch (error) {
        console.log('fetchKeywordResult 중 오류 발생', error);
        throw error;
      }
    };
    fetchKeywordResult();
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
  }, [postId, handleHeartClick]);

  //메뉴 버튼 클릭했을 시
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  //음성 관리
  const pitch = 1; //음성의 높낮이
  const rate = 1; //음성의 속도

  async function populateVoiceList(synth: SpeechSynthesis) {
    try {
      const voices = await synth.getVoices().sort(function (a, b) {
        //브라우저가 지원하는 음성리스트 가져옴, 음성 리스트를 알파벳 순으로 정렬
        const aname = a.name.toUpperCase();
        const bname = b.name.toUpperCase();
        if (aname < bname) return -1;
        else if (aname === bname) return 0;
        else return +1;
      });

      return voices;
    } catch (error) {
      throw new Error('Failure retrieving voices');
    }
  }

  async function speak(textToRead: string, synth: SpeechSynthesis) {
    if (speechSynthesis.onvoiceschanged !== undefined) {
      //브라우저에서 음성 리스트 변경 시 최신 음성 목록 가져옴
      speechSynthesis.onvoiceschanged = () => populateVoiceList;
    }

    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (textToRead !== '') {
      //음성이 비어있지 않으면 합성 시작
      const utterThis = new SpeechSynthesisUtterance(textToRead); //텍스트를 객체로
      utterThis.onend = function () {}; //음성 읽기가 끝났을 때 호출
      utterThis.onerror = function () {
        //음성 합성 중 오류가 발생했을 때때
        console.error('SpeechSynthesisUtterance.onerror');
      };
      // utterThis.voice = voices[0]
      utterThis.pitch = pitch;
      utterThis.rate = rate;
      synth.speak(utterThis);
    }
  }

  const handlePlay = async () => {
    // const htmlContent = postDetail?.content ?? '';
    // // HTML을 텍스트로 변환
    // const tempElement = document.createElement('div');
    // tempElement.innerHTML = htmlContent;
    // const plainText = tempElement.textContent || tempElement.innerText || '';
    // if (plainText == '') {
    //   alert('글 내용이 없습니다.');
    //   return;
    // }
    // try {
    //   await postTTS(postDetail?.voiceType, plainText);
    // } catch (error) {
    //   console.log('fetch 중 에러 발생', error);
    // }
  };

  //페이지 reload 될 때마다 하트 클릭상태 최신 유지
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    const fetchMyLike = async (currentPostId: number) => {
      if (token) {
        try {
          const data = await getLike(); // API 호출
          const likedPosts = data.data.contents; // 좋아요 목록 데이터 추출

          // 현재 postId가 좋아요 목록에 있는지 확인
          const isLiked = likedPosts.some(
            (post: { postId: number }) => post.postId === currentPostId
          );

          setIsHeartClick(isLiked);
        } catch (error) {
          console.log('fetchMyLike 중 오류 발생', error);
          throw error;
        }
      }
    };
    fetchMyLike(postId);

    const fetchMyPost = async (currentPostId: number) => {
      // if (token) {
      try {
        const data = await getMyPost();
        const IsMyPost = data.data.contents.some(
          (post: { postId: number }) => post.postId === currentPostId
        );
        setMyPost(IsMyPost);
      } catch (error) {}
      // }
    };
    fetchMyPost(postId);
  }, [postId]);

  //반응형 크기 조정
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
    <>
      {!isMobile ? (
        <S.CDiv>
          <S.DSCTitleDiv>
            <S.DSCTitle>{postDetail?.title}</S.DSCTitle>
          </S.DSCTitleDiv>
          <S.DSCMenuDiv>
            {/*토큰과 내 게시글임이 맞을때 view*/}
            {token ? (
              <S.DSCMenuImg src={Menu} onClick={handleMenuClick} />
            ) : (
              <></>
            )}
            {openMenu ? (
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

            <S.DSCProfileDiv>
              <S.DSCProfileImg src={dummyData[0].profile} />
              <S.DSCProfileTextDiv>
                <S.DSCName>{dummyData[0].nickname}</S.DSCName>
                <S.DSCProfileDate>
                  {postDetail?.createdDateTime &&
                    formatDateTime(postDetail.createdDateTime)}
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
                onClick={token ? handleHeartClick : () => {}}
                src={isHeartClick || !token ? FullHeart : EmptyHeart}
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
                  handlePlay;
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
            <S.DSCProfileImg src={dummyData[0].profile} />
            <S.DSCProfileTextDiv>
              <S.DSCName>{dummyData[0].nickname}</S.DSCName>
              <S.DSCProfileDate>
                {postDetail?.createdDateTime &&
                  formatDateTime(postDetail.createdDateTime)}
              </S.DSCProfileDate>
            </S.DSCProfileTextDiv>
            <S.DSCMenuDiv>
              {/*토큰과 내 게시글임이 맞을때 view*/}
              <S.DSCMenuImg src={Menu} onClick={handleMenuClick} />
              {openMenu ? (
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
                <S.DSCEachTag key={index}># {value}</S.DSCEachTag>
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
                onClick={handleHeartClick}
                src={isHeartClick ? FullHeart : EmptyHeart}
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
                  handlePlay;
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
