import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";


export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 126px);
  background-color:var(--BackFirst);
  ${isMobile} {
    background-color: var(--primary2);
	
  }
`;

export const Title = styled.h1`
width: 736px;
margin-top: 309px;
font: var(--labelXXL);
color: var(--HeadLine);
${isMobile}{
	font: var(--labelMedium);
	margin-top: 338px;
}
`;

export const Highlight = styled.span`
font: var(--labelXXL);
color: var(--Green3);
${isMobile}{
	font: var(--labelMedium);
}
`;

export const Button = styled.button`
  width: 374px;
  height: 45px;
  margin-top: 88px;
  margin-bottom: 319px;
  padding-top: 8.5px;
  padding-bottom: 6.5px;
  background-color: var(--Green2);
  color: var(--Sub1);
  border: none;
  border-radius: 8px;
  font: var(--labelLarge);
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${isMobile} {
	width: 276px;
  height: 50px;
  margin-top: 64px;
  margin-bottom: 213px;
  font: var(--labelButtonMobile);
  border-radius: 4px;
  }
`;
