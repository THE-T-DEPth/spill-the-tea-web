import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  border-bottom: 1px solid var(--Secondary3);

  ${isMobile} {
    width: 100%;
    height: 238.96px;
    flex-direction: column;
    border: none;
    justify-content: start;
    margin-top: 34.42px;
    gap: 0;
  }
`;

export const KeywordsList = styled.div`
  display: flex;
  gap: 16px;

  ${isMobile} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 13.51px;
    grid-row-gap: 25px;
    margin-top: 43.3px;
  }
`;
