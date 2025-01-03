import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:var(--EarlGrey); /* 기본 색상 */
  color: var(--Sub1);
  font: var(--headingLarge);
  width: 213px;
  height: 84px;
  padding: 12px 24px;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative; 
  overflow: visible; 

  /* Gradient Stroke */
  border: 2px solid transparent;
  background-image: linear-gradient(#55533e, #55533e), /* 기본 배경 */
    linear-gradient(141.28deg, #86846a 0%, #312f20 100%); /* Stroke Gradient */
  background-origin: border-box;
  background-clip: padding-box, border-box;

  &:active {
    background-color: #3f3d33;
  }
`;

export const Leaf = styled.img`
  width: 40px;
  height: 35px;
  position: absolute; 
  top: 0px; 
  left: 30px;
  transform: translate(-50%, -50%); 
`;
