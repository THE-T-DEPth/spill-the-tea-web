import styled from 'styled-components';

export const WriteDiv = styled.div<{ $openpostmodal: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh
  height: ${({ $openpostmodal }) =>
    $openpostmodal == 'true' ? '100vh' : '100%'};
  // min-width: 1400px;
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
  min-width: 80px;
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
  border: 1px solid var(--Green2);
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
