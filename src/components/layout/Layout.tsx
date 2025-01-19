import React from 'react';
import * as S from '../../styles/Layout/LayoutStyle';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import { useLocation } from "react-router-dom";
import useNSMediaQuery from "../../hooks/useNSMediaQuery";
import YellowNav from './YellowNav';
import WriteNav from './WriteNav';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const location = useLocation();
	const { isMobile } = useNSMediaQuery();

	const excludedPaths = [
		"/login",
		"/find-password",
		"/certification-number",
		"/temporary-password",
		"/change-password",
		"/signup-email",
		"/signup",
		"/signupdone",
	];

	const shouldHideNavBar = excludedPaths.includes(location.pathname);
	const isWritePage = location.pathname === '/write';

	return (
		<S.Container style={{ minWidth: isWritePage ? '1400px' : '' }}>
			{/* 헤더는 PC에서는 항상 표시 */}
			{(!isMobile || !shouldHideNavBar) && <Header />}

			{/* 네비게이션 바 */}
			{!shouldHideNavBar && location.pathname !== "/mypage" && location.pathname !== "/write" && (
				<NavBar />
			)}

			{isWritePage ? <WriteNav /> : <></>}
			<YellowNav />
			{/* 메인 콘텐츠 */}
			<S.Main>{children}</S.Main>

			{/* 푸터 */}
			<Footer />
		</S.Container>
	);
};

export default Layout;
