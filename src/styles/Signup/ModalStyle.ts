import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalBox = styled.div`
  width: 566px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const Message = styled.p`
  font: var(--headingLarge);
  color: var(--HeadLine);
  margin-bottom: 52px;
  margin-top: 86px;
`;

export const ConfirmButton = styled.button`
  width: 171px;
  height: 44px;
  padding-top: 5px;
  margin-bottom: 45px;
  background-color: var(--Green2);
  color: white;
  border: none;
  border-radius: 20px;
  font: var(--labelLarge);
  cursor: pointer;
`;
