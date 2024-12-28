import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 170px;
  height: 24px;
  display: flex;
  margin-top: 32px;
`;

export const PaginationButton = styled.button<{ $disabled: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PaginationButtonLeft = styled.button<{ $disabled: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 6px 33.59px 6px 8px;
  }
`;
export const PaginationButtonRight = styled.button<{ $disabled: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 6px 8px 6px 33.59px;
  }
`;

export const NumberContainer = styled.div<{ $groupLength: number }>`
  width: 72px;
  height: 18px;
  display: flex;
  justify-content: center;
  margin: 3px 0;
  gap: ${(props) => {
    if (props.$groupLength === 2) return "36px";
    if (props.$groupLength === 3) return "25px";
    return "0px";
  }};
`;

export const PageNumber = styled.button<{ $isActive: boolean }>`
  color: ${(props) =>
    props.$isActive ? "var(--primary1)" : "var(--Secondary2)"};
  border: none;
  background: none;
  font: var(--labelSmall);
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  text-underline-offset: 3px;
  padding: 0;
  cursor: pointer;
`;
