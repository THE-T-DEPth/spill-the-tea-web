import React, { useEffect } from "react";
import * as S from "../../styles/myPage/ConfirmationModalStyle";
import CloseIcon from "../../assets/images/closeIcon.svg";
import { ModalProps } from "../../types/myPage/ModalProps";

const ConfirmationModal: React.FC<ModalProps> = ({
  onClose,
  message,
  onConfirm,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <S.Container>
      <S.ModalContainer>
        <S.CloseIcon onClick={onClose}>
          <img src={CloseIcon} alt="close icon" />
        </S.CloseIcon>
        <S.ModalContent>
          <S.ModalMessage>{message}</S.ModalMessage>
          <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Container>
  );
};

export default ConfirmationModal;
