import * as S from '../styles/ViewDetailSsul/ViewDetailSsulPageComponentStyle';
import dummyData from '../assets/dummy/DetailSSulDummy';
import Speaker from '../assets/images/VolumeUp.svg';
import FullHeart from '../assets/images/FullHeart.svg';
import EmptyHeart from '../assets/images/EmptyHeart.svg';
import Comment from '../assets/images/GrayComment.svg';
import Share from '../assets/images/Share.svg';
import Send from '../assets/images/CombinedShape.svg';
import commentDummy from '../assets/dummy/CommentSSulDummy';
import { useEffect, useState } from 'react';
import ComplainModal from '../components/viewDetailSsul/ComplainModal';
import Menu from '../assets/images/FixMenu.svg';
import RemoveModal from '../components/viewDetailSsul/RemoveModal';

const ViewDetailSsulPage = () => {
  const [isHeartClick, setIsHeartClick] = useState<boolean>(false);
  const [nickname, setNickname] = useState<any>('');
  const [input, setInput] = useState<any>();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isRemoveModal, setIsRemoveModal] = useState<boolean>(false);
  const [isComplainModalOpen, setIsComplainModalOpen] =
    useState<boolean>(false); // 모달 상태 관리

  const handleInputValue = (e: any) => {
    setInput(e.target.value);
  };

  const handleHeartClick = () => {
    setIsHeartClick(!isHeartClick);
  };

  const handleReviewClick = (nickname: string | null) => {
    setNickname('@' + nickname);
    setInput('@' + nickname + ' ');
  };

  const handleComplainClick = () => {
    setIsComplainModalOpen(true); // 모달 열기
    document.body.style.overflow = 'hidden';
  };

  const handleRemoveClick = () => {
    setIsRemoveModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsComplainModalOpen(false); // 모달 닫기
    document.body.style.overflow = 'unset';
  };

  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert('현재 페이지 주소가 복사되었습니다.');
      })
      .catch((err) => {
        console.error('주소 복사에 실패했습니다:', err); // 에러 처리
      });
  };

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (!isRemoveModal) document.body.style.overflow = 'unset';
  }, [isRemoveModal]);

  const pitch = 1; //음성의 높낮이
  const rate = 10; //음성의 속도

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

  return (
    <>
      <S.DSDiv>
        {/*detail ssul div*/}
        <S.DSCDiv>
          {/*detail ssul content div*/}
          <S.DSCTitleDiv>
            <S.DSCTitle>{dummyData[0].title}</S.DSCTitle>
          </S.DSCTitleDiv>
          <S.DSCMenuDiv>
            {/*토큰과 내 게시글임이 맞을때 view*/}
            <S.DSCMenuImg src={Menu} onClick={handleMenuClick} />
            {openMenu ? (
              <>
                <S.DSCMenuDetailContainer>
                  <S.DSCMenuDetailFixDiv>
                    <S.DSCDSCMenuDetail>수정하기</S.DSCDSCMenuDetail>
                  </S.DSCMenuDetailFixDiv>
                  <S.DSCMenuDetailRemoveDiv>
                    <S.DSCDSCMenuDetail onClick={handleRemoveClick}>
                      삭제하기
                    </S.DSCDSCMenuDetail>
                  </S.DSCMenuDetailRemoveDiv>
                </S.DSCMenuDetailContainer>
              </>
            ) : (
              <></>
            )}
          </S.DSCMenuDiv>
          <S.DSCContentWholeDiv>
            <S.DSCTagDiv>
              {dummyData[0].tags.map((value, index) => {
                return <S.DSCEachTag key={index}># {value}</S.DSCEachTag>;
              })}
            </S.DSCTagDiv>

            <S.DSCProfileDiv>
              <S.DSCProfileImg src={dummyData[0].profile} />
              <S.DSCProfileTextDiv>
                <S.DSCName>{dummyData[0].nickname}</S.DSCName>
                <S.DSCProfileDate>{dummyData[0].date}</S.DSCProfileDate>
              </S.DSCProfileTextDiv>
            </S.DSCProfileDiv>
            <S.DSCSpeaker
              src={Speaker}
              onClick={() => {
                speechSynthesis.cancel();
                speak(dummyData[0].content, window.speechSynthesis);
              }}
            />
            <S.DSCContentDiv>
              <S.DSCContentText>{dummyData[0].content}</S.DSCContentText>
              <S.DSCContentImg src={dummyData[0].image} />
            </S.DSCContentDiv>
            <S.DSCAnoterDiv>
              <S.DSCHeartImg
                onClick={handleHeartClick}
                src={isHeartClick ? FullHeart : EmptyHeart}
              />
              <S.DSCHeartNum>{dummyData[0].heart}</S.DSCHeartNum>
              <S.DSCCommenttImg src={Comment} />
              <S.DSCCommenttNum>{dummyData[0].review}</S.DSCCommenttNum>
              <S.DSCShareImg src={Share} onClick={handleShareClick} />
            </S.DSCAnoterDiv>
          </S.DSCContentWholeDiv>
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
        </S.DSCDiv>
      </S.DSDiv>
      {isComplainModalOpen && <ComplainModal onClose={handleModalClose} />}{' '}
      {isRemoveModal && <RemoveModal setOpenModal={setIsRemoveModal} />}
      {/* 모달 렌더링 */}
    </>
  );
};

export default ViewDetailSsulPage;
