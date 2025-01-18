import React from "react";
import * as S from "../styles/Login/TemporaryPassPageStyle";
import { useLocation, useNavigate } from "react-router-dom";


const TemporaryPassPage: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const email = location.state?.email || "";
	const temporaryPassword = location.state?.temporaryPassword || "******";



	const goToLoginPage = () => {
		navigate("/login");
	};

	const goToChangePassPage = () => {
		navigate("/change-password", { state: { email } });
	};

	return (
		<>

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

		</>
	);
};

export default TemporaryPassPage;
