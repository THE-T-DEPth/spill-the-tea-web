import styled from 'styled-components';

export const OutContainer = styled.div`
  width: 1184px;
  height: 376px;
  margin: 0 auto; /* Centers the component horizontally */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Ensures arrows align relative to this container */
`;

export const LeftArrow = styled.div`
  position: absolute;
  left: 0; /* 기준을 왼쪽 끝으로 설정 */
  top: 50%;
  transform: translate(-100%, -50%); /* -100%로 왼쪽으로 이동 */
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 0; /* 기준을 오른쪽 끝으로 설정 */
  top: 50%;
  transform: translate(100%, -50%); /* 100%로 오른쪽으로 이동 */
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  border: 0.75px solid #DBDBDB;
  display: flex;
  flex-direction: column;
  margin-left:52px;
  margin-right:52px;
  
`;

export const HeaderWrap = styled.div`
  width: 100%;
  height: 45px;
  background-color: var(--Main1);
  display: flex;
  align-items: center;
  font: var(--headerTop);
  border-bottom: 0.75px solid #DBDBDB;
`;

export const Header = styled.div`
  font: var(--headerTop);
  background-color: var(--Main1);
  color: var(--Black);
  padding-left: 34px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--BackYellow);
`;

export const ContentBox = styled.div`
  width: 180px;
  height: 250px;
  margin: 8px;
  background-color: #ffffff;
  border: 0.5px solid #dbdbdb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
