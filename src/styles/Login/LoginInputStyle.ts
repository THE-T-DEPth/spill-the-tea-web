import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-start; 
  position: relative;
  flex-direction: column; 
  width: 100%;
  
`;

export const Input = styled.input`
  width: 374px;
  height: 45px;
  border: none; 
  border-radius: 8px;
  background-color: var(--InputBack);
  padding: 10px 13px 11px 13px; 
  font: var(--labelMedium);
  color: var(--Sub5);
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.5);
  }
`;



