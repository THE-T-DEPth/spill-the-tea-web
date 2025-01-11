import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/Layout/HeaderStyle";
import TeaCupIcon from "../../assets/Icons/TeaCup2.svg";
import SearchIcon from "../../assets/Icons/Search.svg";
import MyIcon from "../../assets/Icons/My.svg";
import ClockIcon from "../../assets/Icons/Clock.svg";
import LogoutModal from "./LogoutModal";
import { TSearchHistoryType } from "../../types/layout/NavBarType";
import useNSMediaQuery from "../../hooks/useNSMediaQuery";

const Header = () => {
	const [searchHistory, setSearchHistory] = useState<TSearchHistoryType>([]);
	const [isHistoryVisible, setIsHistoryVisible] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isSearchActive, setIsSearchActive] = useState(false); // 모바일에서 SearchBar 활성화 상태
	const searchBarRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();
	const { isMobile } = useNSMediaQuery();

	// 외부 클릭 감지
	const handleClickOutside = (event: MouseEvent) => {
		searchBarRef.current &&
			!searchBarRef.current.contains(event.target as Node) &&
			setIsHistoryVisible(false);
		setIsSearchActive(false);
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSearchSubmit = () => {
		if (searchInput.trim()) {
			setSearchHistory((prev) => [searchInput, ...prev].slice(0, 4));
			setSearchInput("");
			setIsHistoryVisible(false);
		}
	};
	const handleSearchHistoryClick = (item: string) => {
		setSearchInput(item);
		setIsHistoryVisible(false);
	};


	const handleLogoutClick = () => {
		setIsModalVisible(true);
	};

	const handleLogoutConfirm = () => {
		setIsLoggedIn(false);
		setIsModalVisible(false);
	};

	const handleLogoutCancel = () => {
		setIsModalVisible(false);
	};

	const handleLoginClick = () => {
		navigate("/login");
	};

	const handleSearchIconClick = () => {
		if (isMobile) {
			setIsSearchActive((prev) => !prev);
		}
	};

	return (
		<S.Container>
			<S.LeftSection onClick={() => window.location.reload()}>
				<S.IconWrapper>
					<img src={TeaCupIcon} alt="Tea Cup Icon" />
				</S.IconWrapper>



				{!isMobile || !isSearchActive ? (
					<S.Title>Spill The Tea : 썰푸는 장소</S.Title>
				) : null}
			</S.LeftSection>

			<S.RightSection>
				{isMobile && !isSearchActive ? (
					<S.SearchIconWrapper onClick={handleSearchIconClick}>
						<img src={SearchIcon} alt="Search Icon" />
					</S.SearchIconWrapper>
				) : (
					<S.SearchBar ref={searchBarRef} onClick={() => setIsHistoryVisible(true)}>
						<input
							type="text"
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							placeholder="원하는 썰을 제목 검색으로 찾아보세요!"
							onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit()}
						/>
						<S.SearchIconWrapper onClick={handleSearchSubmit}>
							<img src={SearchIcon} alt="Search Icon" />
						</S.SearchIconWrapper>
					</S.SearchBar>
				)}

				{isHistoryVisible && searchHistory.length > 0 && (
					<S.SearchHistory>
						{searchHistory.map((item, index) => (
							<S.SearchHistoryItem key={index} onClick={() => handleSearchHistoryClick(item)}>
								<img src={ClockIcon} alt="Clock Icon" />
								<span>{item}</span>
							</S.SearchHistoryItem>
						))}
					</S.SearchHistory>
				)}


				<S.MyIconWrapper>
					<img src={MyIcon} alt="My Icon" />
				</S.MyIconWrapper>

				{!isMobile && (
					<S.LogoutButton
						onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}
					>
						{isLoggedIn ? "로그아웃" : "로그인"}
					</S.LogoutButton>
				)}

				{isModalVisible && (
					<LogoutModal
						onConfirm={handleLogoutConfirm}
						onCancel={handleLogoutCancel}
					/>
				)}
			</S.RightSection>
		</S.Container>
	);
};

export default Header;
