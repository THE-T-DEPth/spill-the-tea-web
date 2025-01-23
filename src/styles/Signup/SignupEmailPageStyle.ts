import styled from 'styled-components';
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

export const Header = styled.div`
  width: 100%; 
  max-width: 452px; 
  margin: 0 auto; 
  text-align: center; 
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    max-width: 343px; 
    text-align: left; 
  }
`;


export const Title = styled.h1`
  font: var(--headingXXL);
  color: var(--Black);
  margin-top: 149px;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    font: var(--searchEmpty); 
    margin-top: 161px;
  }
`;

export const Subtitle = styled.p`
  font: var(--labelLarge);
  color: var(--Black);
  margin-top: 8px;
  margin-bottom: 41px;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    font: var(--labelSmall); 
    color: var(--G5);
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;


export const Label = styled.label`
  font: var(--loginSmall);
  color: var(--Sub5);
  margin-bottom: 12px;
  display: block;
  ${isMobile}{
	font: var(--signupMobile);
	color: var(--G5);
	margin-top: 0px;
  }
`;
export const SignupBox = styled.div`
  width: 100%; 
  max-width: 452px;
  background:var(--Sub1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto; 
  margin-bottom: 132px;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 100%;
    max-width: 343px;
	margin-top: -30px;
	margin-bottom: 0px;
    background: none; 
    box-shadow: none; 
  }
`;


export const InputWrapper = styled.div`
  width: 100%; 
  max-width: 374px; 
  margin: 0 auto; 
  margin-bottom: 16px;
`;


export const SignupInputWrapper = styled.div`
  width: 100%; 
  max-width: 374px; 
  margin: 0 auto; 
  margin-top: 55px;
`;


export const CustomButtonUp = styled.button`
  width: 100%;
  height: 45px;
  padding-top: 13px;
  padding-bottom: 11px;
  background-color: var(--InputBack);
  color: var(--Green2);
  border: none;
  border-radius: 8px;
  font: var(--headingMedium);
  cursor: pointer;
  ${isMobile} {
	width: 343px;
  height: 45px;
  margin-bottom: 10px;
  font: var(--labelMedium);
  border-radius: 4px;
  }
`;

export const CustomButton = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 74px;
  margin-bottom: 46px;
  padding-top: 4px;
  padding-bottom: 2.5px;
  background-color: var(--InputBack);
  color: var(--primary2);
  border: none;
  border-radius: 8px;
  font: var(--labelLarge);
  cursor: pointer;
 background-color: var(--Green2);
 transition: all 0.3s ease-in-out;
  ${isMobile} {
	width: 343px;
  height: 50px;
  margin-top: 130px;
  margin-bottom: 65px;
  font: var(--labelButtonMobile);
  border-radius: 4px;
  }
  
`;

export const TypeInputWrapper = styled.div`
  width: 100%; 
  max-width: 374px; 
  height: 45px;
  margin: 0 auto;
  margin-top: 47px;
  ${isMobile} {
	margin-top: 20px;
  }
`;


export const EmailStatusText = styled.p<{ $status: 'valid' | 'invalid' | null }>`
  font: var(--paragraphSmall);
  margin-top: 2.82px;
  color: ${(props) =>
		props.$status === 'valid'
			? 'red'
			: props.$status === 'invalid'
				? 'red'
				: 'transparent'};
  visibility: ${(props) => (props.$status ? 'visible' : 'hidden')};
  height: 20px;
  transition: color 0.3s ease;
`;

export const TimerText = styled.p`
  font: var(--paragraphSmall);
  margin-top: 8px;
  color: var(--HeadLine);
  text-align: left;
  height: 20px;
`;
