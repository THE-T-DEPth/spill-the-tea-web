import styled from "styled-components";

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
  margin-top: 228px;
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
  margin-bottom: 211px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 55px;
`;

export const passwordWrapper = styled.div`
  margin-top: 55px;
`;

export const Label = styled.label`
  font: var(--loginSmall);
  color: var(--Sub5);
  display: block;
  
`;

export const EmailLabel = styled.p`
  font: var(--headingSmall);
  color: var(--Black);
  margin-top: 5px;
  margin-bottom: 12px;
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

`;

export const ErrorMessage = styled.p`
  font: var(--paragraphSmall);
  color: transparent;
  margin-top: 2px;
  align-self: flex-start;
  height: 1em;
  transition: color 0.2s;

  &.visible {
    color: var(--error1);
  }
`;
