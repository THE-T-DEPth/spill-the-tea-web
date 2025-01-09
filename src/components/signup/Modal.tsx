import React from 'react';
import * as S from '../../styles/Signup/ModalStyle';
import DeleteIcon from '../../assets/Icons/Delete.svg'; // 상단의 X 아이콘 경로

interface ModalProps {
	message: string;
	onClose: () => void; // 모달 닫기 함수
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
	return (
		<S.Overlay>
			<S.ModalBox>
				<S.CloseButton onClick={onClose}>
					<img src={DeleteIcon} alt="Close" />
				</S.CloseButton>
				<S.Message>{message}</S.Message>
				<S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
			</S.ModalBox>
		</S.Overlay>
	);
};

export default Modal;
