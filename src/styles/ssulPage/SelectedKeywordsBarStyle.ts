import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div<{ $isInModal?: boolean }>`
  width: 100%;
  height: 44px;
  display: flex;
  gap: 42px;
  align-items: center;
  margin-top: 24px;
  transition: all 0.3s ease;

  ${isMobile} {
    border: none;
    margin: 0;

    ${({ $isInModal }) =>
      $isInModal &&
      `
      flex-direction: column;
      gap: 6.5px;
      align-items: flex-start;
      border-top: 0.7px solid var(--Secondary2);
      border-bottom: 0.7px solid var(--Secondary2);
      height: 79px;
      padding: 14px 16px 17.5px 16px;
      margin: 0;
      box-sizing: border-box;
    `}
  }
`;

export const Title = styled.p`
  font: var(--searchEmpty);
  margin-left: 128px;
  white-space: nowrap;
`;

export const KeywordsList = styled.div<{ $isInModal?: boolean }>`
  display: flex;
  gap: 34px;
  ${isMobile} {
    gap: 9.5px;
    height: 22px;
    ${({ $isInModal }) =>
      $isInModal &&
      `
   gap: 5.5px;
    `};
  }
`;

export const MobileTitle = styled.p<{ $isInModal?: boolean }>`
  font: var(--headingSmall);
  margin: 0;
  display: ${({ $isInModal }) => ($isInModal ? 'block' : 'none')};
`;
