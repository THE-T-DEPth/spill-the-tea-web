import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  width: 556px;
  height: 227px;
  margin: 210px auto 332px;
  position: relative;

  ${isMobile} {
    width: 264px;
  }
`;

export const Title = styled.p`
  font: var(--headingXXL);
  text-align: center;

  ${isMobile} {
    font: var(--labelMedium);
  }
`;

export const ButtonContainer = styled.div`
  width: 458px;
  height: 50px;
  display: flex;
  gap: 116px;
  margin: 124px 49px 0;

  ${isMobile} {
    width: 100%;
    height: 33px;
    gap: 48px;
    margin: 61px 0 0;
  }
`;

export const LogoutButton = styled.button`
  width: 171px;
  height: 100%;
  box-sizing: border-box;
  font: var(--mypageButton);
  color: var(--Secondary1);
  background: var(--primary2);
  border: 1px solid var(--Secondary1);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  ${isMobile} {
    width: 108px;
    height: 33px;
    font: var(--changeButtonMini);
  }
`;

export const DeleteAccountButton = styled.button`
  width: 171px;
  height: 100%;
  box-sizing: border-box;
  font: var(--mypageButton);
  color: var(--Secondary1);
  background: var(--primary2);
  border: 1px solid var(--Secondary1);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  ${isMobile} {
    width: 108px;
    height: 33px;
    font: var(--changeButtonMini);
  }
`;
