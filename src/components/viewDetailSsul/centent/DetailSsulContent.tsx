import * as S from '../../../styles/ViewDetailSsul/DetailSsulContentComponentStyle';
import dummyData from '../../../assets/dummy/DetailSSulDummy';
import Speaker from '../../../assets/images/VolumeUp.svg';
import FullHeart from '../../../assets/images/FullHeart.svg';
import EmptyHeart from '../../../assets/images/EmptyHeart.svg';
import Comment from '../../../assets/images/GrayComment.svg';
import Share from '../../../assets/images/Share.svg';
import Menu from '../../../assets/images/FixMenu.svg';
import { useState } from 'react';

const DetailSsulContent: React.FC<{
  setIsRemoveModal: (value: boolean) => void;
}> = ({ setIsRemoveModal }) => {
  const [isHeartClick, setIsHeartClick] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleHeartClick = () => {
    setIsHeartClick(!isHeartClick);
  };

  const handleRemoveClick = () => {
    //게시물 삭제 버튼을 클릭했을 때 나타나는 동작
    setIsRemoveModal(true);
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
      <S.CDiv>
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
      </S.CDiv>
    </>
  );
};

export default DetailSsulContent;
