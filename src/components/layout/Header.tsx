import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Layout/HeaderStyle';
import TeaCupIcon from '../../assets/Icons/TeaCup2.svg';
import SearchIcon from '../../assets/Icons/Search.svg';
import MyIcon from '../../assets/Icons/My.svg';
import MyLogoutIcon from '../../assets/Icons/MyLogout.svg';
import ClockIcon from '../../assets/Icons/Clock.svg';
import LogoutModal from './LogoutModal';
import { TSearchHistoryType } from '../../types/layout/NavBarType';
import useNSMediaQuery from '../../hooks/useNSMediaQuery';
import { useProfile } from '../../contexts/profileContext';

const Header = () => {
  const [searchHistory, setSearchHistory] = useState<TSearchHistoryType>([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isAccessToken = !!localStorage.getItem('accessToken');
  const { isMobile } = useNSMediaQuery();
  const { profileImage, fetchProfile } = useProfile();

  useEffect(() => {
    if (isAccessToken) {
      fetchProfile();
    }
  }, [isAccessToken]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('[data-teacup-icon]')
    ) {
      setIsHistoryVisible(false);
      setIsSearchActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = () => {
    if (searchInput.trim()) {
      setSearchHistory((prev) => [searchInput, ...prev].slice(0, 4));
      navigate(`/search?query=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput('');
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
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsModalVisible(false);
    navigate('/');
  };

  const handleLogoutCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearchIconClick = () => {
    if (isMobile) {
      setIsSearchActive((prev) => !prev);
    }
  };

  const handleTeaCupIconClick = () => {
    const currentPath = window.location.pathname;
    navigate(currentPath);
    window.location.reload();
  };

  return (
    <S.Container>
      <S.LeftSection data-teacup-icon onClick={handleTeaCupIconClick}>
        <S.IconWrapper>
          <img src={TeaCupIcon} alt='Tea Cup Icon' />
        </S.IconWrapper>

        {!isMobile || !isSearchActive ? (
          <S.Title>Spill The Tea : 썰푸는 장소</S.Title>
        ) : null}
      </S.LeftSection>

      <S.RightSection>
        {isMobile && !isSearchActive ? (
          <S.SearchIconWrapper onClick={handleSearchIconClick}>
            <img src={SearchIcon} alt='Search Icon' />
          </S.SearchIconWrapper>
        ) : (
          <S.SearchBar
            ref={searchBarRef}
            onClick={() => setIsHistoryVisible(true)}>
            <input
              type='text'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder='원하는 썰을 제목 검색으로 찾아보세요!'
              onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
            />
            <S.SearchIconWrapper onClick={handleSearchSubmit}>
              <img src={SearchIcon} alt='Search Icon' />
            </S.SearchIconWrapper>
          </S.SearchBar>
        )}

        {isHistoryVisible && searchHistory.length > 0 && (
          <S.SearchHistory>
            {searchHistory.map((item, index) => (
              <S.SearchHistoryItem
                key={index}
                onClick={() => handleSearchHistoryClick(item)}>
                <img src={ClockIcon} alt='Clock Icon' />
                <span>{item}</span>
              </S.SearchHistoryItem>
            ))}
          </S.SearchHistory>
        )}
        <S.MyIconWrapper
          onClick={() => navigate(isAccessToken ? '/mypage' : '/login')}>
          <img
            src={
              isAccessToken
                ? profileImage || MyIcon // 로그인 상태일 때: 프로필 이미지 없으면 기본 아이콘
                : MyLogoutIcon // 로그아웃 상태일 때
            }
            alt={isAccessToken ? 'My Icon' : 'My Logout Icon'}
          />
        </S.MyIconWrapper>

        {!isMobile && (
          <S.LogoutButton
            onClick={
              isAccessToken ? handleLogoutClick : () => navigate('/login')
            }>
            {isAccessToken ? '로그아웃' : '로그인'}
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
