import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalBox = styled.div`
  width: 566px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  ${isMobile}{
	width: 345px;
	height: 157px;
	border-radius: 4px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  cursor: pointer;
  ${isMobile}{
	top: 10px;
	right: 10px;
  }

  img {
    width: 16px;
    height: 16px;
	${isMobile}{
	width: 10px;
	height: 10px;
  }
  }
`;

export const Message = styled.p`
  font: var(--headingLarge);
  color: var(--HeadLine);
  margin-bottom: 52px;
  margin-top: 86px;
  ${isMobile}{
  font: var(--headingSmall);
  margin-top: 41.1px;
  margin-bottom: 37.9px;
  }
`;

export const ConfirmButton = styled.button`
  width: 171px;
  height: 44px;
  padding-top: 5px;
  margin-bottom: 45px;
  background-color: var(--Green2);
  color: white;
  border: none;
  border-radius: 20px;
  font: var(--labelLarge);
  cursor: pointer;
  ${isMobile}{
	width: 105px;
	height: 27px;
	border-radius: 4px;
	font:var(--labelSmall);
	padding-top: 2px;
	margin-bottom: 34px;
  }
`;
