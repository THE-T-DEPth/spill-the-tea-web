import * as S from '../styles/Write/WritePageComponentStyle';
import DownArrow from '../assets/images/DownArrow.svg';
import UpArrow from '../assets/images/UpArrow.svg';
import ReactQuill, { Quill } from 'react-quill';
import { useState } from 'react';
import SelectAnother from '../components/write/selectAnother/SelectAnother';
import CommunityGuide from '../components/write/selectAnother/CommunityGuide';
import PostModal from '../components/write/modal/PostModal';
import Bold from '../assets/images/Bold.svg';
import Italic from '../assets/images/Italic.svg';
import Underline from '../assets/images/Underline.svg';
import Centerline from '../assets/images/CenterLine.svg';
import Color from '../assets/images/Color.svg';

const WritePage = () => {
  const [openGuide, setOpenGuide] = useState<boolean>(false);
  const [titleInput, setTitleInput] = useState<string | null>('');
  const [selectedThreeKeywords, setSelectedThreeKeywords] = useState<string[]>(
    []
  );
  const [openPostModal, setOpenPostModal] = useState<boolean>(false);
  const [textInput, setInput] = useState<any>(); //content input이 있나 없나
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); //라디오 버튼 관리
  const [isImage, setIsImage] = useState<boolean>(false);

  const handleInput = (
    content: string,
    delta: any,
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

  const Quill = ReactQuill.Quill;

  const size = Quill.import('attributors/style/size');
  size.whitelist = ['15px', '28px', '38px']; // 크기를 각각의 문자열로 지정
  Quill.register(size, true);

  const font = Quill.import('attributors/class/font');
  font.whitelist = [
    'nanumgothic',
    'nanummyeongjo',
    'dohyeon',
    'nanumpenscript',
  ];
  Quill.register(font, true);

  const icons = Quill.import('ui/icons');
  icons['bold'] = <span>{Bold}</span>;
  icons['italic'] = <span>{Italic}</span>;
  icons['underline'] = <span>{Underline}</span>;
  icons['strike'] = <span>{Centerline}</span>;
  // icons['color'] = <span>{Color}</span>;

  const modules = {
    toolbar: {
      container: [
        [{ font: font.whitelist }], // 서체
        [{ size: size.whitelist }], // 크기
        [
          'bold',
          'italic',
          'underline',
          'strike',
          {
            color: [
              '#000000',
              '#414141',
              '#717171',
              '#959595',
              '#BFBFBF',
              '#FFFFFF',
              '#FF0010',
              '#FF9300',
              '#FFD300',
              '#00A84B',
              '#0078CB',
              '#AA1F91',
            ],
          },
        ], // 텍스트 스타일
      ],
    },
  };

  const handleRadioChange = (event: any) => {
    setSelectedIndex(event.target.value); // 선택된 radio button의 index를 상태에 저장
  };

  //이미지만 파싱
  function extractImagesFromHTML(htmlString: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const images = doc.querySelectorAll('img');
    return (
      <>
        {Array.from(images).map((img, index) => (
          <div key={index}>
            <input
              type='radio'
              name='imageSelection'
              id={`radio-${index}`}
              value={index}
              checked={selectedIndex == index} // 현재 선택된 radio button을 반영
              onChange={handleRadioChange}
            />
            <label htmlFor={`radio-${index}`}>
              <img
                src={img.src}
                alt={img.alt || 'Image'}
                style={{ width: '100px', height: '100px' }}
              />
            </label>
          </div>
        ))}
        <div>
          <p>선택된 이미지 인덱스: {selectedIndex}</p>
        </div>
      </>
    );
  }

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
                    <>
                      <S.selectedKeywords key={index}>
                        {keyword}
                      </S.selectedKeywords>
                    </>
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
              <S.StyledQuill
                style={{ width: '100%', height: '100%' }}
                modules={modules}
                placeholder='내용을 입력해주세요'
                onChange={(content, delta, source, editor) =>
                  handleInput(content, delta, source, editor)
                }
                $contents={textInput}
              />
            </S.InputStyleDiv>
            {/* 
            <S.InputContentDiv>
              <S.InputContent placeholder='내용을 입력해주세요' />
            </S.InputContentDiv> */}
          </S.ContentInputDiv>
          <SelectAnother
            selectedThreeKeywords={selectedThreeKeywords}
            setSelectedThreeKeywords={setSelectedThreeKeywords}
          />
        </S.BottomDiv>
        {/* <S.Div>
          <h3>HTML Output:</h3>
          <div dangerouslySetInnerHTML={{ __html: textInput?.html }} />
          <div>{JSON.stringify(textInput)}</div>
          {textInput?.html
            ? extractImagesFromHTML(textInput.html)
            : 'No images found'}
        </S.Div> */}
        {openPostModal ? (
          <PostModal setOpenPostModal={setOpenPostModal} />
        ) : (
          <></>
        )}
      </S.WriteDiv>
    </>
  );
};

export default WritePage;
