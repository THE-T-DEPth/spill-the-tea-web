import React, { useEffect } from 'react';
import * as S from '../../styles/myPage/DeleteAccountModalStyle';
import CloseIcon from '../../assets/Images/closeIcon.svg';
import { ModalProps } from '../../types/myPage/ModalProps';

const DeleteAccountModal: React.FC<ModalProps> = ({
  onClose,
  message,
  onConfirm,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <S.Container>
      <S.ModalContainer>
        <S.CloseIcon onClick={onClose}>
          <img src={CloseIcon} alt='close icon' />
        </S.CloseIcon>
        <S.ModalContent>
          <S.ModalMessage>{message}</S.ModalMessage>
          <S.ButtonContainer>
            <S.CancelButton onClick={onClose}>취소</S.CancelButton>
            <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Container>
  );
};

export default DeleteAccountModal;
