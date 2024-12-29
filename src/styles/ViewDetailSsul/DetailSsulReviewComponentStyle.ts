import styled from 'styled-components';

export const DSRDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
  }
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

export const DSRBtnDiv = styled.div`
  display: flex;
  width: 175px;
  flex-shrink: 0;
  margin-left: 10%;
`;

export const DSRBtnDiv2 = styled.div`
  display: flex;
  width: 109px;
  flex-shrink: 0;
  margin-left: 10%;
`;

export const DSRContent = styled.div`
  display: flex;
  font: var(--labelSmall);
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
