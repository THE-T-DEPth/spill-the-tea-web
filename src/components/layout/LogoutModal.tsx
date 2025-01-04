import React from "react";
import * as S from "../../styles/Layout/LogoutModalStyle";
import DeleteIcon from "../../assets/Icons/Delete.svg";
import InfoIcon from "../../assets/Icons/Info.svg";

interface LogoutModalProps {
	onConfirm: () => void;
	onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ onConfirm, onCancel }) => {
	return (
		<S.ModalOverlay>
			<S.ModalContainer>
				<S.CloseIcon onClick={onCancel}>
					<img src={DeleteIcon} alt="Close Icon" />
				</S.CloseIcon>
				<S.InfoWrapper>
					<img src={InfoIcon} alt="Info Icon" />
				</S.InfoWrapper>
				<S.Message>스필더티에서 로그아웃 완료!</S.Message>
				<S.ButtonWrapper>
					<S.CancelButton onClick={onCancel}>취소</S.CancelButton>
					<S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
				</S.ButtonWrapper>
			</S.ModalContainer>
		</S.ModalOverlay>
	);
};

export default LogoutModal;
