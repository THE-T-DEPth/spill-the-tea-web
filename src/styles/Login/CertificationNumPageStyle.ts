import styled from "styled-components";
import { isMobile } from "../../hooks/Media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:var(--BackColor);
  height: calc(100vh - 133px);
  transition: color 0.2s ease-in-out;
  ${isMobile} {
    background-color: var(--primary2);
	height: calc(100vh - 126px);
  }
`;

export const Title = styled.h1`
  font: var(--headingXXL);
  color: var(--Black);
  margin-top: 228px;
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
  margin-bottom: 211px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 55px;
  ${isMobile} {
    width: 343px; 
	margin-bottom: 65px;
    background: none; 
    box-shadow: none; 
  }
`;

export const passwordWrapper = styled.div`
  margin-top: 55px;
  ${isMobile}{
	margin-top: 0px;
  }
`;

export const Label = styled.label`
  font: var(--loginSmall);
  color: var(--Sub5);
  display: block;
  ${isMobile}{
	font: var(--searchEmptyMini);
  }
  
`;

export const EmailLabel = styled.p`
  font: var(--headingSmall);
  color: var(--Black);
  margin-top: 5px;
  margin-bottom: 12px;
  ${isMobile}{
	font: var(--labelSmall);
	color: var(--G5);
  }
`;

export const SubmitButton = styled.button`
  width: 374px;
  height: 45px;
  margin-top: 43px;
  background-color: var(--Sub1);
  color: var(--Main2);
  border: 1px solid var(--Main2);
  border-radius: 8px;
  padding-top: 4px;
  font: var(--labelLarge);
  cursor: pointer;
  ${isMobile}{
	width: 343px;
	height: 50px;
	font: var(--loginSmall);
	margin-top: 246px;
	border-radius: 4px;
  }

`;

export const ErrorMessage = styled.p`
  font: var(--paragraphSmall);
  color: transparent;
  margin-top: 2px;
  align-self: flex-start;
  height: 1em;
  transition: color 0.2s ease-in-out;
  ${isMobile}{
	font: var(--paragraphSmall);
  }

  &.visible {
    color: var(--error1);
  }
`;
