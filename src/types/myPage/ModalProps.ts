export interface ModalProps {
  onClose: () => void; // 닫기 버튼 핸들러
  message: string; // 모달 메시지
  onConfirm?: () => void; // 확인 버튼 핸들러
}
