import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 29px;
`;

export const SearchBar = styled.div`
  position: relative; /* 부모 요소를 기준으로 검색 기록 위치 조정 */
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
    font: var(--searchBold);
    background: none;
    padding-left: 4px;
    margin-top: 2px;

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
  width: 68px;
  height: 28px;
  padding-top: 4.5px;
  font: var(--labelMini);
  color: var(--Black);
  background-color: var(--Sub1);
  border: 1px solid var(--Main2);
  border-radius: 2px;
  transition: all 0.3s ease;
`;

export const SearchHistory = styled.div`
  position: absolute;
  top: 55px; 
  margin-left: 0px; /* SearchBar의 왼쪽과 맞춤 */
  width: 274px; /* SearchBar의 너비와 동일 */
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
  padding: 7px 15px;
 
  font: var(--paragraphSmall);
  color: var(--Secondary2);
  cursor: pointer;

  &:hover {
    background-color: var(--BackBar);
  }

  img {
    width: 14px;
    height: 14px;
  }
`;
