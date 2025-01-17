import React, { useState, useEffect } from 'react';
import SignupInputBox from "../components/signup/SignupInputBox";
import Modal from "../components/signup/Modal";
import * as S from '../styles/Signup/SignupEmailPageStyle';
import { useNavigate } from 'react-router-dom';
import { getCheckEmailAvailability, getVerifyEmailCode, getVerificationCode } from '../api/signUp/signUpEmail';

const SignupEmailPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [verificationCode, setVerificationCode] = useState('');
	const [emailStatus, setEmailStatus] = useState<'valid' | 'invalid' | null>(null);
	const [isVerified, setIsVerified] = useState(false);
	const [timer, setTimer] = useState(300);
	const [isTimerActive, setIsTimerActive] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	// 이메일 중복 체크 로직
	const handleEmailCheck = async () => {
		try {
			const result = await getCheckEmailAvailability(email);
			if (result.success && result.data.availability) {
				setEmailStatus('valid');
			} else {
				setEmailStatus('invalid');
			}
		} catch (error) {
			console.error('이메일 중복 체크 오류:', error);
			alert('이메일 확인 중 오류가 발생했습니다. 다시 시도해주세요.');
		}
	};
	//인증번호 전송
	const handleSendVerificationCode = async () => {
		try {
			if (!email) {
				alert('이메일을 입력해주세요.');
				return;
			}
			const result = await getVerificationCode(email);
			alert('인증번호가 이메일로 전송되었습니다.');
			console.log('서버 응답:', result);
			setIsTimerActive(true);
			setTimer(300);
		} catch (error) {
			console.error('인증번호 전송 실패:', error);
			alert('인증번호 전송에 실패했습니다. 다시 시도해주세요.');
		}
	};


	// 인증번호 확인 로직
	const handleCodeVerify = async () => {
		try {
			const result = await getVerifyEmailCode(verificationCode);
			if (result.success) {
				alert(result.data.message);
				setIsVerified(true);
			} else {
				setShowModal(true);
			}
		} catch (error) {
			console.error('인증번호 확인 중 오류 발생:', error);
			setShowModal(true);
		}
	};
	const handleNext = () => {
		if (isVerified) {
			navigate('/signup', { state: { email } });
		} else {
			alert('인증을 완료해주세요.');
		}
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isTimerActive && timer > 0) {
			interval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);
		} else if (timer === 0) {
			setIsTimerActive(false);
		}
		return () => clearInterval(interval);
	}, [isTimerActive, timer]);


	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	};

	return (
		<>
			<S.Wrapper>
				<S.Header>
					<S.Title>회원가입</S.Title>
					<S.Subtitle>"우리집 차 맛있어요 얼른 들어오세요~😊"</S.Subtitle>
				</S.Header>

				<S.SignupBox>
					<S.SignupInputWrapper>
						<S.Label>회원가입</S.Label>
						<S.InputWrapper>
							<SignupInputBox
								placeholder="이메일을 입력하세요."
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								button={<div onClick={handleEmailCheck}>중복체크</div>}
							/>
							<S.EmailStatusText status={emailStatus}>
								{emailStatus === 'valid'
									? '이메일 사용이 가능합니다.'
									: emailStatus === 'invalid'
										? '이미 가입된 이메일이 존재합니다. 다른 이메일을 입력해주세요.'
										: ''}
							</S.EmailStatusText>
						</S.InputWrapper>


						<S.InputWrapper>
							<S.CustomButtonUp onClick={handleSendVerificationCode}>
								인증번호 전송하기
							</S.CustomButtonUp>
						</S.InputWrapper>

						<S.TypeInputWrapper>
							<SignupInputBox
								placeholder="인증번호를 입력하세요."
								type="text"
								value={verificationCode}
								onChange={(e) => setVerificationCode(e.target.value)}
								button={<div onClick={handleCodeVerify}>확인</div>}
							/>
							<S.TimerText>{isTimerActive ? formatTime(timer) : '타이머 종료'}</S.TimerText>
						</S.TypeInputWrapper>


						<S.InputWrapper>
							<S.CustomButton onClick={handleNext}>다음</S.CustomButton>
						</S.InputWrapper>
					</S.SignupInputWrapper>
				</S.SignupBox>
			</S.Wrapper>


			{showModal && (
				<Modal
					message="인증번호가 동일하지 않습니다. 다시 확인해주세요."
					onClose={handleCloseModal}
				/>
			)}
		</>
	);
};

export default SignupEmailPage;
