import React from "react";
import * as S from "../../styles/Layout/LayoutStyle";

import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<S.Container>
			{/* 네비게이션 바 */}
			<NavBar />

			{/* 메인 콘텐츠 */}
			<S.Main>{children}</S.Main>

			{/* 푸터 */}
			<Footer />
		</S.Container>
	);
};

export default Layout;