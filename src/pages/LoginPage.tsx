import { useState } from "react";
import * as S from "../styles/Login/LoginPageStyle";
import EyeIcon from "../assets/Icons/Eye.svg";
import EyeOffIcon from "../assets/Icons/EyeOff.svg";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/login/LoginInput";
import useNSMediaQuery from "../hooks/useNSMediaQuery";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const navigate = useNavigate();


	const { isMobile } = useNSMediaQuery();


	const dummyApi = (email: string, password: string): { success: boolean; error?: string } => {
		const validEmail = "user@example.com";
		const validPassword = "password123";

		if (email !== validEmail) {
			return { success: false, error: "email" };
		}
		if (password !== validPassword) {
			return { success: false, error: "password" };
		}
		return { success: true };
	};

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const handleLogin = () => {
		setEmailError("");
		setPasswordError("");

		const response = dummyApi(email, password);

		if (!response.success) {
			if (response.error === "email") {
				setEmailError("존재하지 않는 이메일입니다.");
			}
			if (response.error === "password") {
				setPasswordError("비밀번호가 일치하지 않습니다.");
			}
			return;
		}

		navigate("/");
	};

	const handleFindPassword = () => {
		navigate("/find-password");
	};

	const signupEmail = () => {
		navigate("/signup-email");
	};

	return (
		<S.Wrapper>
			<S.Title>{isMobile ? "Spill the tea : 썰푸는 장소" : "로그인"}</S.Title>
			<S.Subtitle>"우리 찻집 단골손님으로 들어오실건가요?🤤"</S.Subtitle>


			<S.LoginBox>
				<S.LoginInputWrapper>
					<S.Label>로그인</S.Label>
					<LoginInput
						type="text"
						text={email}
						setText={setEmail}
						placeholder="이메일을 입력하세요."
					/>
					<S.ErrorMessage className={emailError ? "visible" : ""}>
						{emailError}
					</S.ErrorMessage>
				</S.LoginInputWrapper>
				<S.PasswordInputWrapper>
					<S.PasswordWrapper>
						<LoginInput
							type={isPasswordVisible ? "text" : "password"}
							text={password}
							setText={setPassword}
							placeholder="비밀번호를 입력하세요."
						/>
						<S.EyeButton onClick={togglePasswordVisibility}>
							<img
								src={isPasswordVisible ? EyeOffIcon : EyeIcon}
								alt="Toggle Password Visibility"
							/>
						</S.EyeButton>
					</S.PasswordWrapper>
					<S.ErrorMessage className={passwordError ? "visible" : ""}>
						{passwordError}
					</S.ErrorMessage>
				</S.PasswordInputWrapper>
				<S.NewInputWrapper>
					<S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
					<S.SignupButton onClick={signupEmail}>회원가입 하기</S.SignupButton>
					<S.ForgotPassword onClick={handleFindPassword}>
						비밀번호 찾기
					</S.ForgotPassword>
				</S.NewInputWrapper>
			</S.LoginBox>
		</S.Wrapper>
	);
};

export default LoginPage;
