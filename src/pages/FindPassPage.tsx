import React, { useState } from "react";
import * as S from "../styles/Login/FindPassPageStyle";
import LoginInput from "../components/login/LoginInput";
import { useNavigate } from "react-router-dom";
import { getPassword } from "../api/login/findPass";
import useNSMediaQuery from "../hooks/useNSMediaQuery";
const FindPassPage: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const navigate = useNavigate();
	const { isMobile } = useNSMediaQuery();


	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setEmailError("");
	};



	const handleFindPassword = async () => {
		if (!email) {
			setEmailError("이메일을 입력하세요.");
			return;
		}

		try {
			const code = await getPassword({ email });

			if (code) {
				navigate("/certification-number", { state: { email, code } });
			} else {
				setEmailError("해당 이메일이 존재하지 않습니다.");
			}
		} catch (error) {
			console.error("Error verifying email:", error);
			setEmailError("서버와 연결할 수 없습니다. 나중에 다시 시도해주세요.");
		}
	};


	return (
		<>

			<S.Wrapper>
				<S.Title>{isMobile ? "Spill the tea : 썰푸는 장소" : "비밀번호 찾기"}</S.Title>
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
