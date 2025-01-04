import ReactQuill, { Quill } from 'react-quill';
import styled from 'styled-components';

export const WriteDiv = styled.div<{ $openpostmodal: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh
  height: ${({ $openpostmodal }) =>
    $openpostmodal == 'true' ? '100vh' : '100%'};
  min-width: 1400px;
  touch-action: ${({ $openpostmodal }) =>
    $openpostmodal == 'true' ? 'none' : 'active'};
  overflow: ${({ $openpostmodal }) =>
    $openpostmodal == 'true' ? 'hidden' : ''};
`;

export const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border-top: 1px solid var(--G4);
  border-bottom: 1px solid var(--G4);
  position: relative; /* CommunityGuide가 TopDiv 기준으로 위치 */
`;

export const CommunityGuideDiv = styled.div`
  display: flex;
  font: var(--labelLarge);
  color: black;
  align-items: center;
  justify-content: center;
  width: 20%;
  border-right: 1px solid var(--G4);
`;

export const CommunityArrowImg = styled.img`
  display: flex;
  width: 24px;
  margin-left: 20px;
  cursor: pointer;
`;

export const KeywordDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const KeyWordInputDiv = styled.div`
  display: flex;
  width: 100%;
  font: var(--labelLarge);
  color: black;
  align-items: center;
  margin: auto auto auto 30px;
`;

export const selectedKeywords = styled.button`
  display: flex;
  width: 10%;
  height: 35px;
  flex-wrap: wrap;
  background-color: var(--Green3);
  border: 1px solid var(--EarlGrey);
  border-radius: 4px;
  color: white;
  font: var(--labelMedium);
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

export const TopBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
`;

export const RemoveBtn = styled.button`
  display: flex;
  width: 171px;
  height: 50px;
  font: var(--labelLarge);
  color: var(--G5);
  border-radius: 4px;
  border: 1px solid var(--G4);
  background-color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PostBtn = styled.button`
  display: flex;
  width: 171px;
  height: 50px;
  font: var(--headingLarge);
  color: white;
  border-radius: 4px;
  border: none;
  background-color: var(--Green3);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 30px;
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border-right: 1px solid var(--G4);
`;

export const InputTitleDiv = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--G4);

  ::placeholder {
    color: var(--G3);
    font: var(--headingXL);
  }
`;

export const InputTitle = styled.input`
  display: flex;
  width: 100%;
  height: 100px;
  border: none;
  color: black;
  font: var(--headingXL);
  padding-left: 30px;
  outline: none;
  line-height: 100px; /* 입력 필드의 높이와 동일하게 설정 */
  vertical-align: middle; /* 텍스트를 수직으로 정렬 */
`;

export const InputStyleDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 633px;
  border-bottom: 1px solid var(--G4);
`;

export const InputContentDiv = styled.div`
  display: flex;
  width: 100%;

  ::placeholder {
    color: var(--G3);
    font: var(--labelXL);
  }
`;

export const InputContent = styled.textarea`
  display: flex;
  width: 100%;
  height: 600px;
  border: none;
  font: var(--labelXL);
  outline: none;
  vertical-align: middle; /* 텍스트를 수직으로 정렬 */
  padding: 30px 30px 0 30px;
`;

import Bold from '../../assets/images/Bold.svg';
import Italic from '../../assets/images/Italic.svg';
import Underline from '../../assets/images/Underline.svg';
import Centerline from '../../assets/images/CenterLine.svg';
import Color from '../../assets/images/Color.svg';
import DropDown from '../../assets/images/dropdown.svg';
import UpArrow from '../../assets/images/UpArrow.svg';

export const StyledQuill = styled(ReactQuill)<{ $contents: any }>`
  .ql-editor img {
    display: block;
    margin: 0;
    text-align: left;
    height: 300px;
    width: auto;
  }

  //placeholder
  .ql-container .ql-editor.ql-blank::before {
    color: var(--G3);
    font: var(--labelXL);
  }

  .ql-editor {
    padding: 18px 15px 0 15px;
  }

  /////////////////////////////입력 컨테이너 border padding////////////////////////////////////

  .ql-container {
    border: none !important;
    color: #000000;
    padding: 0 !important;
  }

  ///////////////////////////////toolbar 전체 custom///////////////////////////////////////

  .ql-toolbar {
    display: flex;
    align-items: center;
    background-color: white; // 툴바 배경
    height: 61px;
    padding: 0 !important;
    border: none !important;
    color: #000000;
    border-bottom: 1px solid var(--G4) !important;
  }

  /////////////////////////////////////////////dropdown box////////////////////////////////////

  .ql-toolbar .ql-picker-options {
    background-color: white;
    color: black;
    padding: 0;
    width: 220px;
    border: none !important;
    border-radius: 4px !important;
    left: 0 !important;
    margin-top: 10px !important;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.14) !important;
    padding: 0 !important;
  }

  //각각의 dropdown item
  .ql-toolbar .ql-picker-item {
    background-color: white;
    padding: 15px !important;
    border-radius: 4px !important;
    font-size: 19px !important;
  }
  .ql-toolbar .ql-picker-item:hover {
    background-color: #edffed; // 호버 스타일
    color: black !important;
  }

  //기본 폰트와 크기
  .ql-container {
    font-family: 'Nanum Gothic';
    font-size: 15px;
    line-height: 1.5; // 줄 간격
    background-color: white; // 배경색
  }

  ///////////////////////font나 size가 선택되었을 때 글자색이나 등등 (font와 size에 적용)///////////////////////////

  .ql-snow.ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: black !important;
    border: none !important;
    margin: 0 !important;
  }

  ////////////////////////////////////////toolbar의 hover와 focus 조정///////////////////////

  .ql-snow.ql-toolbar button:hover,
  .ql-snow .ql-toolbar button:hover,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button.ql-active {
    margin: auto 20px !important;
  }

  //picker 할 수 있는 요소들 조정(font, size, color)
  .ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding: 0 !important;
    position: relative;
    width: 100%;
    // background-color: pink;
    color: black;
    border: none !important;
  }

  //font 설정 div
  .ql-snow .ql-formats .ql-font {
    display: inline-block;
    vertical-align: middle;
    width: 147px;
    height: 62px;
    border-right: 1px solid var(--G4) !important;
  }

  //size 설정 div
  .ql-snow .ql-formats .ql-size {
    display: inline-block;
    vertical-align: middle;
    width: 147px;
    height: 62px;
    border-right: 1px solid var(--G4) !important;
    margin-left: -20px !important;
  }

  //font나 size가 클릭됐을 때 검정색 유지되게 해주는 것
  .ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: black;
    z-index: 2;
  }

  /////////////////////////////////////////////font와 size의 dropdown 이미지 관리//////////////////////////////////////

  //dropdown이 선택되었을 때
  .ql-snow .ql-picker:not(.ql-color-picker).ql-expanded .ql-picker-label {
    background: url(${UpArrow}) no-repeat 75px center;
  }

  //dropdown이 선택되어있지 않은 상태일 때
  .ql-snow .ql-picker:not(.ql-color-picker) .ql-picker-label {
    stroke: black;
    background: url(${DropDown}) no-repeat 80px center;
  }

  ////////////////////////////////////////기존 stroke 관리//////////////////////////////

  // //dropdown이 선택되었을 때
  // .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  //   stroke: none !important;
  // }

  svg .ql-stroke:not(.ql-color-label) {
    display: none;
  }
  .ql-snow .ql-stroke {
    fill: none;
    stroke: currentColor;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-width: 2;
  }

  .ql-snow .ql-picker.ql-active .ql-stroke,
  .ql-snow .ql-picker.ql-selected .ql-stroke {
    stroke: currentColor !important; /* 선택 상태에서 stroke 유지 */
  }

  .ql-snow .ql-picker:hover .ql-stroke {
    stroke: currentColor !important; /* 선택 상태에서 stroke 유지 */
  }

  /////////////////////////////////////////color picker options(컬러 12개 표시)//////////////////////////////////////

  .ql-snow .ql-color-picker.ql-expanded .ql-picker-options {
    display: grid; /* Grid 레이아웃 사용 */
    grid-template-columns: repeat(6, 1fr); /* 한 행에 6개 */
    // gap: 0.5px; /* 색상 박스 간격 */
    background-color: black;
    border: 0.5px solid black !important; /* 옵션 창 테두리 */
    padding: none !important; /* 내부 여백 */
    border-radius: 0 !important; /* 둥근 모서리 */
    width: fit-content; /* 내용물에 따라 크기 조정 */
    height: auto; /* 높이는 Grid에 따라 자동 조정 */
  }

  /* Color Picker 아이템 기본 상태 */
  .ql-toolbar .ql-color-picker .ql-picker-item {
    margin: 0.5px !important;
    border-radius: 0 !important; /* 색상 박스 모서리 둥글게 */
    border: none !important; /* 기본 테두리 색상 */
    padding: 15px !important;
  }

  /* Color Picker 호버 상태 */
  .ql-toolbar .ql-color-picker .ql-picker-item:hover {
    border: 1px solid #000; /* 호버 시 테두리 강조 */
    background-color: #f0f0f0; /* 호버 시 배경 색상 변경 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
    border-radius: 0 !important;
    border: none !important; /* 기본 테두리 색상 */
    margin: 0.5px !important;
    padding: 15px !important;
  }

  .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    border: none !important; /* 기본 테두리 색상 */
    margin: 0.5px !important;
    padding: 15px !important;
  }

  /////////////////////////////////bold~colorpicker margin과 icon 설정/////////////////////////////////

  .ql-toolbar .ql-bold {
    background: url(${Bold}) no-repeat center center;
    width: 24px;
    height: 24px;
    margin: auto 20px;
  }

  .ql-toolbar .ql-italic {
    background: url(${Italic}) no-repeat center center;
    width: 24px;
    height: 24px;
    margin: auto 20px;
  }

  .ql-toolbar .ql-underline {
    background: url(${Underline}) no-repeat center center;
    width: 24px;
    height: 24px;
    margin: auto 20px;
  }

  .ql-toolbar .ql-strike {
    background: url(${Centerline}) no-repeat center center;
    width: 24px;
    height: 24px;
    margin: auto 20px;
  }

  .ql-snow .ql-color-picker {
    margin: auto 20px;
    background: url(${Color}) no-repeat center center;
  }

  ////////////////////////////////////////////////////font import////////////////////////////////

  //font import
  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: normal;
    src:
      url('https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.woff')
        format('woff');
  }
  @font-face {
    font-family: 'NanumMyeongjo';
    src: url('https://cdn.jsdelivr.net/gh/wizfile/font/NanumMyeongjo.eot');
    src: url('https://cdn.jsdelivr.net/gh/wizfile/font/NanumMyeongjo.woff')
      format('woff');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nanum Pen Script';
    font-style: normal;
    font-weight: 400;
    src:
      url('https://fonts.gstatic.com/ea/nanumpenscript/v2/NanumPenScript-Regular.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/ea/nanumpenscript/v2/NanumPenScript-Regular.woff')
        format('woff');
  }

  ////////////////////////////////////////////// 폰트 설정 ///////////////////////////

  .ql-snow .ql-picker.ql-font {
    padding: 20px;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-label[data-value='nanumgothic']::before {
    font-family: Nanum Gothic;
    content: '나눔고딕';
  }
  /* Set effect font-families */
  .ql-font-nanumgothic {
    font-family: Nanum Gothic;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-item[data-value='nanumgothic']::before {
    font-family: Nanum Gothic;
    content: '나눔고딕';
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-label[data-value='nanummyeongjo']::before {
    font-family: NanumMyeongjo;
    content: '나눔 명조';
  }
  /* Set effect font-families */
  .ql-font-nanummyeongjo {
    font-family: NanumMyeongjo;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-item[data-value='nanummyeongjo']::before {
    font-family: NanumMyeongjo;
    content: '나눔 명조';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='dohyeon']::before {
    font-family: BMDOHYEON;
    content: '도 혜온';
  }
  /* Set effect font-families */
  .ql-font-dohyeon {
    font-family: BMDOHYEON;
  }

  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='dohyeon']::before {
    font-family: BMDOHYEON;
    content: '도 혜온';
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-label[data-value='nanumpenscript']::before {
    font-family: Nanum Pen Script;
    content: '나눔 펜 스크립트';
  }
  /* Set effect font-families */
  .ql-font-nanumpenscript {
    font-family: Nanum Pen Script;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-item[data-value='nanumpenscript']::before {
    font-family: Nanum Pen Script;
    content: '나눔 펜 스크립트';
  }

  ///////////////////////////////////////////폰트 크기 설정////////////////////////////////////

  .ql-snow .ql-picker.ql-size {
    padding: 20px;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='15px']::before {
    content: '15';
    font-size: 15px !important;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='15px']::before {
    content: '15';
    font-size: 15px !important;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='28px']::before {
    content: '28';
    font-size: 15px !important;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='28px']::before {
    content: '28';
    font-size: 28px !important;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='38px']::before {
    content: '38';
    font-size: 15px !important;
  }

  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='38px']::before {
    content: '38';
    font-size: 38px !important;
  }
`;

export const Div = styled.div`
  //font import
  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: normal;
    src:
      url('https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.woff')
        format('woff');
  }
  @font-face {
    font-family: 'NanumMyeongjo';
    src: url('https://cdn.jsdelivr.net/gh/wizfile/font/NanumMyeongjo.eot');
    src: url('https://cdn.jsdelivr.net/gh/wizfile/font/NanumMyeongjo.woff')
      format('woff');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nanum Pen Script';
    font-style: normal;
    font-weight: 400;
    src:
      url('https://fonts.gstatic.com/ea/nanumpenscript/v2/NanumPenScript-Regular.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/ea/nanumpenscript/v2/NanumPenScript-Regular.woff')
        format('woff');
  }
  .ql-snow
    .ql-picker.ql-font
    .ql-picker-label[data-value='nanumgothic']::before {
    font-family: Nanum Gothic;
    content: '나눔고딕';
  }
  /* Set effect font-families */
  .ql-font-nanumgothic {
    font-family: Nanum Gothic;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-item[data-value='nanumgothic']::before {
    font-family: Nanum Gothic;
    content: '나눔고딕';
  }
  /* Set effect font-families */
  .ql-font-nanumgothic {
    font-family: Nanum Gothic;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-label[data-value='nanummyeongjo']::before {
    font-family: NanumMyeongjo;
    content: '나눔 명조';
  }
  /* Set effect font-families */
  .ql-font-nanummyeongjo {
    font-family: NanumMyeongjo;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-item[data-value='nanummyeongjo']::before {
    font-family: NanumMyeongjo;
    content: '나눔 명조';
  }
  /* Set effect font-families */
  .ql-font-nanummyeongjo {
    font-family: NanumMyeongjo;
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='dohyeon']::before {
    font-family: BMDOHYEON;
    content: '도 혜온';
  }
  /* Set effect font-families */
  .ql-font-dohyeon {
    font-family: BMDOHYEON;
  }

  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='dohyeon']::before {
    font-family: BMDOHYEON;
    content: '도 혜온';
  }
  /* Set effect font-families */
  .ql-font-dohyeon {
    font-family: BMDOHYEON;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-label[data-value='nanumpenscript']::before {
    font-family: Nanum Pen Script;
    content: '나눔 펜 스크립트';
  }
  /* Set effect font-families */
  .ql-font-nanumpenscript {
    font-family: Nanum Pen Script;
  }

  .ql-snow
    .ql-picker.ql-font
    .ql-picker-item[data-value='nanumpenscript']::before {
    font-family: Nanum Pen Script;
    content: '나눔 펜 스크립트';
  }
  /* Set effect font-families */
  .ql-font-nanumpenscript {
    font-family: Nanum Pen Script;
  }
`;
