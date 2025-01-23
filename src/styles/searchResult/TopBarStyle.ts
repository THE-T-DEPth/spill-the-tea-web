import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  width: 100%;
  height: 42px;
  background: var(--Sub2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font: var(--topBar);
  border-top: 0.75px solid var(--Secondary3);
  border-bottom: 0.75px solid var(--Secondary3);

  ${isMobile} {
    font: var(--labelSmall);
  }
`;
