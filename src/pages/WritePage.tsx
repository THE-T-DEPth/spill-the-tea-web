import * as S from '../styles/Write/WritePageComponentStyle';
import DownArrow from '../assets/images/DownArrow.svg';
import UpArrow from '../assets/images/UpArrow.svg';
import { useEffect, useState } from 'react';
import SelectAnother from '../components/write/selectAnother/SelectAnother';
import CommunityGuide from '../components/write/selectAnother/CommunityGuide';
import PostModal from '../components/write/modal/PostModal';
import QuillInput from '../components/write/textWrite/QuillInput';
import { useParams } from 'react-router-dom';
import { getPostDetail } from '../api/viewDetailSsul/viewDetailContent';

const WritePage: React.FC<{ mode: string }> = ({ mode }) => {
  const [openGuide, setOpenGuide] = useState<boolean>(false);
  const [titleInput, setTitleInput] = useState<string | null>('');
  const [selectedThreeKeywords, setSelectedThreeKeywords] = useState<string[]>(
    []
  );
  const [openPostModal, setOpenPostModal] = useState<boolean>(false);
  const [textInput, setInput] = useState<string | null>(null); //content input이 있나 없나
  const [imageCount, setImageCount] = useState<number>(0);
  const [confirmVoice, setConfirmVoice] = useState<string>('none');
  const [firstImg, setFirstImg] = useState<string>();
  const { postId } = useParams();

  //edit일 때 초기 값 세팅
  useEffect(() => {
    if (mode === 'edit' && postId) {
      const fetchPostInfo = async () => {
        try {
          const response = await getPostDetail(Number(postId));
          setInput(response.data.content);
          setTitleInput(response.data.title);
          setConfirmVoice(response.data.voiceType);
          const rawKeywordList = response.data.keywordList;
          const parsedKeywordList = rawKeywordList
            .replace(/\[|\]/g, '') // 대괄호 제거
            .split(',') // 쉼표로 분리
            .map((keyword: string) => keyword.trim()); // 각 키워드의 공백 제거

          setSelectedThreeKeywords(parsedKeywordList);
          setFirstImg(response.data.thumb);
        } catch (error) {
          throw error;
        }
      };
      fetchPostInfo();
    }
  }, [mode, postId]);

  const handleInput = (content: string) => {
    setInput(content);
  };

  const urlToFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split('.').pop();
    const filename = url.split('/').pop();
    const metadata = { type: `image/${ext === 'svg' ? 'svg+xml' : ext}` };
    return new File([data], filename!, metadata);
  };

  // function b64toBlob(b64Data: string, contentType = 'image/png') {
  //   const image_data = atob(b64Data.split(',')[1]);

  //   const arraybuffer = new ArrayBuffer(image_data.length);
  //   const view = new Uint8Array(arraybuffer);

  //   for (let i = 0; i < image_data.length; i++) {
  //     view[i] = image_data.charCodeAt(i) & 0xff;
  //   }

  //   return new Blob([arraybuffer], { type: contentType });
  // }

  const handleGuideClick = () => {
    setOpenGuide(!openGuide);
  };

  const handleTitle = (e: any) => {
    setTitleInput(e.target.value);
  };

  const handlePostClick = async () => {
    setOpenPostModal(true);
    // window.location.href = '/';
  };

  const extractImagesFromHTML = async (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const images = doc.querySelectorAll('img'); // HTML 내의 모든 이미지 요소를 찾음

    setImageCount(images.length); // 이미지 개수 상태 업데이트

    let hasRemoved = false; // 이미지를 삭제했는지 추적
    let firstValidImageProcessed = false;

    for (const img of images) {
      const imgSrc = img.src;

      // 이미지의 src가 조건에 맞지 않으면 삭제
      if (
        !(
          imgSrc.startsWith('https://media0.giphy.com/') ||
          imgSrc.startsWith('https://media1.giphy.com/') ||
          imgSrc.startsWith('https://media2.giphy.com/') ||
          imgSrc.startsWith('https://media3.giphy.com/') ||
          imgSrc.startsWith('https://media4.giphy.com/') ||
          imgSrc.startsWith('https://spill-the-tea-bucket.s3')
        )
      ) {
        img.remove(); // 해당 이미지를 DOM에서 제거
        hasRemoved = true; // 삭제된 이미지가 있음을 표시
        alert('허용되지 않는 이미지가 포함되어 있습니다.');
      } else if (!firstValidImageProcessed) {
        // const firstImgFile = await urlToFile(imgSrc);
        // setFirstImg(firstImgFile);
        setFirstImg(img.src);
        firstValidImageProcessed = true;
      }
    }

    // 조건에 맞지 않은 이미지를 삭제한 경우 수정된 HTML로 업데이트
    if (hasRemoved) {
      const updatedHTML = doc.body.innerHTML; // 수정된 HTML 가져오기
      setInput(updatedHTML); // Quill 입력 값 업데이트
    }
  };

  //서버에서 처리해야할 것, url 부분에 파일을 보내고 넘겨받은 url 삽입해주기
  // const replaceBase64WithBlobUrls = async (html: string) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, 'text/html');
  //   const images = doc.querySelectorAll('img');

  //   for (const img of images) {
  //     const src = img.getAttribute('src');
  //     if (src && src.startsWith('data:')) {
  //       try {
  //         // Base64 -> Blob 변환
  //         const blob = b64toBlob(src);
  //         // Blob -> URL 변환
  //         const url = URL.createObjectURL(blob);
  //         // 이미지 태그 src 속성 업데이트
  //         img.setAttribute('src', url);
  //         // console.log(url);
  //       } catch (error) {
  //         console.error('Failed to process image:', error);
  //       }
  //     }
  //   }

  //   // 수정된 HTML 반환
  //   return doc.body.innerHTML;
  // };

  // useEffect로 textInput이 변경될 때마다 이미지 정보를 출력
  useEffect(() => {
    if (textInput) {
      extractImagesFromHTML(textInput); // HTML에서 이미지를 추출하여 정보 출력
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
                value={titleInput ? titleInput : ''}
              />
            </S.InputTitleDiv>
            <S.InputStyleDiv>
              <QuillInput handleInput={handleInput} textInput={textInput} />
            </S.InputStyleDiv>
          </S.ContentInputDiv>
          <SelectAnother
            setSelectedThreeKeywords={setSelectedThreeKeywords}
            setConfirmVoice={setConfirmVoice}
            confirmVoice={confirmVoice}
          />
        </S.BottomDiv>
        {openPostModal ? (
          <PostModal
            setOpenPostModal={setOpenPostModal}
            titleInput={titleInput}
            textInput={textInput}
            selectedThreeKeywords={selectedThreeKeywords}
            imageCount={imageCount}
            confirmVoice={confirmVoice}
            firstImg={firstImg ? firstImg : null}
            mode={mode}
            postId={Number(postId)}
          />
        ) : (
          <></>
        )}
      </S.WriteDiv>
    </>
  );
};

export default WritePage;
