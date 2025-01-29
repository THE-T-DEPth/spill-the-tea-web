import styled from 'styled-components';

let MAX = '767px';

export const CDiv = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: ${MAX}) {
    width: 100%;
  }
`;

export const DSCTitleDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 29px;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background-color: var(--G3);
  }

  @media (max-width: ${MAX}) {
    margin-bottom: 10px;
    &::after {
      content: none;
    }
  }
`;

export const DSCTitle = styled.p`
  display: flex;
  line-height: 1;
  justify-content: center;
  align-items: center;
  color: var(--Black);
  font: var(--headingXXL);
  margin: 10px 0;

  @media (max-width: ${MAX}) {
    font: var(--headingLarge);
    margin: auto 0;
  }
`;

export const DSCMenuDiv = styled.div`
  position: relative;

  @media (max-width: ${MAX}) {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const DSCMenuImg = styled.img`
  position: relative;
  cursor: pointer;
  padding-left: 100%;

  @media (max-width: ${MAX}) {
    padding-left: 0;
  }
`;

export const DSCMenuDetailContainer = styled.div`
  position: absolute;
  width: 80px;
  z-index: 10;
  background-color: white;
  left: 101.5%;
  transform: translateX(-50%);

  @media (max-width: ${MAX}) {
    position: absolute;
    width: 80px;
    z-index: 10;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const DSCMenuDetailFixDiv = styled.div`
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
  padding: 15px;
  cursor: pointer;
  background-color: white;
`;

export const DSCMenuDetailRemoveDiv = styled.div`
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 4px 4px;
  padding: 15px;
  cursor: pointer;
  background-color: white;
`;

export const DSCDSCMenuDetail = styled.p`
  font: var(--headingSmall);
  margin: 0;
  line-height: 1;
`;

export const DSCContentWholeDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--G3);
`;

export const DSCTagDiv = styled.div`
  position: relative;
  margin-top: -25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${MAX}) {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const DSCEachTag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  margin-bottom: 29px;
  font: var(--labelMedium);
  border: 1px solid #dec181;
  background-color: var(--Yellow);
  border-radius: 4px;
  width: 94px;
  height: 35px;
  cursor: pointer;

  @media (max-width: ${MAX}) {
    width: 67px;
    height: 24px;
    font: var(--labelSmall);
    color: black;
    font-size: 10px;
    margin: 0 6px 6px 0;
    border-radius: 1.5px;
  }
`;

export const DSCProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;

  @media (max-width: ${MAX}) {
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const DSCProfileImg = styled.img`
  display: flex;
  width: 75px;
  height: 75px;
  margin-right: 10px;
  border-radius: 4px;

  @media (max-width: ${MAX}) {
    width: 36px;
    height: 36px;
  }
`;

export const DSCProfileTextDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${MAX}) {
    margin: auto 0;
  }
`;

export const DSCName = styled.p`
  display: flex;
  color: var(--Green2);
  font: var(--headingMedium);
  margin: 35% 0 3px 0;

  @media (max-width: ${MAX}) {
    font: var(--headingSmall);
    margin: 0 0 3px 0;
    line-height: 1;
  }
`;

export const DSCProfileDate = styled.p`
  display: flex;
  color: var(--G5);
  font: var(--paragraphSmall);
  margin: 0;

  @media (max-width: ${MAX}) {
    font: var(--paragraphSmall);
    font-size: 8px;
    line-height: 1;
    margin-top: 3px;
  }
`;

export const DSCSpeaker = styled.img`
  display: flex;
  width: 14px;
  height: 15px;
  border-radius: 4px;
  border: 1px solid var(--G5);
  background-color: var(--Yellow);
  padding: 6px 7px;
  cursor: pointer;
  margin-bottom: 9px;

  @media (max-width: ${MAX}) {
    margin: auto 0 auto 20px;
    border-radius: 1.5px;
  }
`;

export const DSCContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4px;
`;

export const DSCContentText = styled.p`
  display: flex;
  flex-direction: column;
  color: var(--HeadLine);
  font-family: 'Nanum Gothic', sans-serif;
  white-space: pre-line;
  margin-bottom: 30px;

  p:has(br) {
    line-height: 0;
    margin: 0;
  }

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

  @media (max-width: ${MAX}) {
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 0;
  }
`;

export const DSCContentImg = styled.img`
  display: flex;
  height: 300px;
  border-radius: 4px;
  margin-bottom: 30px;
  @media (max-width: ${MAX}) {
    display: flex;
    height: 233px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

export const DSCAnoterDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 24px;
  padding-bottom: 29px;
  @media (max-width: ${MAX}) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 24px;
    padding-bottom: 29px;
    margin-top: 15px;
  }
`;

export const DSCHeartImg = styled.img`
  display: flex;
  width: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

export const DSCHeartNum = styled.div`
  display: flex;
  color: var(--G5);
  font: var(--labelMedium);
  width: 24px;
  height: 100%;
  margin-right: 20px;
`;

export const DSCCommenttImg = styled.img`
  display: flex;
  width: 24px;
  margin-right: 5px;
`;

export const DSCCommenttNum = styled.div`
  display: flex;
  color: var(--G5);
  font: var(--labelMedium);
  width: 24px;
  margin-right: 20px;
`;

export const DSCShareImg = styled.img`
  display: flex;
  width: 24px;
  margin-left: auto;
  cursor: pointer;
`;

//나중에 출력할 때 font를 import 해와야함
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
