import React from "react";
import * as S from "../../styles/myPage/ConfirmationModalStyle";
import CloseIcon from "../../assets/image/closeIcon.svg";

const ConfirmationModal = ({ onClose, message, onConfirm }) => {
  return (
    <S.ModalContainer>
      {/* 닫기 아이콘 */}
      <S.CloseIcon onClick={onClose}>
        <img src={CloseIcon} alt="close icon" />
      </S.CloseIcon>

      {/* 모달 내용 */}
      <S.ModalContent>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default ConfirmationModal;
