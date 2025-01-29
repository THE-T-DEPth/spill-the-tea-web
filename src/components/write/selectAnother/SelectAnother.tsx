import { useEffect, useState } from 'react';
import Search from '../../../assets/Images/Search.svg';
import keywordData from '../../../assets/dummy/KeywordDummy';
import * as S from '../../../styles/Write/SelectAnotherComponentStyle';
import KeywordModal from '../modal/KeywordModal';
import AnotherBtn from './AnotherBtn';
import SelectVoice from './SelectVoice';
import BottomBtn from './BottomBtn';
import SelectKeywordType from './SelecteKeywordType';
import { getGIFs } from '../../../api/write/search';
import { postNovelization } from '../../../api/write/novelization';

interface KeywordProp {
  setSelectedThreeKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  setConfirmVoice: (value: string) => void;
  confirmVoice: string;
}

interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const SelectAnother: React.FC<KeywordProp> = ({
  setSelectedThreeKeywords,
  setConfirmVoice,
  confirmVoice,
}) => {
  const [novelizationInputValue, setNovelizationInputValue] =
    useState<string>('');
  const [novelizationValue, setNovelizationValue] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('소설화');
  const [selectedKeywordType, setSelectedKeywordType] = useState<number>(1);
  const [ttsInput, setTtsInput] = useState<any>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchImg, setSearchImg] = useState<Gif[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [openKeywordModal, setOpenKeywordModal] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] =
    useState<string>('차분한 성인 남성');

  const handleNovelizationInInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNovelizationInputValue(e.target.value);
  };

  const handleNovelizationInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNovelizationValue(e.target.value);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleNovelizationPost = () => {
    if (novelizationInputValue.trim() == '') {
      alert('값을 입력해주세요.');
      return;
    }

    const fetchNovelization = async () => {
      try {
        const data = await postNovelization(novelizationInputValue);
        setNovelizationValue(data.data.novel);
      } catch (error) {
        throw error;
      }
    };
    fetchNovelization();
  };

  const onSubmitSearch = (e: any) => {
    if (e.key === 'Enter') {
      const fetchSearch = async () => {
        try {
          const data = await getGIFs(searchInput);
          setSearchImg(data);
        } catch (error) {
          console.log('fetchSearch 중 에러 발생', error);
          throw error;
        }
      };
      fetchSearch();
    }
  };

  const handleSearchClick = () => {
    const fetchSearch = async () => {
      try {
        const data = await getGIFs(searchInput);
        setSearchImg(data);
      } catch (error) {
        console.log('fetchSearch 중 에러 발생', error);
        throw error;
      }
    };
    fetchSearch();
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
      setSelectedThreeKeywords(selectedKeywords);
    } else {
      setOpenKeywordModal(true);
    }
  };

  //edit일 때 초기 voice 세팅
  useEffect(() => {
    if (confirmVoice == 'none' || confirmVoice == 'ko_KR_Standard_C') {
      setSelectedVoice('차분한 성인 남성');
    } else {
      setSelectedVoice('차분한 성인 여성');
    }
  }, [confirmVoice]);

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
            <S.NovelizationBtn onClick={handleNovelizationPost}>
              소설화 실행
            </S.NovelizationBtn>
          ) : (
            <></>
          )}
          {selectedType === '짤 검색' ? (
            <S.SearchContainer>
              <S.AnotherSearch
                placeholder='키워드를 통해 짤 검색이 가능합니다.'
                onChange={handleSearchInput}
                onKeyUp={onSubmitSearch}
              />
              <S.AnotherSearchImg src={Search} onClick={handleSearchClick} />
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
                placeholder='소설화 하고 싶은 글을 붙여넣어보세요.'
                style={{ borderBottom: '1px solid var(--G4)' }}
                value={novelizationInputValue}
                onChange={handleNovelizationInInput}
              />
              <S.MiddleNovelization
                placeholder='하단의 버튼을 통해 소설화 된 글을 복사 해보세요.'
                value={novelizationValue}
                onChange={handleNovelizationInput}
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
                {/* {searchImg.map((data, index) => (
                  <S.Jjal src={data} key={index} />
                ))} */}
                {searchImg.map((gif) => (
                  <S.Jjal key={gif.id} src={gif.images.fixed_height.url} />
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
          setConfirmVoice={setConfirmVoice}
          selectedVoice={selectedVoice}
          novelizationValue={novelizationValue}
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
