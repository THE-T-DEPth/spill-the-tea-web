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
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const LoginInputWrapper = styled.div`
  width: 374px;
  margin-top: 55px; /* 위 간격 */
`;

export const PasswordInputWrapper = styled.div`
  width: 374px;
  margin-top: 55px; /* 위 간격 */
`;

export const NewInputWrapper = styled.div`
  width: 374px;
 height: 138px;
  margin-top: 50px; /* LoginInputWrapper와의 간격 */
  margin-bottom: 56px; /* 아래 간격 */
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
  border: 1px solid #7AC87D;
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
  font: var(--paragraphSmall); /* 폰트 변경 */
  color: red;
  margin-top: 2px; /* 박스와의 간격 설정 */
  margin-left: 0; /* 왼쪽 여백 제거 */
  align-self: flex-start; /* 에러 메시지가 입력 박스 바로 아래에 위치 */
  
`;


