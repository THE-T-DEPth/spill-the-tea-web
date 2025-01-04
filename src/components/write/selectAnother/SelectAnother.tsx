import { useState } from 'react';
import JjalData from '../../../assets/dummy/JJalDummy';
import Search from '../../../assets/images/Search.svg';
import Play from '../../../assets/images/Play.svg';
import keywordData from '../../../assets/dummy/KeywordDummy';
import * as S from '../../../styles/Write/SelectAnotherComponentStyle';

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
  const [selectedVoice, setSelectedVoice] =
    useState<string>('차분한 성인 남성');

  const handleNovelizationInput = (e: any) => {
    setNovelizationValue(e.target.value);
  };

  const handleNovelizationRemove = () => {
    setNovelizationValue('');
  };

  const handleTypeClick = (key: string) => {
    setSelectedType(key);
  };

  const handleKeywordType = (key: number) => {
    setSelectedKeywordType(key);
  };

  const handleVoiceClick = (key: string) => {
    setSelectedVoice(key);
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
      alert('키워드를 3개 선택해주셔야 합니다.');
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
          <S.AnotherBtn
            onClick={() => {
              handleTypeClick('소설화');
            }}
            style={{
              color: selectedType === '소설화' ? 'var(--Green3)' : 'var(--G4)',
            }}>
            소설화
          </S.AnotherBtn>
          <S.AnotherBtn
            onClick={() => {
              handleTypeClick('짤 검색');
            }}
            style={{
              color: selectedType === '짤 검색' ? 'var(--Green3)' : 'var(--G4)',
            }}>
            짤 검색
          </S.AnotherBtn>
          <S.AnotherBtn
            onClick={() => {
              handleTypeClick('음성 출력');
            }}
            style={{
              color:
                selectedType === '음성 출력' ? 'var(--Green3)' : 'var(--G4)',
            }}>
            음성 출력
          </S.AnotherBtn>
          <S.AnotherBtn
            onClick={() => {
              handleTypeClick('키워드 지정');
            }}
            style={{
              color:
                selectedType === '키워드 지정' ? 'var(--Green3)' : 'var(--G4)',
            }}>
            키워드 지정
          </S.AnotherBtn>
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
                  <S.Jjal src={data.image} />
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
            <S.VoiceSelectDiv
              onClick={() => {
                handleVoiceClick('차분한 성인 남성');
              }}
              style={{
                backgroundColor:
                  selectedVoice === '차분한 성인 남성'
                    ? 'var(--Green1)'
                    : 'white',
              }}>
              <p style={{ marginLeft: '20px' }}>차분한 성인 남성</p>
              <S.PlayImg
                src={Play}
                onClick={() => {
                  speechSynthesis.cancel();
                  speak(ttsInput, window.speechSynthesis);
                }}
              />
            </S.VoiceSelectDiv>
            <S.VoiceSelectDiv
              onClick={() => {
                handleVoiceClick('차분한 성인 여성');
              }}
              style={{
                backgroundColor:
                  selectedVoice === '차분한 성인 여성'
                    ? 'var(--Green1)'
                    : 'white',
              }}>
              <p style={{ marginLeft: '20px' }}>차분한 성인 여성</p>
              <S.PlayImg
                src={Play}
                onClick={() => {
                  speechSynthesis.cancel();
                  speak(ttsInput, window.speechSynthesis);
                }}
              />
            </S.VoiceSelectDiv>
            <S.VoiceSelectedDiv>
              <S.SelectedVoice>선택</S.SelectedVoice>
              <S.SelectedVoiceText>{selectedVoice}</S.SelectedVoiceText>
            </S.VoiceSelectedDiv>
          </>
        ) : (
          <></>
        )}

        {selectedType === '키워드 지정' ? (
          <>
            <S.KeywordTypeDiv>
              <S.KeywordType
                onClick={() => handleKeywordType(1)}
                style={{
                  backgroundColor:
                    selectedKeywordType === 1
                      ? 'var(--Green3)'
                      : 'var(--Yellow)',
                }}>
                감정/관계
              </S.KeywordType>
              <S.KeywordType
                onClick={() => handleKeywordType(2)}
                style={{
                  backgroundColor:
                    selectedKeywordType === 2
                      ? 'var(--Green3)'
                      : 'var(--Yellow)',
                }}>
                일상/삶
              </S.KeywordType>
              <S.KeywordType
                onClick={() => handleKeywordType(3)}
                style={{
                  backgroundColor:
                    selectedKeywordType === 3
                      ? 'var(--Green3)'
                      : 'var(--Yellow)',
                }}>
                취미/관심사
              </S.KeywordType>
              <S.KeywordType
                onClick={() => handleKeywordType(4)}
                style={{
                  backgroundColor:
                    selectedKeywordType === 4
                      ? 'var(--Green3)'
                      : 'var(--Yellow)',
                }}>
                상상/가상
              </S.KeywordType>
              <S.KeywordType
                onClick={() => handleKeywordType(5)}
                style={{
                  backgroundColor:
                    selectedKeywordType === 5
                      ? 'var(--Green3)'
                      : 'var(--Yellow)',
                  border: 'none',
                }}>
                고민/조언
              </S.KeywordType>
            </S.KeywordTypeDiv>

            <S.KeywordMiddleDiv>
              {filteredKeywords?.map((keyword, index) => (
                <S.Keywords
                  key={keyword}
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

        {selectedType === '소설화' ? (
          <>
            <S.AnotherBottomDiv>
              <S.AnotherCancelBtn onClick={handleNovelizationRemove}>
                취소
              </S.AnotherCancelBtn>
              <S.AnotherSaveBtn>글에 적용</S.AnotherSaveBtn>
            </S.AnotherBottomDiv>
          </>
        ) : (
          <></>
        )}
        {selectedType === '음성 출력' ? (
          <>
            <S.AnotherBottomDiv>
              <S.AnotherCancelBtn>작성 취소</S.AnotherCancelBtn>
              <S.AnotherSaveBtn>저장</S.AnotherSaveBtn>
            </S.AnotherBottomDiv>
          </>
        ) : (
          <></>
        )}
        {selectedType === '키워드 지정' ? (
          <>
            <S.AnotherBottomDiv>
              <S.AnotherCancelBtn onClick={handleKeywordRemove}>
                작성 취소
              </S.AnotherCancelBtn>
              <S.AnotherSaveBtn onClick={handleSubmitKeyword}>
                저장
              </S.AnotherSaveBtn>
            </S.AnotherBottomDiv>
          </>
        ) : (
          <></>
        )}
      </S.AnotherInputDiv>
    </>
  );
};

export default SelectAnother;
