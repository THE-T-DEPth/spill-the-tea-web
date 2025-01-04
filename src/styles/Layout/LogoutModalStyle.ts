import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 566px;
  height: 257px;
  background-color: var(--Sub1);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CloseIcon = styled.div`
  position: absolute;
  margin-right: 18px;
  margin-top: 20.5px;
  right: 10px;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 38px;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Message = styled.p`
  font: var(--headingLarge);
  color: var(--headline);
  margin-bottom: 41px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;

`;

export const CancelButton = styled.button`
  width: 171px;
  height: 44px;
  margin-left: 102px;
  margin-right: 20px;
  background-color:var(--DeleteButton);
  font: var(--labelButton);
  color: var(--Sub1);
  border: none;
  border-radius: 20px;
  padding-top: 4px;
  cursor: pointer;
  
`;

export const ConfirmButton = styled.button`
  width: 171px;
  height: 44px;
  margin-right: 102px;
  background-color:var(--Main2);
  font: var(--labelButton);
  color: var(--Sub1);
  border: none;
  border-radius: 20px;
  padding-top: 4px;
  cursor: pointer;
`;
