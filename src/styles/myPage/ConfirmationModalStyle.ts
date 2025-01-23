import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    width: 345px;
    height: 157px;
    border-radius: 4px;
  }
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
  transition: all 0.3s ease-in-out;
  img {
    width: 11.9px;
    height: 11.9px;
  }
  ${isMobile} {
    width: 14.66px;
    height: 14.66px;
    margin: 8.05px 7.51px 18.38px 322.83px;

    img {
      width: 7.27px;
      height: 7.27px;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 141px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 51px;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 150px;
    height: 81.9px;
    margin: 0 auto 34px;
  }
`;

export const ModalMessage = styled.p`
  font: var(--mypageTitle);
  margin: 0;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    font: var(--headingSmall);
  }
`;

export const ConfirmButton = styled.button`
  width: 171px;
  height: 44px;
  background: var(--Main2);
  font: var(--modalButton);
  color: var(--primary2);
  border-radius: 20px;
  border: none;
  margin: 67px 47px 0;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 104px;
    height: 27px;
    border-radius: 4px;
    font: var(--labelSmall);
    margin: 37.9px 22.09px 0;
  }
`;
