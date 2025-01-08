import React, { useState } from "react";
import * as S from "../styles/Login/CertificationNumPageStyle";
import LoginInput from "../components/login/LoginInput";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyCertificationNumber, fetchTemporaryPassword } from "../api/DummyApi";

const CertificationNumPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const email = location.state?.email || "";
	const [certificationNumber, setCertificationNumber] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [showError, setShowError] = useState(false);

	const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificationNumber(e.target.value);
		setErrorMessage("");
		setShowError(false);
	};

	const handleCertificationSubmit = async () => {
		!certificationNumber &&
			(setErrorMessage("인증번호를 입력하세요."), setShowError(true));

		certificationNumber &&
			(await verifyCertificationNumber(email, certificationNumber)
				.then(async (isValid) => {
					isValid
						? fetchTemporaryPassword(email).then((temporaryPassword) =>
							navigate("/temporary-password", {
								state: { email, temporaryPassword },
							})
						)
						: (setErrorMessage("인증번호가 올바르지 않습니다. 다시 확인해주세요."),
							setShowError(true));
				})
				.catch((error) => {
					console.error("Error validating certification number:", error);
					setErrorMessage("서버와 연결할 수 없습니다. 나중에 다시 시도해주세요.");
					setShowError(true);
				}));
	};

	return (
		<>

			<S.Wrapper>
				<S.Title>비밀번호 찾기</S.Title>
				<S.Subtitle>"맛있었던 차 메뉴를 까먹었군요 😑"</S.Subtitle>
				<S.PasswordBox>
					<S.passwordWrapper>
						<S.Label>비밀번호 인증하기</S.Label>
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
