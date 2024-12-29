import React, { useEffect, useState } from "react";
import * as S from "../styles/Login/TemporaryPassPageStyle";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchTemporaryPassword } from "../api/DummyApi";

const TemporaryPassPage: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const email = location.state?.email || "";
	const [temporaryPassword, setTemporaryPassword] = useState<string>("******");

	useEffect(() => {
		const fetchPassword = async () => {
			const password = await fetchTemporaryPassword(email);
			setTemporaryPassword(password);
		};
		fetchPassword();
	}, [email]);


	const goToLoginPage = () => {
		navigate("/login");
	};

	const goToChangePassPage = () => {
		navigate("/change-password", { state: { email } });
	};

	return (
		<>
			<Header />
			<NavBar />
			<S.Wrapper>
				<S.Title>비밀번호 찾기</S.Title>
				<S.Subtitle>"맛있었던 차 메뉴를 까먹었군요 😑"</S.Subtitle>
				<S.PasswordBox>
					<S.passwordWrapper>
						<S.Label>비밀번호</S.Label>
						<S.EmailLabel>
							{`등록된 임시 비밀번호는 '${temporaryPassword}' 입니다.`}
						</S.EmailLabel>
						<S.Notification>임시 비밀번호를 변경해서 사용해주세요!</S.Notification>
					</S.passwordWrapper>
					<S.ButtonWrapper>
						<S.ChangeButton onClick={goToChangePassPage}>
							비밀번호 변경하기
						</S.ChangeButton>
						<S.ToLoginPageButton onClick={goToLoginPage}>
							로그인 페이지로 이동
						</S.ToLoginPageButton>
					</S.ButtonWrapper>
				</S.PasswordBox>
			</S.Wrapper>
			<Footer />
		</>
	);
};

export default TemporaryPassPage;
