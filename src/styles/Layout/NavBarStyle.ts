import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 58px;
  background-color: var(--Main1);
`;

export const Nav = styled.nav`
  font: var(--headingMedium);
  display: flex;
  gap: 77px;
`;

export const NavLinks = styled(NavLink)`
  font-size: 16px;
  color: var(--Secondary2); /* 기본 색상 */
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: var(--Black); /* 호버 시 텍스트 색상 */
  }

  &.active {
    color: var(--Black); /* 활성 상태 텍스트 색상 */
  }
`;
