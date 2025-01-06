import styled from 'styled-components';

export const Container = styled.div`
  width: 148px;
  position: relative;
  box-sizing: border-box;
`;

export const DropdownHeader = styled.div`
  height: 61px;
  width: 148px;
  background-color: var(--Sub5);
  cursor: pointer;
  display: flex;
  padding: 19.5px 6px 19.5px 13px;
  box-sizing: border-box;
  font: var(--headingMedium);
  color: var(--primary2);
  img {
    width: 12px;
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
`;

export const DropdownList = styled.div`
  position: absolute;
  width: 148px;
  box-sizing: border-box;
  border-top: none;
  border: 1px solid var(--Secondary1);
  background-color: var(--primary2);
  z-index: 1000;
  font: var(--headingMedium);
  border-top: none;
`;

export const DropdownItem = styled.div`
  height: 61px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--Secondary1);
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--Sub5);
  }
  &:last-child {
    border-bottom: none;
  }
`;
