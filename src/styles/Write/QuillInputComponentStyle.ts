import Bold from '../../assets/Images/Bold.png';
import Italic from '../../assets/Images/Italic.png';
import Underline from '../../assets/Images/UnderLine.png';
import Centerline from '../../assets/Images/Strike.png';
import Color from '../../assets/Images/Color.png';
import DropDown from '../../assets/Images/ArrowDown.png';
import UpArrow from '../../assets/Images/ArrowUp.png';
import styled from 'styled-components';
import ReactQuill from 'react-quill';

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

  .ql-toolbar .ql-color .ql-picker-options {
    background-color: white;
    color: black;
    padding: 0;
    width: 220px;
    border: none !important;
    border-radius: 4px !important;
    left: -80px !important;
    margin-top: 30px !important;
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

  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: black !important;
    border: none !important;
    margin: 0 !important;
  }

  .ql-snow.ql-toolbar .ql-picker-label.ql-active {
    color: black !important;
  }

  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active {
    color: black !important;
    border: none !important;
    margin-top: 3px !important;
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
    // padding: 0 !important;
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
    background-size: 20px 20px;
  }

  //dropdown이 선택되어있지 않은 상태일 때
  .ql-snow .ql-picker:not(.ql-color-picker) .ql-picker-label {
    stroke: black;
    background: url(${DropDown}) no-repeat 75px center;
    background-size: 20px 20px;
  }

  ////////////////////////////////////////기존 stroke 관리//////////////////////////////

  // //dropdown이 선택되었을 때 - 아무 영향 없음
  .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: currentColor;
  }

  //////기존 color svg 삭제////////
  svg .ql-stroke:not(.ql-color-label) {
    display: none;
  }

  .ql-snow .ql-color-picker .ql-picker-label {
    margin-top: 3px !important;
  }

  .ql-snow .ql-color-picker .ql-picker-label:hover {
    margin-top: 3px !important;
  }

  //////strike의 stoke 삭제///////
  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: none;
  }

  .ql-snow .ql-transparent {
    opacity: 100%;
  }

  .ql-snow .ql-stroke {
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-width: 2;
    strike: currentColor;
  }

  .ql-snow .ql-picker {
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
  }

  .eBaymm .ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding: 0 !important;
    position: relative;
    width: 100%;
    border: none !important;
  }

  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke {
    stroke: currentColor;
  }
  .ql-snow.ql-toolbar .ql-picker-label:hover {
    color: black;
  }

  /////////////////////////////////////////color picker options(컬러 12개 표시)//////////////////////////////////////

  .ql-snow .ql-color-picker.ql-expanded .ql-picker-options {
    display: grid; /* Grid 레이아웃 사용 */
    grid-template-columns: repeat(6, 1fr); /* 한 행에 6개 */
    // gap: 0.5px; /* 색상 박스 간격 */
    background-color: black;
    border: 0.2px solid black !important; /* 옵션 창 테두리 */
    padding: none !important; /* 내부 여백 */
    border-radius: 0 !important; /* 둥근 모서리 */
    width: fit-content; /* 내용물에 따라 크기 조정 */
    height: auto; /* 높이는 Grid에 따라 자동 조정 */
  }

  /* Color Picker 아이템 기본 상태 */
  .ql-toolbar .ql-color-picker .ql-picker-item {
    margin: auto !important;
    border-radius: 0 !important; /* 색상 박스 모서리 둥글게 */
    border: none !important; /* 기본 테두리 색상 */
    padding: 15px !important;
    border: 0.2px solid black !important;
  }

  /* Color Picker 호버 상태 */
  .ql-toolbar .ql-color-picker .ql-picker-item:hover {
    border: 0.5px solid #000; /* 호버 시 테두리 강조 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
    border-radius: 0 !important;
    border: none !important; /* 기본 테두리 색상 */
    margin: auto !important;
    padding: 15px !important;
    border: 0.2px solid black !important;
  }

  .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    border: none !important; /* 기본 테두리 색상 */
    margin: auto !important;
    padding: 15px !important;
  }

  /////////////////////////////////bold~colorpicker margin과 icon 설정/////////////////////////////////

  .ql-toolbar .ql-bold {
    background: url(${Bold}) no-repeat center center;
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
    margin: auto 20px;
  }

  .ql-toolbar .ql-italic {
    background: url(${Italic}) no-repeat center center;
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
    margin: auto 20px;
  }

  .ql-toolbar .ql-underline {
    background: url(${Underline}) no-repeat center center;
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
    margin: auto 20px;
    background-color:;
  }

  .ql-toolbar .ql-strike {
    background: url(${Centerline}) no-repeat center center;
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
    margin: auto 20px;
  }

  .ql-snow .ql-color-picker {
    margin: auto 20px;
    background: url(${Color}) no-repeat center center;
    background-size: 12px 14px;
  }

  //////////////////active 되었을 때 strike의 stroke 관리(없앰)///////////////////////////////

  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill {
    fill: none;
  }

  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill {
    fill: none;
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
