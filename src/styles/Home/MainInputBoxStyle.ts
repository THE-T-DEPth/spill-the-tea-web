import styled from "styled-components";
import { isMobile } from "../../hooks/Media";

export const OutContainer = styled.div`
  width: 100%;
  max-width: 1184px;
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
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    display: none; 
  }
`;

export const RightArrow = styled(LeftArrow)`
  left: auto;
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1046px;
  height: 376px;
  background-color:var(--Sub2);
  border: 0.75px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    background-color: transparent; 
    border: none; 
	height: 280px;
  }
`;

export const HeaderWrap = styled.div`
  width: 100%;
  height: 45px;
  background-color: var(--Main1);
  display: flex;
  align-items: center;
  font: var(--headerTop);
  border-bottom: 0.75px solid #dbdbdb;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    background-color: transparent; 
    border: none; 
	margin-top: 0px;
	height: 0px;
  }
`;

export const Header = styled.div`
  font: var(--headerFirst);
  background-color: var(--Main1);
  color: var(--Black);
  padding-left: 34px;
  margin: 9.5px 0;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    background-color: transparent; 
    border: none; 
	font: var(--headerMedium);
	padding-left: 16px;
	margin: 0;

  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1046px;
  text-align: center;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: var(--BackYellow);
  display: flex;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    background-color: transparent; 
    border: none; 
  }
`;

interface SliderProps {
	startIndex: number;
	isTransitioning: boolean;
	isMobile: boolean;
}

export const Slider = styled.div.withConfig({
	shouldForwardProp: (prop) => !["startIndex", "isTransitioning", "isMobile"].includes(prop),
}) <SliderProps>`
	display: flex;
	transition: ${({ isTransitioning }) => (isTransitioning ? "transform 0.3s ease-in-out" : "none")};
	transform: ${({ startIndex, isMobile }) => {
		const boxWidth = isMobile ? 152.88 : 190;
		const boxMargin = 11;
		const containerOffset = isMobile ? 118.9 : 112;
		return `translateX(calc(-${startIndex * (boxWidth + boxMargin * 2)}px + ${containerOffset}px))`;
	}};
	width: ${({ isMobile }) => (isMobile ? "calc(100% + 118.9px)" : "calc(100% + 112px)")};
  `;




export const BoxWrapper = styled.div.attrs<{ isActive: boolean }>(() => ({
	isActive: undefined, // DOM에 전달되지 않도록 설정
})) <{ isActive: boolean }>`
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 37px 11px;
  width: 190px;
  height: 253px;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    margin-top: 15px;
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 139px auto;
  color: var(--G5);
  font: var(--headingXL); 
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    margin: 50px auto; 
    font: var(--headingLarge); 
	color: var(--G3);
  }
`;

