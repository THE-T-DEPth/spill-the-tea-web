import { useLocation } from 'react-router-dom';
import * as S from '../../styles/Layout/NavBarStyle';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const location = useLocation();
  const [page, setPage] = useState(false);

  useEffect(() => {
    const isDetailPage = /^\/viewDetailSsul\/\d+$/.test(location.pathname);
    const isSsulPage = location.pathname === '/ssulpage';
    setPage(isDetailPage || isSsulPage);
  }, [location]);

  return (
    <S.Container>
      <S.Nav>
        <S.NavLinks to='/'>찻집 대문</S.NavLinks>
        <S.NavLinks to='/ssulpage' className={page ? 'active' : undefined}>
          메뉴판
        </S.NavLinks>
        <S.NavLinks to='/likedssuls'>티컬렉션</S.NavLinks>
      </S.Nav>
    </S.Container>
  );
};

export default NavBar;
