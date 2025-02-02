import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  background-color: var(--Sub1);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
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
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${isMobile} {
    gap: 5px;
    margin-left: 17px;
  }
`;

export const IconWrapper = styled.div`
  img {
    width: 24px;
    height: 24px;
    ${isMobile} {
      width: 18px;
      height: 19px;
    }
  }
`;

export const Title = styled.h1`
  font: var(--headerL);
  color: var(--Sub5);
  margin: 0;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    margin-left: 7px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 29px;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    gap: 10px;
    margin-right: 16.5px;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 258px;
  height: 28px;
  border: 1px solid var(--Main2);
  border-radius: 5px;
  padding: 0px 8px;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    width: 280px;
    margin-left: 5px;
    background-color: var(--InputBack);
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    box-shadow: none;
    font: var(--labelMini);
    background: none;
    padding-left: 4px;
    margin-top: 2px;

    &::placeholder {
      color: var(--Secondary3);
      ${isMobile} {
        width: 299.16px;
        font: var(--labelSmall);
      }
    }
  }
`;

export const SearchIconWrapper = styled.div`
  img {
    width: 16px;
    height: 16px;
    margin-top: 3px;
    margin-left: 8px;
    transition: all 0.3s ease-in-out;
    ${isMobile} {
      width: 18px;
      height: 18px;
      margin-left: 4px;
    }
  }
`;

export const MyIconWrapper = styled.div<{ $hasCustomImage: boolean }>`
  img {
    width: 28px;
    height: 28px;
    margin-top: 3px;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    object-fit: cover;
    border: ${(props) =>
      props.$hasCustomImage ? '1px solid var(--Main2)' : 'none'};

    ${isMobile} {
      width: 23.17px;
      height: 23.17px;
    }
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
  top: 48px;
  margin-left: 0px;
  width: 274px;
  background-color: var(--Sub1);
  border: 1px solid var(--Main2);
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    width: 298px;
    margin-left: 4px;
  }
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
