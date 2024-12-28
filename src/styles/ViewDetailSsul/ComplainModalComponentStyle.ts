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
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 450px;
  width: 35%;
`;

export const CloseBtn = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: auto;
`;

// 모달 텍스트
export const ModalText = styled.p`
  font: var(--headingLarge);
  text-align: center;
  margin-bottom: 25px;
  margin-top: 20px;
`;

// 버튼 컨테이너
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 25px;
`;

// 취소 버튼
export const CancelButton = styled.button`
  font: var(--labelMedium);
  font-size: 19.5px;
  background: #948f79;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  width: 171px;
  height: 44px;
  margin-left: 15%;
  margin-right: 5%;
`;

// 확인 버튼
export const ConfirmButton = styled.button`
  font: var(--labelMedium);
  font-size: 19.5px;
  background: var(--Green2);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  width: 171px;
  height: 44px;
  margin-left: 5%;
  margin-right: 15%;
`;

// 신고 사유 리스트
export const ReasonList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  gap: 10px;
`;

// 신고 사유 항목
export const Reason = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font: var(--labelLarge);

  input {
    margin: 0;
    cursor: pointer;
  }
`;
