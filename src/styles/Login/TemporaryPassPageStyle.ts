import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  
`;

export const Title = styled.h1`
  font: var(--headingXXL);
  color: var(--Black);
  margin-top: 150px;
`;

export const Subtitle = styled.p`
  font: var(--labelLarge);
  color: var(--Black);
  margin-top: 6px;
  margin-bottom: 41px;
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
`;

export const passwordWrapper = styled.div`
margin-top: 63px;
`;

export const Label = styled.p`
  font: var(--headingLarge);
  color: var(--Black);
  margin-bottom: 10px;
`;

export const EmailLabel = styled.p`
  font: var(--labelMedium);
  color: var(--EarlGrey);
  margin-bottom: 4px;
`;

export const Notification = styled.p`
  font: var(--labelMini);
  color:var(--LightGrey);
  margin-bottom: 31px;

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 78.18px;

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
`;
