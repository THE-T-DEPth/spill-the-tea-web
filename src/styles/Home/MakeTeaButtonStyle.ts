import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:var(--EarlGrey);
  color:var(--Sub1);
  font: var(--headingLarge);
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #5c5945;
  }

  &:active {
    background-color: #3f3d33;
  }
`;

export const Leaf = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
