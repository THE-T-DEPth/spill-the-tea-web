import React from 'react';
import * as S from '../../styles/Layout/LayoutStyle';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isWritePage = location.pathname === '/write';

  return (
    <S.Container style={{ minWidth: isWritePage ? '1400px' : '' }}>
      <Header />
      {/* 네비게이션 바 */}
      {location.pathname !== '/login' &&
        location.pathname !== '/find-password' &&
        location.pathname !== '/certification-number' &&
        location.pathname !== '/signup-email' &&
        location.pathname !== '/signup' &&
        location.pathname !== '/signupdone' &&
        location.pathname !== '/mypage' && <NavBar />}

      {/* 메인 콘텐츠 */}
      <S.Main>{children}</S.Main>

      {/* 푸터 */}
      <Footer />
    </S.Container>
  );
};

export default Layout;
