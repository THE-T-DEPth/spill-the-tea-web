import { useState } from 'react';
import JjalData from '../../../assets/dummy/JJalDummy';
import Search from '../../../assets/images/Search.svg';
import Play from '../../../assets/images/Play.svg';
import keywordData from '../../../assets/dummy/KeywordDummy';
import * as S from '../../../styles/Write/SelectAnotherComponentStyle';
import KeywordModal from '../modal/KeywordModal';
import AnotherBtn from './AnotherBtn';
import SelectVoice from './SelectVoice';
import BottomBtn from './BottomBtn';
import SelectKeywordType from './SelecteKeywordType';

interface KeywordProp {
  selectedThreeKeywords: string[];
  setSelectedThreeKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectAnother: React.FC<KeywordProp> = (props) => {
  const [novelizationValue, setNovelizationValue] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('소설화');
  const [selectedKeywordType, setSelectedKeywordType] = useState<number>(1);
  const [ttsInput, setTtsInput] = useState<any>('');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [openKeywordModal, setOpenKeywordModal] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] =
    useState<string>('차분한 성인 남성');

  const handleNovelizationInput = (e: any) => {
    setNovelizationValue(e.target.value);
  };

  const handleNovelizationRemove = () => {
    setNovelizationValue('');
  };

  const handleTypeClick = (selectType: string) => {
    setSelectedType(selectType);
  };

  const handleKeywordType = (selectType: number) => {
    setSelectedKeywordType(selectType);
  };

  const handleVoiceClick = (selectType: string) => {
    setSelectedVoice(selectType);
  };

  const handleTtsInput = (e: any) => {
    setTtsInput(e.target.value);
  };

  const filteredKeywords = keywordData.find(
    (data) => data.type === selectedKeywordType
  )?.keywords;

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords((prev) => prev.filter((item) => item != keyword));
    } else if (selectedKeywords.length < 3) {
      setSelectedKeywords((prev) => [...prev, keyword]); //전에 있던 배열에 추가
    } else alert('3개를 초과했습니다.');
  };

  const handleKeywordRemove = () => {
    setSelectedKeywords([]);
  };

  const handleSubmitKeyword = () => {
    if (selectedKeywords.length === 3) {
      props.setSelectedThreeKeywords(selectedKeywords);
      //제출하는 api 연결
    } else {
      setOpenKeywordModal(true);
    }
  };

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

  return (
    <>
      <S.AnotherInputDiv>
        <S.AnotherBtnDiv>
          <AnotherBtn
            type='소설화'
            selectedType={selectedType}
            handleTypeClick={handleTypeClick}
          />
          <AnotherBtn
            type='짤 검색'
            selectedType={selectedType}
            handleTypeClick={handleTypeClick}
          />
          <AnotherBtn
            type='음성 출력'
            selectedType={selectedType}
            handleTypeClick={handleTypeClick}
          />
          <AnotherBtn
            type='키워드 지정'
            selectedType={selectedType}
            handleTypeClick={handleTypeClick}
          />
        </S.AnotherBtnDiv>
        <S.AnotherTextDiv>
          {selectedType === '소설화' ? (
            <S.NovelizationBtn>소설화 실행</S.NovelizationBtn>
          ) : (
            <></>
          )}
          {selectedType === '짤 검색' ? (
            <S.SearchContainer>
              <S.AnotherSearch placeholder='키워드를 통해 짤 검색이 가능합니다.' />
              <S.AnotherSearchImg src={Search} />
            </S.SearchContainer>
          ) : (
            <></>
          )}
          {selectedType === '음성 출력' ? (
            <S.AnotherText>목소리를 미리 들어보고 결정하세요!</S.AnotherText>
          ) : (
            <></>
          )}
          {selectedType === '키워드 지정' ? (
            <S.AnotherText>키워드는 꼭 3개 정해주세요!</S.AnotherText>
          ) : (
            <></>
          )}
        </S.AnotherTextDiv>

        {selectedType === '소설화' ? (
          <>
            <S.AnotherMiddleDiv>
              <S.MiddleNovelization
                value={novelizationValue}
                onChange={(e) => {
                  handleNovelizationInput(e);
                }}
              />
            </S.AnotherMiddleDiv>
          </>
        ) : (
          <></>
        )}
        {selectedType === '짤 검색' ? (
          <>
            <S.AnotherMiddleDiv style={{ height: '633px', border: '0' }}>
              <S.JjalDiv>
                {JjalData.map((data, index) => (
                  <S.Jjal src={data.image} key={index} />
                ))}
              </S.JjalDiv>
            </S.AnotherMiddleDiv>
          </>
        ) : (
          <></>
        )}
        {selectedType === '음성 출력' ? (
          <>
            <S.VoiceTextDiv>
              <S.VoiceText
                placeholder='글 내용을 붙여넣어주세요'
                onChange={(e) => {
                  handleTtsInput(e);
                }}
              />
            </S.VoiceTextDiv>
            <SelectVoice
              ttsInput={ttsInput}
              selectedVoice={selectedVoice}
              handleVoiceClick={handleVoiceClick}
              speak={speak}
            />
          </>
        ) : (
          <></>
        )}

        {selectedType === '키워드 지정' ? (
          <>
            <S.KeywordTypeDiv>
              <SelectKeywordType
                selectedKeywordType={selectedKeywordType}
                handleKeywordType={handleKeywordType}
              />
            </S.KeywordTypeDiv>

            <S.KeywordMiddleDiv>
              {filteredKeywords?.map((keyword, index) => (
                <S.Keywords
                  key={index}
                  onClick={() => {
                    handleKeywordClick(keyword);
                  }}
                  style={{
                    backgroundColor: selectedKeywords.includes(keyword)
                      ? 'var(--Green3)'
                      : 'var(--Yellow)',
                    color: selectedKeywords.includes(keyword)
                      ? 'white'
                      : 'black',
                    border: selectedKeywords.includes(keyword)
                      ? '1px solid var(--EarlGrey)'
                      : '1px solid #DEC181',
                  }}>
                  {keyword}
                </S.Keywords>
              ))}
            </S.KeywordMiddleDiv>
            <S.SelecteKeywordDiv>
              <S.Text>지정 키워드</S.Text>
              {selectedKeywords.map((keyword) => (
                <S.selectedKeywords
                  key={keyword}
                  onClick={() => handleKeywordClick(keyword)}>
                  {keyword}
                </S.selectedKeywords>
              ))}
            </S.SelecteKeywordDiv>
          </>
        ) : (
          <></>
        )}

        <BottomBtn
          selectedType={selectedType}
          handleNovelizationRemove={handleNovelizationRemove}
          handleKeywordRemove={handleKeywordRemove}
          handleSubmitKeyword={handleSubmitKeyword}
        />
        {openKeywordModal ? (
          <KeywordModal setOpenModal={setOpenKeywordModal} />
        ) : (
          <></>
        )}
      </S.AnotherInputDiv>
    </>
  );
};

export default SelectAnother;
