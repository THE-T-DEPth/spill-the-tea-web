import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  display: flex;
  margin-left: auto;
  margin-top: -7px;
  position: relative;
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

  img {
    margin-left: auto;
  }
`;

export const DropdownContainer = styled.div`
  font: var(--dropDown);
  width: 220px;
  height: 164px;
  background: var(--primary2);
  display: flex;
  flex-direction: column;
  top: calc(100% - 10px);
  position: absolute;
  z-index: 100;

  align-items: flex-start;
  padding: 0px;

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
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
    background: var(--Green);
  }
`;
