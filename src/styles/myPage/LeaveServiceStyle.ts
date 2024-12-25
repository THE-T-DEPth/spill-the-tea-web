import styled from "styled-components";

export const Container = styled.div`
  width: 556px;
  height: 227px;
  margin: 210px auto 332px;
  position: relative;
`;

export const Title = styled.p`
  font: var(--headingXXL);
`;

export const ButtonContainer = styled.div`
  width: 458px;
  height: 50px;
  display: flex;
  gap: 116px;
  margin: 124px 49px 0;
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
`;
