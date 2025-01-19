import styled from "styled-components";
import { isMobile } from "../../hooks/Media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--BackColor);
  height: calc(100vh - 133px);
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    background-color: var(--primary2);
	height: calc(100vh - 126px);
  }
`;

export const Title = styled.h1`
  font: var(--headingXXL);
  color: var(--Black);
  margin-top: 172px;
  margin-bottom: 32px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    font: var(--searchEmpty); 
	margin-top: 200px;
	text-align: left; 
    width: 100%; 
	max-width: 343px;
	margin-bottom: 0px;
  }
`;

export const PasswordBox = styled.div`
  width: 452px;
  background: var(--Sub1);
  margin-bottom: 156px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    width: 343px; 
    background: none; 
    box-shadow: none; 
  }
`;

export const FirstInputWrapper = styled.div`
  width: 100%;
  max-width: 374px; 
  margin-top: 20px;
  margin: 0 auto; 
  position: relative;
`;

export const SecondInputWrapper = styled.div`
  width: 100%; 
  max-width: 374px; 
  margin: 0 auto;
  position: relative;
`;

export const ChangeSubtitle = styled.div`
  margin-top: 55px;
  font: var(--loginSmall);
  color: var(--EarlGrey);
  margin-bottom: 12px;
  transition: color 0.2s ease-in-out;
  ${isMobile}{
	color: var(--G5);
	margin-top: 42px;
  }
`;

export const ErrorMessage = styled.p`
  font: var(--paragraphSmall);
  color: transparent;
  margin-top: 3px; 
  text-align: left;
  visibility: hidden;
  height: 20px;
  transition: color 0.3s ease, visibility 0.3s ease;

  &.visible {
    color: var(--error1);
    visibility: visible;
  }
`;

export const SuccessMessage = styled.p`
  font: var(--paragraphSmall);
  color: transparent;
  margin-top: 3px;
  text-align: left;
  visibility: hidden;
  height: 20px;
  transition: color 0.3s ease, visibility 0.3s ease;

  &.visible {
    color: var(--Green2);
    visibility: visible;
  }
`;

export const PasswordGuidelineWrapper = styled.div`
  width: 100%;
  max-width: 374px; 
  margin: 0 auto; 
`;

export const PasswordGuidelineTitle = styled.p`
  font: var(--loginSmall);
  color: var(--EarlGrey);
  margin-bottom: 8px;
  text-align: left;
  ${isMobile}{
	color: var(--G5);
  }
`;

export const PasswordGuidelineText = styled.div`
  font: var(--paragraphMiniL);
  color: var(--G5);
  text-align: left;
  line-height: 1.5;
  transition: color 0.2s ease-in-out;
  ${isMobile}{
	color: var(--G5);
  }
  
`;

export const Button = styled.button`
  width: 374px;
  height: 45px;
  background-color: var(--Green2);
  color: white;
  border: none;
  border-radius: 8px;
  font: var(--labelLarge);
  cursor: pointer;
  margin : 51.82px 39px 54.18px 39px;
  padding-top: 4px;
  transition: color 0.2s ease-in-out;
  ${isMobile} {
	width: 343px;
  height: 50px;
  margin-bottom: 10px;
  font: var(--labelButtonMobile);
  background-color: var(--Sub1);
  color: var(--Green2);
  border: 1px solid var(--Green2);
  border-radius: 4px;
  align-items: center;
  margin-top: 102px;
  }

`;
