import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import * as S from '../styles/Signup/SignupDonePageStyle';

const SignupDone: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	// 전달받은 닉네임. 없을 경우 기본값으로 '사용자' 설정
	const nickname = location.state?.nickname || '사용자';

	// 메인 페이지로 이동하는 함수
	const handleMoveToMain = () => {
		navigate('/'); // 메인 페이지 경로로 이동
	};

	return (
		<>
			<Header />
			<NavBar />
			<S.Wrapper>
				<S.Content>
					<S.Title>
						<S.Highlight>" {nickname} "</S.Highlight>님 회원가입이 완료되었습니다!<br />
						뜨거운 썰들 마시러 가볼까요?
					</S.Title>
					<S.Button onClick={handleMoveToMain}>찻집 대문으로 이동</S.Button>
				</S.Content>
			</S.Wrapper>
			<Footer />
		</>
	);
};

export default SignupDone;
