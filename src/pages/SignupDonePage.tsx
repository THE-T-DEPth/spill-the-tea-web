import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '../styles/Signup/SignupDonePageStyle';

const SignupDone: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();


	const nickname = location.state?.nickname || '사용자';


	const handleMoveToMain = () => {
		navigate('/');
	};

	return (
		<>
			<S.Content>
				<S.Title>
					<S.Highlight>" {nickname} "</S.Highlight> 님 회원가입이 완료되었습니다!<br />
					뜨거운 썰들 마시러 가볼까요?
				</S.Title>
				<S.Button onClick={handleMoveToMain}>찻집 대문으로 이동</S.Button>
			</S.Content>
		</>
	);
};

export default SignupDone;
