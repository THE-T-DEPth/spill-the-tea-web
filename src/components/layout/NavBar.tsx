import React, { useState, useRef, useEffect } from "react";
import * as S from "../../styles/Layout/NavBarStyle";
import TeaCupIcon from "../../assets/Icons/TeaCup2.svg";
import SearchIcon from "../../assets/Icons/Search.svg";
import MyIcon from "../../assets/Icons/My.svg";
import ClockIcon from "../../assets/Icons/Clock.svg";
import { TSearchHistoryType } from '../../types/layout/NavBarType';

const NavBar = () => {
	const [searchHistory, setSearchHistory] = useState<TSearchHistoryType>([]);
	const [isHistoryVisible, setIsHistoryVisible] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const searchBarRef = useRef<HTMLDivElement>(null);

	// 클릭 이벤트 핸들러
	const handleClickOutside = (event: MouseEvent) => {
		if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
			setIsHistoryVisible(false);
		}
	};

	// 외부 클릭 감지
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// 검색 기록에 입력 추가
	const handleSearchSubmit = () => {
		if (searchInput.trim() !== "") {
			setSearchHistory((prev) => [searchInput, ...prev].slice(0, 4));
			setSearchInput("");
		}
	};

	return (
		<S.Container>
			{/* 찻잔 아이콘과 Spill The Tea 문구 */}
			<S.LeftSection onClick={() => window.location.reload()}>
				<S.IconWrapper>
					<img src={TeaCupIcon} alt="Tea Cup Icon" />
				</S.IconWrapper>
				<S.Title>Spill The Tea : 썰푸는 장소</S.Title>
			</S.LeftSection>

			{/* 네비게이션 링크 */}
			<S.Nav>
				<S.NavLinks to="/">찻집 대문</S.NavLinks>
				<S.NavLinks to="/menu">메뉴판</S.NavLinks>
				<S.NavLinks to="/collection">티컬렉션</S.NavLinks>
			</S.Nav>

			{/* 검색 바, My 아이콘, 로그아웃 버튼 */}
			<S.RightSection>
				<S.SearchBar ref={searchBarRef} onClick={() => setIsHistoryVisible(true)}>
					<input
						type="text"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="원하는 썰을 제목 검색으로 찾아보세요!"
						onKeyPress={(e) => {
							if (e.key === "Enter") handleSearchSubmit();
						}}
					/>
					<S.SearchIconWrapper onClick={handleSearchSubmit}>
						<img src={SearchIcon} alt="Search Icon" />
					</S.SearchIconWrapper>
				</S.SearchBar>


				{/* 검색 기록 표시 */}
				{isHistoryVisible && (
					<S.SearchHistory>
						{searchHistory.map((item, index) => (
							<S.SearchHistoryItem key={index}>
								<img src={ClockIcon} alt="Clock Icon" />
								<span>{item}</span>
							</S.SearchHistoryItem>
						))}
					</S.SearchHistory>
				)}

				<S.MyIconWrapper>
					<img src={MyIcon} alt="My Icon" />
				</S.MyIconWrapper>
				<S.LogoutButton>로그아웃</S.LogoutButton>
			</S.RightSection>
		</S.Container>
	);
};

export default NavBar;
