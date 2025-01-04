import React, { useState } from "react";
import * as S from "../styles/Login/FindPassPageStyle";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import LoginInput from "../components/login/LoginInput";
import { useNavigate } from "react-router-dom";

const FindPassPage = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [showError, setShowError] = useState(false); // 에러 메시지 표시 여부
	const navigate = useNavigate();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setEmailError(""); // 에러 메시지 초기화
		setShowError(false); // 에러 표시 초기화
	};

	const handleFindPassword = () => {
		if (!email) {
			setEmailError("이메일을 입력하세요.");
			setShowError(true);
			return;
		}

		if (email !== "user@example.com") {
			setEmailError("해당 이메일이 존재하지 않습니다.");
			setShowError(true);
			return;
		}

		navigate("/certification-number");
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
						<S.Label>비밀번호 찾기</S.Label>
						<LoginInput
							type="text"
							text={email}
							setText={setEmail}
							placeholder="이메일을 입력하세요."
							onChange={handleEmailChange}
						/>
						<S.ErrorMessage className={showError ? "visible" : ""}>
							{emailError}
						</S.ErrorMessage>
					</S.passwordWrapper>
					<S.SubmitButton onClick={handleFindPassword}>확인</S.SubmitButton>
				</S.PasswordBox>
			</S.Wrapper>
			<Footer />
		</>
	);
};

export default FindPassPage;
