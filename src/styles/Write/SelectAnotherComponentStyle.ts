import styled from 'styled-components';

export const AnotherInputDiv = styled.div`
  display: flex;
  width: 30%;
  min-width: 450px;
  flex-direction: column;
`;

export const AnotherBtnDiv = styled.div`
  display: flex;
  height: 70px;
  background-color: #fffce5;
  border-bottom: 1px solid var(--G4);
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const AnotherBtn = styled.button`
  display: flex;
  background-color: transparent;
  font: var(--headingLarge);
  color: var(--G4);
  border: none;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
`;

export const AnotherTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 92px;
  font: var(--headingLarge);
  color: black;
  background-color: #fffce5;
  border-bottom: 1px solid var(--G4);
  align-items: center;
  justify-content: center;

  ::placeholder {
    color: var(--G3);
    font: var(--headingMedium);
    line-height: 100%;
  }
`;

export const AnotherText = styled.p`
  display: flex;
  height: 92px;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const NovelizationBtn = styled.button`
  display: flex;
  height: 46px;
  width: 193px;
  background-color: var(--Green3);
  border-radius: 4px;
  font: var(--headingLarge);
  color: white;
  border: 1px solid var(--EarlGrey);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
`;
export const SearchContainer = styled.div`
  position: relative;
  width: 70%; /* input과 동일한 width */
  height: 45px; /* input과 동일한 height */
  display: flex;
  align-items: center;
`;

export const AnotherSearch = styled.input`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  font: var(--headingMedium);
  padding-left: 15px;
  padding-right: 45px; /* 이미지 공간을 확보하기 위해 padding 추가 */
  color: black;
  border: 1px solid var(--Green3);
  outline: none;
  line-height: 100%;
`;

export const AnotherSearchImg = styled.img`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const AnotherMiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 537px;
  background-color: white;
  border-bottom: 1px solid var(--G4);
  justify-content: center;

  ::placeholder {
    font: var(--labelMedium);
    color: #d9d9d9;
    padding-top: 5px;
    line-height: 100%;
  }
`;

export const MiddleNovelization = styled.textarea`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 15px 20px 0 20px;
  box-sizing: border-box;
  color: black;
  font: var(--labelMedium);
`;

export const JjalDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: auto; /* 세로 스크롤 활성화 */
  box-sizing: border-box;
`;

export const Jjal = styled.img`
  display: flex;
  width: 40%;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
`;

export const VoiceTextDiv = styled.div`
  display: flex;
  width: 100%;
  height: 333px;
  background-color: white;
  border-bottom: 1px solid var(--G4);
  justify-content: center;

  
  ::placeholder {
    color: var(--G3);
    font: var(--labelMedium);
`;

export const VoiceText = styled.textarea`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font: var(--labelMedium);
  color: black;
  outline: none;
  border: none;
  padding: 15px 15px 0 15px;
  box-sizing: border-box;
`;

export const VoiceSelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  padding: 15px 15px 0 15px;
  border-bottom: 1px solid var(--G4);
  align-items: center;
  justify-content: center;
  padding: 0;
  font: var(--labelLarge);
  color: black;
`;

export const PlayImg = styled.img`
  displayL flex;
  width: 44px;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 auto;
  cursor: pointer;
`;

export const VoiceSelectedDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 61px;
  border-bottom: 1px solid var(--G4);
  align-items: center;
  padding-left: 20px;
`;

export const SelectedVoice = styled.p`
  display: flex;
  font: var(--labelLarge);
  color: black;
  align-items: center;
  justify-content: center;
`;

export const SelectedVoiceText = styled.p`
  display: flex;
  font: var(--labelLarge);
  color: black;
  margin-left: auto;
  margin-right: 30px;
`;

export const KeywordTypeDiv = styled.div`
  display: flex;
  height: 61px;
  font: var(--headingMedium);
  color: black;
  border-bottom: 1px solid var(--G4);
  align-items: center;
  justify-content: center;
`;

export const KeywordType = styled.div`
  display: flex;
  height: 100%;
  width: 20%;
  border-right: 1px solid var(--G4);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const KeywordMiddleDiv = styled.div`
  display: flex;
  width: calc(100% - 34px);
  height: 373px;
  padding: 20px 17px;
  border-bottom: 1px solid var(--G4);
  flex-wrap: wrap;
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-content: flex-start; /* 상단부터 정렬 */
  gap: 6%;
`;

export const Keywords = styled.button`
  display: flex;
  width: 20%;
  height: 35px;
  margin: 10px 0;
  background-color: var(--Yellow);
  border: 1px solid #dec181;
  border-radius: 4px;
  font: var(--labelMedium);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SelecteKeywordDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 61px;
  border-bottom: 1px solid var(--G4);
  align-items: center;
  padding-left: 20px;
`;

export const Text = styled.p`
  font: var(--headingMedium);
  padding-right: 10px;
`;

export const selectedKeywords = styled.button`
  display: flex;
  width: 20%;
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
  cursor: pointer;
`;

export const AnotherBottomDiv = styled.div`
  display: flex;
  background-color: white;
  height: 95px;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
`;

export const AnotherCancelBtn = styled.div`
  display: flex;
  width: 171px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--G5);
  border-radius: 4px;
  font: var(--labelLarge);
  background-color: white;
  color: var(--G5);
  cursor: pointer;
  margin: auto;
`;

export const AnotherSaveBtn = styled.div`
  display: flex;
  width: 171px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font: var(--labelLarge);
  background-color: var(--Green3);
  border: 1px solid var(--EarlGrey);
  color: white;
  cursor: pointer;
  margin: auto;
`;
