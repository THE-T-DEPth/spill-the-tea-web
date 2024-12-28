import styled from 'styled-components';

export const DSDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const DSCDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 800px) {
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
`;

export const DSCMenuDiv = styled.div`
  position: absolute; /* 부모나 뷰포트를 기준으로 조정 가능 */
  top: 100px;
  right: 10%;
`;

export const DSCMenuImg = styled.img`
  cursor: pointer;
`;

export const DSCMenuDetailContainer = styled.div`
  position: absolute;
  width: 80px;
  z-index: 10;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
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

export const DSCTitle = styled.div`
  display: flex;
  line-height: 1;
  justify-content: center;
  align-items: center;
  color: var(--Black);
  font: var(--headingXXL);
  margin: 10px 0;
`;

export const DSCContentWholeDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--G3);
`;

export const DSCTagDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
`;

export const DSCProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;
`;

export const DSCProfileImg = styled.img`
  display: flex;
  width: 75px;
  height: 75px;
  margin-right: 10px;
  border-radius: 4px;
`;

export const DSCProfileTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DSCName = styled.p`
  display: flex;
  color: var(--Green2);
  font: var(--headingMedium);
  margin: 35% 0 3px 0;
`;

export const DSCProfileDate = styled.p`
  display: flex;
  color: var(--G5);
  font: var(--paragraphSmall);
  margin: 0;
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
`;

export const DSCContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4px;
`;

export const DSCContentText = styled.p`
  display: flex;
  color: var(--HeadLine);
  font: var(--paragraphMedium);
  white-space: pre-line;
  margin-bottom: 30px;
`;

export const DSCContentImg = styled.img`
  display: flex;
  height: 300px;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const DSCAnoterDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 24px;
  padding-bottom: 29px;
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

export const DSRDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DSRInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 20px 0 25px 0;
`;

//placeholder 색상 변경
export const DSRInput = styled.input`
  display: flex;
  border: 1px solid var(--G5);
  height: 43px;
  width: 100%;
  font: var(--labelSmall);
  color: black;
  padding-left: 20px;
  padding-top: auto;
  padding-bottom: auto;
  outline: none;
  ::placeholder {
    color: blue; /* placeholder 텍스트 색상 */
  }
`;

export const DSRSendImg = styled.img`
  display: flex;
  background-color: var(--Green1);
  width: 20px;
  height: 20px;
  padding: 12.5px;
  border: 1px solid var(--G5);
  border-left: none;
  cursor: pointer;
`;

export const DSREachCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DSRProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 7px;
`;

export const DSRProfileImg = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-right: 10px;
`;

export const DSRProfileName = styled.div`
  display: flex;
  align-items: center;

  font: var(--headingSmall);
  color: black;
`;

export const DSRContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const DSRContent = styled.div`
  display: flex;
  font: var(--labelSmall);
  width: 80%;
  margin-right: auto;
`;

export const DSRReviewBtn = styled.button`
  display: flex;
  padding: 0 15px;
  background-color: transparent;
  font: var(--labelSmall);
  color: var(--G5);
  cursor: pointer;
  border: none;
  border-right: 1px solid #404040;
  height: 16px;
`;

export const DSRHeartBtn = styled.button`
  display: flex;
  padding: 0 15px;
  background-color: transparent;
  font: var(--labelSmall);
  color: var(--G5);
  cursor: pointer;
  border: none;
  border-right: 1px solid #404040;
  height: 16px;
`;

export const DSRComplainBtn = styled.button`
  display: flex;
  padding: 0 15px;
  background-color: transparent;
  font: var(--labelSmall);
  color: var(--G5);
  cursor: pointer;
  border: none;
  height: 16px;
`;

export const DSRDateHeartDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 25px;
`;

export const DSRDateDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 21px;
`;

export const DSRDate = styled.p`
  display: flex;
  font: var(--paragraphMedium);
  font-size: 8px;
  margin: 0;
  color: var(--G5);
`;

export const DSRHeartDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DSRHeartImg = styled.img`
  display: flex;
  width: 13px;
  height: 13px;
  margin: auto 0;
  margin-right: 5px;
`;

export const DSRHeartNum = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--G5);
  font: var(--paragraphMedium);
  line-height: 1;
  font-size: 8px;
  margin: auto 0;
`;

// export const s = styled.div`

// `;
