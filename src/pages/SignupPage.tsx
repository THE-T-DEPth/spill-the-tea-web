import React, { useState } from 'react';
import SignupInputBox from '../components/signup/SignupInputBox';
import * as S from '../styles/Signup/SignupPageStyle';
import { useNavigate, useLocation } from 'react-router-dom';
import { getcheckNicknameAvailability, postRegisterUser } from '../api/signUp/signUpPage';

const SignupPage: React.FC = () => {
	// 이메일을 이전 페이지에서 전달받음
	const location = useLocation();
	const email = location.state?.email; // 전달받은 이메일
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [nicknameStatus, setNicknameStatus] = useState<'valid' | 'invalid' | null>(null);
	const [isPasswordMatch, setIsPasswordMatch] = useState(true);

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
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

	// 닉네임 중복 체크 로직
	const handleNicknameCheck = async () => {
		try {
			if (nickname.length < 2 || nickname.length > 8) {
				setNicknameStatus('invalid');
				return;
			}

			const response = await getcheckNicknameAvailability(nickname);
			if (response.success && response.data.availability) {
				setNicknameStatus('valid');
			} else {
				setNicknameStatus('invalid');
			}
		} catch (error) {
			console.error('닉네임 중복 체크 중 오류 발생:', error);
		}
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
		setIsPasswordMatch(password === e.target.value);
	};

	const handleSignup = async () => {
		try {
			// 이메일이 없으면 회원가입 불가
			if (!email) {
				alert('이메일 정보가 누락되었습니다. 인증 페이지로 돌아가세요.');
				navigate('/signup-email'); // 이메일 인증 페이지로 리디렉션
				return;
			}

			// 입력 값 유효성 검증
			if (!name || !nickname || !password || password !== confirmPassword) {
				alert('모든 입력 필드를 올바르게 작성해주세요.');
				return;
			}

			// 회원가입 API 호출
			const response = await postRegisterUser(email, password, name, nickname);

			if (response.success) {
				// 회원가입 성공 후 동작
				navigate('/signupdone');
			} else {
				alert(response?.data?.message || '회원가입에 실패했습니다.');
			}
		} catch (error) {
			console.error('회원가입 중 오류 발생:', error);
			alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
		}
	};

	const isFormValid = name.length >= 2 && nicknameStatus === 'valid' && isPasswordMatch && password.length >= 8;

	return (
		<>
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
		</>
	);
};

export default SignupPage;
