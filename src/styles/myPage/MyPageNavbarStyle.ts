import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 47px;
  background: var(--Main1);
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 77px;
  width: 470px;
  magin: 20.5px 481px;
  color: var(--Secondary2);
  font: var(--headingMedium);
`;

export const Edit = styled.p`
  cursor: pointer;
  &:hover {
    color: var(--primary1);
  }
`;

export const MyPost = styled.p`
  cursor: pointer;
  &:hover {
    color: var(--primary1);
  }
`;

export const Leave = styled.p`
  cursor: pointer;
  &:hover {
    color: var(--primary1);
  }
`;
