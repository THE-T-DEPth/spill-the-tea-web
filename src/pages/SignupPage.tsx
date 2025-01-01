import React, { useState } from 'react';
import SignupInputBox from "../components/signup/SignupInputBox";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import * as S from '../styles/Signup/SignupPageStyle';
import { useNavigate } from 'react-router-dom';

// Dummy API for nickname check
const checkNicknameAvailability = (nickname: string): Promise<'valid' | 'invalid'> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(nickname === 'existingNickname' ? 'invalid' : 'valid');
		}, 500);
	});
};

const SignupPage: React.FC = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [nicknameStatus, setNicknameStatus] = useState<'valid' | 'invalid' | null>(null);
	const [isPasswordMatch, setIsPasswordMatch] = useState(true);

	const navigate = useNavigate();

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;

		// 입력값의 길이가 8자를 초과하지 않는 경우에만 업데이트
		if (input.length <= 8) {
			setName(input);
		}
	};

	const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		const isValid = /^[a-zA-Z0-9가-힣]{0,8}$/.test(input);
		if (isValid) {
			setNickname(input);
		}
	};

	const handleNicknameCheck = async () => {
		if (nickname.length < 2 || nickname.length > 8) {
			setNicknameStatus('invalid');
			return;
		}
		const status = await checkNicknameAvailability(nickname); // Call dummy API
		setNicknameStatus(status);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
		setIsPasswordMatch(password === e.target.value);
	};

	const handleSignup = () => {
		if (!isPasswordMatch || nicknameStatus !== 'valid' || !name || !nickname || !password || !confirmPassword) {
			alert('모든 입력 필드를 올바르게 작성해주세요.');
			return;
		}
		navigate('/signupdone', { state: { nickname } });
	};

	const isFormValid = name.length >= 2 && nicknameStatus === 'valid' && isPasswordMatch && password.length >= 8;

	return (
		<>
			<Header />
			<NavBar />
			<S.Wrapper>
				<S.Header>
					<S.Title>회원가입</S.Title>
				</S.Header>
				<S.SignupBox>
					<S.SignupInputWrapper>
						<S.Label>회원가입</S.Label>
						<S.NameInputWrapper>
							<SignupInputBox
								placeholder="이름을 입력하세요."
								type="text"
								value={name}
								onChange={handleNameChange}
							/>
						</S.NameInputWrapper>
						<S.NickNameInputWrapper>
							<SignupInputBox
								placeholder="닉네임을 입력하세요."
								type="text"
								value={nickname}
								onChange={handleNicknameChange}
								button={<div onClick={handleNicknameCheck}>중복체크</div>}
							/>
							<S.NicknameStatusText status={nicknameStatus}>
								{nicknameStatus === 'valid'
									? '해당 닉네임을 이용 가능합니다.'
									: nicknameStatus === 'invalid'
										? '이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해주세요.'
										: ''}
							</S.NicknameStatusText>
						</S.NickNameInputWrapper>
						<S.SignInputWrapper>
							<SignupInputBox
								placeholder="비밀번호를 입력하세요."
								type="password"
								value={password}
								onChange={handlePasswordChange}
							/>
						</S.SignInputWrapper>
						<S.PasswordGuideline>
							비밀번호는 8~20자 이내여야 하며, 대소문자, 숫자, 특수문자를 <br />
							각각 최소 1개씩 포함해야 합니다. 연속되거나 반복되는 문자는 사용할 수 없습니다.
						</S.PasswordGuideline>
						<S.InputWrapper>
							<SignupInputBox
								placeholder="비밀번호를 다시 한번 입력하세요."
								type="password"
								value={confirmPassword}
								onChange={handleConfirmPasswordChange}
							/>
							<S.ErrorMessage className={!isPasswordMatch ? 'visible' : ''}>
								비밀번호가 동일하지 않습니다. 다시 확인해주세요.
							</S.ErrorMessage>
						</S.InputWrapper>
						<S.SubmitButton onClick={handleSignup} disabled={!isFormValid}>
							회원가입
						</S.SubmitButton>
					</S.SignupInputWrapper>
				</S.SignupBox>
			</S.Wrapper>
			<Footer />
		</>
	);
};

export default SignupPage;
