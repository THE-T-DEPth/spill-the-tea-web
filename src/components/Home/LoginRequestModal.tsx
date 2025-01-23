// components/Home/LoginRequestModal.tsx

import React from "react";
import * as S from "../../styles/Home/LoginRequestModalStyle";
import DeleteIcon from "../../assets/Icons/Delete.svg";
import InfoIcon from "../../assets/Icons/Info.svg";
import { useNavigate } from "react-router-dom";

interface LoginRequestModalProps {
	onCancel: () => void;
}

const LoginRequestModal: React.FC<LoginRequestModalProps> = ({ onCancel }) => {
	const navigate = useNavigate();

	const handleLoginRedirect = () => {
		navigate("/login");
	};

	return (
		<S.ModalOverlay>
			<S.ModalContainer>
				<S.CloseIcon onClick={onCancel}>
					<img src={DeleteIcon} alt="Close Icon" />
				</S.CloseIcon>
				<S.InfoWrapper>
					<img src={InfoIcon} alt="Info Icon" />
				</S.InfoWrapper>
				<S.Message>티 작성하려면 로그인 필수!</S.Message>
				<S.ButtonWrapper>
					<S.CancelButton onClick={handleLoginRedirect}>로그인 페이지로 이동</S.CancelButton>
					<S.ConfirmButton onClick={onCancel}>취소</S.ConfirmButton>
				</S.ButtonWrapper>
			</S.ModalContainer>
		</S.ModalOverlay>
	);
};

export default LoginRequestModal;
