import React, { useState } from "react";
import LoginInput from "../components/login/LoginInput"; // LoginInput 컴포넌트 경로
import * as S from "../styles/Login/ChangePassPageStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { putChangePassword } from "../api/login/changePass";

const isValidPassword = (password: string): boolean => {
	const lengthCondition = password.length >= 8 && password.length <= 20;
	const complexityCondition =
		/[A-Z]/.test(password) &&
		/[a-z]/.test(password) &&
		/[0-9]/.test(password) &&
		/[!@#$%^&*]/.test(password);
	const noSequential = !/(?:abc|123|zyx|987|111|aaa|bbb)/i.test(password);
	return lengthCondition && complexityCondition && noSequential;
};

const ChangePassPage: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const email = location.state?.email || "";
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isPasswordMatch, setIsPasswordMatch] = useState(true);
	const [passwordError, setPasswordError] = useState(false);
	const [isSameAsNewPassword, setIsSameAsNewPassword] = useState(false);

	const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setNewPassword(value);
		setPasswordError(!isValidPassword(value));
		setIsSameAsNewPassword(value === confirmPassword);
	};

	const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setConfirmPassword(value);
		setIsPasswordMatch(value === newPassword);
		setIsSameAsNewPassword(value === newPassword);
	};

	const handleChangePassword = async () => {
		if (!isPasswordMatch || passwordError) {
			alert("비밀번호를 다시 확인해주세요.");
			return;
		}

		try {
			const response = await putChangePassword(email, newPassword);

			if (response.success) {
				alert(response.message || "비밀번호가 성공적으로 변경되었습니다.");
				navigate("/login");
			} else {
				alert(response.message || "비밀번호 변경에 실패했습니다.");
			}
		} catch (error) {
			console.error("비밀번호 변경 중 오류 발생:", error);
			alert("서버와 연결할 수 없습니다. 나중에 다시 시도해주세요.");
		}
	};

	return (
		<S.Wrapper>
			<S.Title>비밀번호 변경하기</S.Title>
			<S.PasswordBox>
				<S.FirstInputWrapper>
					<S.ChangeSubtitle>비밀번호 변경하기</S.ChangeSubtitle>
					<LoginInput
						type="password"
						placeholder="새로운 비밀번호를 입력해주세요."
						text={newPassword}
						setText={setNewPassword}
						onChange={handleNewPasswordChange}
					/>
					<S.ErrorMessage className={passwordError ? "visible" : ""}>
						조건에 맞춰 비밀번호를 다시 입력해주세요.
					</S.ErrorMessage>
				</S.FirstInputWrapper>
				<S.SecondInputWrapper>
					<LoginInput
						type="password"
						placeholder="새로운 비밀번호를 다시 입력해주세요."
						text={confirmPassword}
						setText={setConfirmPassword}
						onChange={handleConfirmPasswordChange}
					/>
					<S.ErrorMessage
						className={!isPasswordMatch || isSameAsNewPassword ? "visible" : ""}
						style={{ color: isSameAsNewPassword ? "var(--Green2)" : "var(--error1)" }}
					>
						{isSameAsNewPassword
							? "새로운 비밀번호가 동일합니다."
							: "새로운 비밀번호가 동일하지 않습니다. 다시 입력해주세요."}
					</S.ErrorMessage>
				</S.SecondInputWrapper>
				<S.PasswordGuidelineWrapper>
					<S.PasswordGuidelineTitle>비밀번호 설정 안내</S.PasswordGuidelineTitle>
					<S.PasswordGuidelineText>
						"비밀번호는 8~20자 이내여야 하며, 대소문자, 숫자, 특수문자를<br></br> 각각 최소 1개씩 포함해야 합니다. 연속되거나 반복되는 문자는 사용할 수 없습니다."
					</S.PasswordGuidelineText>
				</S.PasswordGuidelineWrapper>
				<S.Button onClick={handleChangePassword}>확인</S.Button>
			</S.PasswordBox>
		</S.Wrapper>
	);
};

export default ChangePassPage;
