import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  width: 220px;
  display: flex;
  margin-left: auto;
  position: relative;
  height: 38px;

  ${isMobile} {
    width: 114px;
    height: 20.47px;
  }
`;

export const Button = styled.button`
  width: 220px;
  height: 38px;
  margin-left: auto;
  background: var(--primary2);
  box-sizing: border-box;
  border: 1px solid var(--Main2);
  border-radius: 4px;
  padding: 7px 13px 7px 20px;
  font: var(--dropDown);
  display: flex;
  align-items: center;
  position: relative;

  img {
    margin-left: auto;
  }

  ${isMobile} {
    height: 20.47px;
    font: var(--sortButtonMini);
    padding: 3.74px 6.74px;
    img {
      width: 6.47px;
    }
  }
`;

export const DropdownContainer = styled.div`
  font: var(--dropDown);
  width: 220px;
  height: 164px;
  background: var(--primary2);
  display: flex;
  flex-direction: column;
  top: calc(100% + 11px);
  position: absolute;
  z-index: 100;

  align-items: flex-start;
  padding: 0px;

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  ${isMobile} {
    width: 114px;
    height: 88.37px;
    font: var(--sortButtonMini);
    top: calc(100% + 5.93px);
  }
`;

export const DropdownMenu = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  align-items: center;
  padding: 9px auto 8px 11px;
  text-align: center;

  img {
    width: 12.41px;
    height: 12px;
    margin: 5.59px 11px 6px 17px;
  }
  cursor: pointer;

  &:hover {
    background: var(--DropdownHover);
  }

  ${isMobile} {
    width: 114px;
    height: 22.09px;

    img {
      width: 6.69px;
      height: 6.47px;
      margin: 3.01px 5.93px 3.23px 8.93px;
    }
  }
`;
