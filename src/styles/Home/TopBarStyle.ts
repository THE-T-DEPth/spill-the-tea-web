import styled from "styled-components";
import { isMobile } from "../../hooks/Media";

export const Container = styled.div`
  width: 100%;
  height: 42px;
  background-color:var(--Sub2);
  border-top: 0.75px solid var(--G3);
  border-bottom: 0.75px solid var(--G3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font: var(--labelMedium);
  ${isMobile}{
	font: var(--labelSmall);
  }
`;