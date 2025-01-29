import React, { useState } from "react";
import * as S from "../styles/Login/CertificationNumPageStyle";
import LoginInput from "../components/login/LoginInput";
import { useLocation, useNavigate } from "react-router-dom";
import useNSMediaQuery from "../hooks/useNSMediaQuery";
import { postVerify } from "../api/login/certificationNum";

const CertificationNumPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const email = location.state?.email || "";
	const [certificationNumber, setCertificationNumber] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [showError, setShowError] = useState(false);
	const { isMobile } = useNSMediaQuery();

	const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificationNumber(e.target.value);
		setErrorMessage("");
		setShowError(false);
	};


	const handleCertificationSubmit = async () => {
		if (!certificationNumber) {
			setErrorMessage("인증번호를 입력하세요.");
			setShowError(true);
			return;
		}

		try {
			const response = await postVerify(certificationNumber);

			if (response.success) {
				navigate("/temporary-password", {
					state: { email, temporaryPassword: response.tempPassword },
				});
			} else {
				setErrorMessage(response.message || "인증번호가 올바르지 않습니다. 다시 확인해주세요.");
				setShowError(true);
			}
		} catch (error) {
			console.error("Error verifying certification number:", error);
			setErrorMessage("인증번호가 올바르지 않습니다. 다시 확인해주세요.");
			setShowError(true);
		}
	};

	return (
		<>

			<S.Wrapper>
				<S.Title>{isMobile ? "Spill the tea : 썰푸는 장소" : "비밀번호 찾기"}</S.Title>
				<S.Subtitle>"맛있었던 차 메뉴를 까먹었군요 😑"</S.Subtitle>
				<S.PasswordBox>
					<S.passwordWrapper>
						<S.Label>{isMobile ? "인증하기" : "비밀번호 인증하기"}</S.Label>
						<S.EmailLabel>{`"${email}"로 인증번호가 발송되었습니다.`}</S.EmailLabel>
						<LoginInput
							type="password"
							text={certificationNumber}
							setText={setCertificationNumber}
							placeholder="인증번호를 입력하세요."
							onChange={handleCertificationChange}
						/>
						<S.ErrorMessage className={showError ? "visible" : ""}>
							{errorMessage}
						</S.ErrorMessage>
					</S.passwordWrapper>
					<S.SubmitButton onClick={handleCertificationSubmit}>확인</S.SubmitButton>
				</S.PasswordBox>
			</S.Wrapper>

		</>
	);
};

export default CertificationNumPage;
