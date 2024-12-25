import React from "react";
import * as S from "../../styles/myPage/DeleteAccountModalStyle";
import CloseIcon from "../../assets/image/closeIcon.svg";

const DeleteAccountModal = ({ onClose, message, onConfirm }) => {
  return (
    <S.ModalContainer>
      <S.CloseIcon onClick={onClose}>
        <img src={CloseIcon} alt="close icon" />
      </S.CloseIcon>
      <S.ModalContent>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default DeleteAccountModal;
