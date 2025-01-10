import React, { useState } from "react";
import * as S from "../styles/Login/CertificationNumPageStyle";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import LoginInput from "../components/login/LoginInput";
import { useNavigate } from "react-router-dom";

const CertificationNumPage = () => {
	const [certificationNumber, setCertificationNumber] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [showError, setShowError] = useState(false);
	const navigate = useNavigate();


	const correctCertificationNumber = "123456";

	// 입력 값 변경 핸들러
	const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCertificationNumber(e.target.value);
		setErrorMessage("");
		setShowError(false);
	};

	// 인증번호 확인 및 페이지 이동 핸들러
	const handleCertificationSubmit = () => {
		if (!certificationNumber) {
			setErrorMessage("인증번호를 입력하세요.");
			setShowError(true);
			return;
		}

		if (certificationNumber !== correctCertificationNumber) {
			setErrorMessage("인증번호가 일치하지 않습니다, 다시 확인해주세요.");
			setShowError(true);
			return;
		}


		navigate("/next-page");
	};

	return (
		<>
			<Header />
			<NavBar />
			<S.Wrapper>
				<S.Title>비밀번호 찾기</S.Title>
				<S.Subtitle>"맛있었던 차 메뉴를 까먹었군요 😊"</S.Subtitle>
				<S.PasswordBox>
					<S.passwordWrapper>
						<S.Label>인증하기</S.Label>
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
			<Footer />
		</>
	);
};

export default CertificationNumPage;
