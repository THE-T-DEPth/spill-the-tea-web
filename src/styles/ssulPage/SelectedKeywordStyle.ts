import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div<{ $isInModal?: boolean }>`
  height: 44px;
  padding: 6px 25px;
  box-sizing: border-box;
  background: var(--EarlGrey);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--EarlGrey);
  border-radius: 3px;
  color: var(--primary2);
  font: var(--selectedKeyword);
  white-space: nowrap;
  transition: all 0.3s ease;

  ${isMobile} {
    font: var(--selcetedKeywordMini);
    justify-content: center;
    align-items: center;
    padding: 4.86076px 20.2532px;
    width: 64px;
    height: 22px;
    border-radius: 1.5px;
    ${({ $isInModal }) =>
      $isInModal &&
      `
    padding: 4px;
    width: 68px;
    height: 24px;
    background:var(--Main3);
    border: 0.6px solid var(--EarlGrey);
    border-radius: 1.5px;
    font: var(--labelSmall);
    `}
  }
`;
