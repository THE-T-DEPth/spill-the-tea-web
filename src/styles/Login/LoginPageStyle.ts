import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

export const Title = styled.h1`
  font:var(--headingXXL);
  color: var(--Black);
  margin-top: 101px;

`;

export const Subtitle = styled.p`
  font:var(--labelLarge);
  color: var(--Black);
  margin-top: 8px;
  margin-bottom: 41px;
`;

export const LoginBox = styled.div`
  width: 452px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  /* padding: 32px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const LoginInputWrapper = styled.div`
  width: 374px;
  margin-top: 55px; 
`;

export const PasswordInputWrapper = styled.div`
  width: 374px;
  margin-top: 18px; 
`;

export const NewInputWrapper = styled.div`
  width: 374px;
 height: 138px;
  margin-top: 50px; 
  margin-bottom: 56px; 
`;

export const Label = styled.label`
  font: var(--loginSmall);
  color: var(--Sub5);
  margin-bottom: 12px;
  display: block;
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
`;

export const SignupButton = styled.button`
  width: 374px;
  height: 45px;
  background-color:var(--Sub1);
  color:var(--Main2);
  border: 1px solid var(--Main2);
  border-radius: 8px;
  padding-top: 4px;
  font: var(--labelLarge);
  cursor: pointer;
  
`;

export const ForgotPassword = styled.p`
margin-top: 12px;
text-align: center;
  font: var(--labelMedium);
  color:var(--Secondary1);
  text-decoration: underline;
  cursor: pointer;
`;
export const ErrorMessage = styled.p`
  font: var(--paragraphSmall); 
  color: transparent; 
  margin-top: 2.82px; 
  margin-left: 0; 
  align-self: flex-start; 
  height: 1em; 
  transition: color 0.2s ease-in-out; 

  &.visible {
    color: var(--error1); 
  }
`;



