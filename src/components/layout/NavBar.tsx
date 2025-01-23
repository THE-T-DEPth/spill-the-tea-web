import React from 'react';
import * as S from '../../styles/Layout/NavBarStyle';

const NavBar = () => {
	return (
		<S.Container>
			<S.Nav>
				<S.NavLinks to='/'>찻집 대문</S.NavLinks>
				<S.NavLinks to='/ssulpage'>메뉴판</S.NavLinks>
				<S.NavLinks to='/likedssuls'>티컬렉션</S.NavLinks>
			</S.Nav>
		</S.Container>
	);
};

export default NavBar;
