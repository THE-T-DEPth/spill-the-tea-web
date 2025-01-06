import styled from "styled-components";

export const OutContainer = styled.div`
  width: 1184px;
  height: 376px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;

export const LeftArrow = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  img {
    width: 17px;
    height: 36px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const RightArrow = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  img {
    width: 17px;
    height: 36px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  width: 1046px;
  height: 376px;
  background-color: #f6f6f6;
  border: 0.75px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  height: 45px;
  background-color: var(--Main1);
  display: flex;
  align-items: center;
  font: var(--headerTop);
  border-bottom: 0.75px solid #dbdbdb;
`;

export const Header = styled.div`
  font: var(--headerFirst);
  background-color: var(--Main1);
  color: var(--Black);
  padding-left: 34px;
  margin-top: 9.5px 834px 9.5px ;
`;

export const ContentContainer = styled.div`
  width: 100%;
  text-align: center;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: var(--BackYellow);
  display: flex; 
 
`;

export const Slider = styled.div<{ startIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ startIndex }) => `translateX(-${startIndex * 25}%)`}; /* 25%는 한 번에 4개의 항목 */
  /* width: max-content; */
`;



export const BoxWrapper = styled.div<{ isActive: boolean }>`
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  transition: pointer-events 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 37px 11px;
  width: 190px;
  height: 253px;
`;


export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

 
  margin-top: 139px;
  margin-bottom:152px;
  margin-left:340px ;

  color: var(--G5);
  font: var(--headingXL);
  text-align: center;
  position: relative; /* 위치 조정을 위한 relative */
  
`;



