import * as S from '../styles/Write/WritePageComponentStyle';
import DownArrow from '../assets/images/DownArrow.svg';
import UpArrow from '../assets/images/UpArrow.svg';
import { DeltaStatic } from 'quill';
import { useEffect, useRef, useState } from 'react';
import SelectAnother from '../components/write/selectAnother/SelectAnother';
import CommunityGuide from '../components/write/selectAnother/CommunityGuide';
import PostModal from '../components/write/modal/PostModal';
import QuillInput from '../components/write/textWrite/QuillInput';

const WritePage = () => {
  const [openGuide, setOpenGuide] = useState<boolean>(false);
  const [titleInput, setTitleInput] = useState<string | null>('');
  const [selectedThreeKeywords, setSelectedThreeKeywords] = useState<string[]>(
    []
  );
  const [openPostModal, setOpenPostModal] = useState<boolean>(false);
  const [textInput, setInput] = useState<any>(); //content input이 있나 없나
  const [imageCount, setImageCount] = useState<number>(0);

  const handleInput = (
    content: string,
    delta: DeltaStatic,
    source: string,
    editor: any
  ) => {
    setInput({
      html: content, // HTML 문자열
      delta: editor.getContents(), // Delta 객체 (글꼴, 스타일 포함)
    });
  };

  const handleGuideClick = () => {
    setOpenGuide(!openGuide);
  };

  const handleTitle = (e: any) => {
    setTitleInput(e.target.value);
  };

  const handlePostClick = () => {
    setOpenPostModal(true);
  };

  const extractImagesFromHTML = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const images = doc.querySelectorAll('img'); // HTML 내의 모든 이미지 요소를 찾음
    setImageCount(images.length); // 이미지 개수 상태 업데이트
  };

  // useEffect로 textInput이 변경될 때마다 이미지 개수를 업데이트
  useEffect(() => {
    if (textInput?.html) {
      extractImagesFromHTML(textInput.html); // HTML에서 이미지를 추출하여 개수 업데이트
    }
  }, [textInput]);

  return (
    <>
      <S.WriteDiv $openpostmodal={openPostModal ? 'true' : 'false'}>
        <S.TopDiv>
          <S.CommunityGuideDiv>
            커뮤니티 가이드
            <S.CommunityArrowImg
              src={openGuide ? UpArrow : DownArrow}
              onClick={handleGuideClick}
            />
          </S.CommunityGuideDiv>
          <S.KeywordDiv>
            <S.KeyWordInputDiv>
              {selectedThreeKeywords.length == 0
                ? `# 키워드 3개를 지정해주세요`
                : selectedThreeKeywords.map((keyword, index) => (
                    <S.selectedKeywords key={index}>
                      {keyword}
                    </S.selectedKeywords>
                  ))}
            </S.KeyWordInputDiv>
            <S.TopBtnDiv>
              <S.RemoveBtn>작성 취소</S.RemoveBtn>
              <S.PostBtn onClick={handlePostClick}>게시하기</S.PostBtn>
            </S.TopBtnDiv>
          </S.KeywordDiv>
        </S.TopDiv>
        {openGuide ? <CommunityGuide /> : <></>}
        <S.BottomDiv>
          <S.ContentInputDiv>
            <S.InputTitleDiv>
              <S.InputTitle
                placeholder='썰 제목을 입력해주세요'
                onChange={(e) => {
                  handleTitle(e);
                }}
              />
            </S.InputTitleDiv>
            <S.InputStyleDiv>
              <QuillInput handleInput={handleInput} textInput={textInput} />
            </S.InputStyleDiv>
          </S.ContentInputDiv>
          <SelectAnother
            selectedThreeKeywords={selectedThreeKeywords}
            setSelectedThreeKeywords={setSelectedThreeKeywords}
          />
        </S.BottomDiv>
        {openPostModal ? (
          <PostModal
            setOpenPostModal={setOpenPostModal}
            titleInput={titleInput}
            textInput={textInput}
            selectedThreeKeywords={selectedThreeKeywords}
            imageCount={imageCount}
          />
        ) : (
          <></>
        )}
      </S.WriteDiv>
    </>
  );
};

export default WritePage;
