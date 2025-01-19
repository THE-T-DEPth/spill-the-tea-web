import styled from 'styled-components';

let MAX = '767px';

export const DSRDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;

  @media (max-width: ${MAX}) {
    width: 100%;
  }
`;

export const DSRInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 20px auto 10px auto;

  @media (max-width: ${MAX}) {
    margin: 15px auto 10px auto;
  }
`;

export const DSRRInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 5px auto 8px auto;
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
  margin: 0 auto 0 auto;
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

export const DSRWholeCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px auto 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

export const DSREachCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto 10px auto;
  width: 100%;
  box-sizing: border-box;

  align-items: center;
`;

export const DSRCocomentDiv = styled.div<{ $inputclick: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-left: 5%;
  background-color: ${({ $inputclick }) =>
    $inputclick == 'true' ? '' : '#F9F9F9'};
  border-radius: 10px;
  padding-left: 20px;
`;

export const ReviewDiv = styled.div<{ $openrereview: string }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${({ $openrereview }) =>
    $openrereview == 'true' ? '#FFFDEE' : 'white'};
  padding: ${({ $openrereview }) =>
    $openrereview == 'true' ? '20px 30px' : '0'};
  width: ${({ $openrereview }) =>
    $openrereview == 'true' ? 'calc(100% + 60px)' : '100%'};

  @media (max-width: ${MAX}) {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: ${({ $openrereview }) =>
      $openrereview == 'true' ? '#FFFDEE' : 'white'};
    padding: ${({ $openrereview }) =>
      $openrereview == 'true' ? '15px 6%' : '0'};
    width: ${({ $openrereview }) =>
      $openrereview == 'true' ? 'calc(100vw - 15px)' : '100%'};
  }
`;

export const DSRProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px auto 7px auto;
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

  @media (max-width: ${MAX}) {
    margin-right: auto;
  }
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

  @media (max-width: ${MAX}) {
    margin: auto 0;
  }
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
  left: 0;
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
  margin-bottom: 10px;
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

export const RereviewDiv = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
`;

export const RereviewArrowImg = styled.img`
  display: flex;
  height: 11px;
`;

export const RereviewP = styled.p`
  display: flex;
  color: var(--G4);
  font: var(--paragraphMedium);
  align-items: center;
  font-size: 8px;
  margin: auto 0;
  padding: 0;
`;
