import React, { useState } from "react";
import * as S from "../styles/Login/FindPassPageStyle";
import LoginInput from "../components/login/LoginInput";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../api/DummyApi";

const FindPassPage: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const navigate = useNavigate();


	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setEmailError("");
	};


	const handleFindPassword = async () => {

		!email && setEmailError("이메일을 입력하세요.");

		// 이메일이 비어 있으면 함수 실행 종료
		if (!email) return;

		try {
			const emailExists = await verifyEmail(email);


			emailExists
				? navigate("/certification-number", { state: { email } })
				: setEmailError("해당 이메일이 존재하지 않습니다.");
		} catch (error) {
			console.error("Error verifying email:", error);

			// 서버 에러 처리
			setEmailError("서버와 연결할 수 없습니다. 나중에 다시 시도해주세요.");
		}
	};


	return (
		<>

			<S.Wrapper>
				<S.Title>비밀번호 찾기</S.Title>
				<S.Subtitle>"맛있었던 차 메뉴를 까먹었군요 😑"</S.Subtitle>
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
						<S.ErrorMessage className={emailError ? "visible" : ""}>
							{emailError}
						</S.ErrorMessage>
					</S.passwordWrapper>
					<S.SubmitButton onClick={handleFindPassword}>확인</S.SubmitButton>
				</S.PasswordBox>
			</S.Wrapper>

		</>
	);
};

export default FindPassPage;
