import { useState } from "react";
import * as S from "../styles/Login/LoginPageStyle";
import EyeIcon from "../assets/Icons/Eye.svg";
import EyeOffIcon from "../assets/Icons/EyeOff.svg";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../api/login/loginPage";
import LoginInput from "../components/login/LoginInput";
import { AxiosError } from "axios";
import useNSMediaQuery from "../hooks/useNSMediaQuery";

const validateInputs = (email: string, password: string): { valid: boolean; emailError: string; passwordError: string } => {
	let emailError = "";
	let passwordError = "";

	if (!email) {
		emailError = "이메일을 입력해주세요.";
	} else {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			emailError = "유효한 이메일 주소를 입력해주세요.";
		}
	}

	if (!password) {
		passwordError = "비밀번호를 입력해주세요.";
	} else if (password.length < 8) {
		passwordError = "비밀번호는 최소 8자 이상이어야 합니다.";
	}

	return {
		valid: !emailError && !passwordError,
		emailError,
		passwordError,
	};
};

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const navigate = useNavigate();

	const { isMobile } = useNSMediaQuery();
	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const handleLogin = async () => {
		// 초기화
		setEmailError("");
		setPasswordError("");

		// 입력값 검증
		const { valid, emailError, passwordError } = validateInputs(email, password);
		if (!valid) {
			setEmailError(emailError);
			setPasswordError(passwordError);
			return;
		}

		try {

			const data = await postLogin({
				email: email.trim(),
				password: password,
			});

			if (data.success) {
				const { accessToken, refreshToken } = data.data;

				localStorage.setItem("accessToken", accessToken);
				localStorage.setItem("refreshToken", refreshToken);

				navigate("/");
			} else {
				setEmailError("로그인에 실패했습니다. 다시 시도해주세요.");
			}
		} catch (error) {
			if (error instanceof AxiosError && error.response) {
				const errorMessage = error.response.data.message;

				if (errorMessage === "Invalid email") {
					setEmailError("존재하지 않는 이메일입니다.");
				} else if (errorMessage === "Invalid password") {
					setPasswordError("비밀번호가 일치하지 않습니다.");
				} else {
					setEmailError("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
				}
			} else {
				setEmailError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
			}
		}
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
		</S.Wrapper >
	);
};

export default LoginPage;
