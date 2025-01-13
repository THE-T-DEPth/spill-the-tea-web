import styled from 'styled-components';

// 배경 오버레이
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  touch-action: none; /* 터치 비활성화 */
  overflow: hidden; /* 스크롤 비활성화 */
  pointer-events: none;
`;

// 모달 스타일
export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 60%;
  min-width: 400px;
  height: 60px;

  @media (max-width: 600px) {
    width: 80%;
    min-width: 345px;
    height: 37px;
  }
`;

// 모달 텍스트
export const ModalText = styled.p`
  font: var(--headingLarge);
  text-align: center;
  margin-bottom: 25px;
  margin-top: 20px;

  @media (max-width: 600px) {
    font: var(--headingLarge);
    margin: auto;
    padding-top: 5px;
  }
`;
