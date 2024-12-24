import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 58px;
  background-color: var(--Sub1);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 210px;
  height: 19px;
  margin-top: 20px;
  margin-left: 26px;
  margin-bottom: 19px;
 
`;

export const IconWrapper = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h1`
  font: var(--headerL);
  color: var(--Sub5);
  margin: 0;
`;

export const Nav = styled.nav`
 font:var(--headingMedium);
  display: flex;
  margin-top: 12px;
  gap: 77px;
  margin-left:230px;
  width: 359px;

  
`;

// NavLink에 스타일 추가
export const NavLinks = styled(NavLink)`
  font-size: 16px;
  color: var(--Secondary2); /* 기본 색상 */
  text-decoration: none;
  padding: 4px 0;
  border-bottom: 2px solid transparent; 
  transition: all 0.3s ease;

  &:hover {
    color:var(--Black); 
  }

  &.active {
    color: var(--Black); /* 활성 상태 색상 */
    border-bottom: 4px solid var(--Main2); /* 활성 상태 보더 */
	padding-bottom: 2px;
	

	
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 29px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 258px; 
  height: 28px; 
  border: 1px solid var(--Main2); 
  border-radius: 5px; 
  padding: 0px 8px; 
 
  input {
    flex: 1;
    border: none;
    outline: none;
	box-shadow: none;
    font:var(--searchBold);
    background: none;
	padding-left: 4px;
	margin-top: 1px;


    &::placeholder {
		color: var(--Secondary3);
		
    }
  }
`;

export const SearchIconWrapper = styled.div`
  img {
    width: 16px;
    height: 16px;
	margin-top: 3px;
    margin-left: 8px; 
  }
`;

export const MyIconWrapper = styled.div`
  img {
    width: 28px;
    height: 28px;
	margin-top: 3px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const LogoutButton = styled.button`
width: 57px;
height: 21px;
padding-top: 4.5px;
  font:var(--labelMini);
  color: var(--Black); 
  background-color: var(--Sub1); 
  border: 1px solid var(--Main2); 
  border-radius: 2px; 
  transition: all 0.3s ease;
`;
export const SearchHistory = styled.div`
  position: absolute;
  top: 136px; 
  width: 275px; 
  background-color: var(--Sub1); 
  border: 1px solid var(--Main2); 
  border-radius: 5px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; 
`;

export const SearchHistoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
  padding-left: 15px; 
  padding-top: 7px;
  padding-bottom: 7px;
  font: var(--paragraphSmall);
  color: var(--Secondary2); 

  &:hover {
    background-color: var(--BackBar); 
  }

  img {
    width: 14px; 
    height: 14px; 
  }
`;


