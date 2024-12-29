import styled from 'styled-components';

export const CDiv = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
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

export const DSCTitle = styled.div`
  display: flex;
  line-height: 1;
  justify-content: center;
  align-items: center;
  color: var(--Black);
  font: var(--headingXXL);
  margin: 10px 0;
`;

export const DSCMenuDiv = styled.div`
  position: relative;
`;

export const DSCMenuImg = styled.img`
  position: relative;
  cursor: pointer;
  padding-left: 100%;
`;

export const DSCMenuDetailContainer = styled.div`
  position: absolute;
  width: 80px;
  z-index: 10;
  background-color: white;
  left: 101.5%;
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
