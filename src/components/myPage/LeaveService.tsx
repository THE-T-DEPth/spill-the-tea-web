import React, { useState } from "react";
import * as S from "../../styles/myPage/LeaveServiceStyle";
import LogoutModal from "./ConfirmationModal";
import DeleteAccountModal from "../../components/myPage/DeleteAccountModal";
import ConfirmationModal from "./ConfirmationModal";

const LeaveService = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // 로그아웃 모달
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false); // 계정 삭제 모달
  const [isFinalConfirmationModalOpen, setIsFinalConfirmationModalOpen] =
    useState(false); // 최종 확인 모달
  const [modalMessage, setModalMessage] = useState("");

  const handleLogout = () => {
    setModalMessage("스필더티에서 로그아웃 완료!");
    setIsLogoutModalOpen(true);
  };

  const handleAccountDeletion = () => {
    setModalMessage("정말로 Spill the tea를 탈퇴하신다고요?");
    setIsDeleteAccountModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleCloseDeleteAccountModal = () => {
    setIsDeleteAccountModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
  };

  const handleConfirmDeleteAccount = () => {
    setIsDeleteAccountModalOpen(false);
    setModalMessage("탈퇴가 완료되었습니다.");
    setIsFinalConfirmationModalOpen(true);
  };

  const handleCloseFinalConfirmationModal = () => {
    setIsFinalConfirmationModalOpen(false);
  };

  const handleFinalConfirm = () => {
    setIsFinalConfirmationModalOpen(false);
  };

  return (
    <S.Container>
      <S.Title>정말로 서비스를 떠나시겠습니까?</S.Title>
      <S.ButtonContainer>
        <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
        {isLogoutModalOpen && (
          <LogoutModal
            onClose={handleCloseLogoutModal}
            message={modalMessage}
            onConfirm={handleConfirmLogout}
          />
        )}

        <S.DeleteAccountButton onClick={handleAccountDeletion}>
          회원 탈퇴
        </S.DeleteAccountButton>
        {isDeleteAccountModalOpen && (
          <DeleteAccountModal
            onClose={handleCloseDeleteAccountModal}
            message={modalMessage}
            onConfirm={handleConfirmDeleteAccount}
          />
        )}

        {isFinalConfirmationModalOpen && (
          <ConfirmationModal
            onClose={handleCloseFinalConfirmationModal}
            message={modalMessage}
            onConfirm={handleFinalConfirm}
          />
        )}
      </S.ButtonContainer>
    </S.Container>
  );
};

export default LeaveService;
