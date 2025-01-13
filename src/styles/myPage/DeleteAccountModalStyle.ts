import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
  pointer-events: all;
`;

export const ModalContainer = styled.div`
  width: 566px;
  height: 257px;
  top: 384px;
  left: 437px;
  background: var(--primary2);
  z-index: 10;
  box-shadow: 0px 8px 30px rgba(18, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CloseIcon = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 18px 27px 524px;
  border: none;
  background: var(--primary2);
  cursor: pointer;
  img {
    width: 11.9px;
    height: 11.9px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 141px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 51px;
`;

export const ModalMessage = styled.p`
  font: var(--mypageTitle);
  margin: 0;
`;

export const ButtonContainer = styled.div`
  width: 401px;
  height: 44px;
  display: flex;
  gap: 59px;
  margin: 57px auto 0;
`;

export const CancelButton = styled.button`
  width: 171px;
  height: 44px;
  background: var(--Button);
  font: var(--modalButton);
  color: var(--primary2);
  border-radius: 20px;
  border: none;
`;

export const ConfirmButton = styled.button`
  width: 171px;
  height: 44px;
  background: var(--Main2);
  font: var(--modalButton);
  color: var(--primary2);
  border-radius: 20px;
  border: none;
`;
