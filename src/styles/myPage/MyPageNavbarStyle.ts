import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 47px;
  background: var(--Main1);
  transition: all 0.3s ease;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 77px;
  width: 478px;
  magin: 20.5px 481px;
  color: var(--Secondary2);
  font: var(--headingMedium);
  justify-content: center;
  transition: all 0.3s ease;
  white-space: nowrap;

  ${isMobile} {
    width: 357px;
    font: var(--boxTitle);
    gap: 35px;
  }
`;

export const Edit = styled.p`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: var(--primary1);
  }
`;

export const MyPost = styled.p`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: var(--primary1);
  }
`;

export const Leave = styled.p`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: var(--primary1);
  }
`;
