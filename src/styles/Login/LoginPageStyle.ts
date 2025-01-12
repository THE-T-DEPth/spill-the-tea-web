import styled from "styled-components";
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
	height: calc(100vh);
  }
  
`;

export const Title = styled.h1`
  font:var(--headingXXL);
  color: var(--Black);
  margin-top: 101px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  ${isMobile} {
    font: var(--searchEmpty); 
	margin-top: 161px;
	text-align: left; 
    width: 100%; 
	max-width: 343px;
  }

`;

export const Subtitle = styled.p`
  font:var(--labelLarge);
  color: var(--Black);
  margin-top: 8px;
  margin-bottom: 41px;
  text-align: center;
  transition: all 0.3s ease-in-out;
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

export const LoginBox = styled.div`
  width: 452px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    width: 343px; 
    background: none; 
    box-shadow: none; 
  }
`;

export const LoginInputWrapper = styled.div`
  width: 374px;
  margin-top: 55px; 
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    margin-top: 0px;
	width: 343px;

	
  }
`;

export const PasswordInputWrapper = styled.div`
  width: 374px;
  margin-top: 18px; 
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    margin-top: 17px;
	width: 343px;
	
  }
`;

export const NewInputWrapper = styled.div`
  width: 374px;
 height: 138px;
  margin-top: 50px; 
  margin-bottom: 56px; 
  transition: all 0.3s ease-in-out;
  ${isMobile} {
	width: 343px;
	margin-top: 54px; 
  }
`;

export const Label = styled.label`
  font: var(--loginSmall);
  color: var(--Sub5);
  margin-bottom: 12px;
  display: block;
  transition: all 0.3s ease-in-out;
  ${isMobile}{
	font: var(--labelSmallMobile);
  }
`;



export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 28px;
    height: 28px;
	transition: all 0.3s ease-in-out;
	${isMobile}{
		width: 26.75px;
    height: 26.75px;
	
	}
  }
`;

export const LoginButton = styled.button`
  width: 374px;
  height: 45px;
  background-color:var(--Main2);
  font: var(--labelLarge);
  color: var(--Sub1);
  border: none;
  border-radius: 8px;
  padding-top: 4px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
	width: 343px;
  height: 50px;
  margin-bottom: 10px;
  font: var(--labelButtonMobile);
  border-radius: 4px;
  }
`;

export const SignupButton = styled.button`
  width: 374px;
  height: 45px;
  background-color:var(--Sub1);
  color:var(--Main2);
  padding-top: 4px;
  border: 1px solid var(--Main2);
  border-radius: 8px;
  font: var(--labelLarge);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
	width: 343px;
  height: 50px;
  margin-bottom: 10px;
  font: var(--labelButtonMobile);
  border-radius: 4px;
  
  }
  
`;

export const ForgotPassword = styled.p`
margin-top: 12px;
text-align: center;
  font: var(--labelMedium);
  color:var(--Secondary1);
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
	margin-top: 12.99px;
	font: var(--labelSmall);
  }
`;
export const ErrorMessage = styled.p`
  font: var(--paragraphSmall); 
  color: transparent; 
  margin-top: 2.82px; 
  margin-left: 0; 
  align-self: flex-start; 
  height: 1em; 
  transition: color 0.2s ease-in-out; 
  ${isMobile}{
	font: var(--paragraphSmallMobile);
  }

  &.visible {
    color: var(--error1); 
  }
`;



