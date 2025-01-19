import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--BackColor);
  height: calc(100vh - 100px);
	transition: all 0.3s ease-in-out;
	${isMobile} {
	  background-color: var(--primary2);
	  height: calc(100vh - 126px);
	}
  
`;

export const Title = styled.h1`
  font: var(--headingXXL);
  color: var(--Black);
  margin-top: 230px;
  transition: color 0.2s ease-in-out;
  ${isMobile} {
    font: var(--searchEmpty); 
	margin-top: 200px;
	text-align: left; 
    width: 100%; 
	max-width: 343px;
  }
`;

export const Subtitle = styled.p`
  font: var(--labelLarge);
  color: var(--Black);
  margin-top: 6px;
  margin-bottom: 41px;
  transition: color 0.2s ease-in-out;
  ${isMobile} {
    font: var(--labelSmall); 
	color: var(--G5);
    margin-top: 0px;
    margin-bottom: 42px;
	text-align: left; 
    width: 100%; 
	max-width: 343px;
  }
`;

export const PasswordBox = styled.div`
  width: 452px;
  background: var(--primary2);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  margin-bottom: 213px;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: color 0.2s ease-in-out;
  ${isMobile} {
    width: 343px; 
	margin-bottom: 65px;
    background: none; 
    box-shadow: none; 
  }
`;

export const passwordWrapper = styled.div`
margin-top: 63px;
${isMobile}{
	margin-top: 0px;
  }
`;

export const Label = styled.p`
  font: var(--headingLarge);
  color: var(--Black);
  margin-bottom: 10px;
  ${isMobile} {
	text-align: left; 
	font: var(--loginSmall);
	color: var(--G5);
    width: 100%; 
	max-width: 343px;
	margin-bottom: 5px;
  }
`;

export const EmailLabel = styled.p`
  font: var(--labelMedium);
  color: var(--EarlGrey);
  margin-bottom: 4px;
  ${isMobile} {
	text-align: left; 
	color: var(--HeadLine);
    width: 100%; 
	max-width: 343px;
  }
`;

export const Notification = styled.p`
  font: var(--labelMini);
  color:var(--LightGrey);
  margin-bottom: 31px;
  ${isMobile} {
    display: none; 
  }

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 78.18px;
  ${isMobile}{
	margin-bottom: 64px;
	gap: 16px;
  }
`;

export const ChangeButton = styled.button`
width: 177px;
height: 45px;
margin-left: 37px;
  background-color: var(--Green2);
  font: var(--labelMedium);
  color: var(--Sub1);
  padding-top: 4px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  ${isMobile}{
	width: 171px;
	height: 50px;
	font: var(--labelButtonMobile);
	margin-top: 294px;
	border-radius: 4px;
	margin-left: 0px;
  }
`;

export const ToLoginPageButton = styled.button`
width: 177px;
height: 45px;
margin-right: 37px;
  background-color: var(--Sub1);
  color: var(--Green2);
  padding-top: 4px;
  font: var(--labelMedium);
  border: 1px solid var(--Green2);
  border-radius: 8px;
  cursor: pointer;
  ${isMobile}{
	width: 171px;
	height: 50px;
	font: var(--labelButtonMobile);
	margin-top: 294px;
	border-radius: 4px;
	margin-right: 0px;
	border-radius: 4px;
  }
`;
