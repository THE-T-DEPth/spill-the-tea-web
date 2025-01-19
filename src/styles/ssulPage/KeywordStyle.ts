import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const KeywordContainer = styled.div<{ $isSelected: boolean }>`
  width: 94px;
  height: 35px;
  font: var(--labelMedium);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5.5px auto;
  transition: all 0.3s ease;

  background: ${({ $isSelected }) =>
    $isSelected ? 'var(--Main3)' : 'var(--Yellow)'};
  border: 0.6px solid
    ${({ $isSelected }) =>
      $isSelected ? 'var(--EarlGrey)' : 'var(--KeywordBorder)'};
  border-radius: 4px;

  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--primary2)' : 'var(--primary1)'};

  ${isMobile} {
    width: 79.37px;
    height: 29.55px;
    font: var(--keywordMini);
    border-radius: 3.38px;
    border: 0.51px solid
      ${({ $isSelected }) =>
        $isSelected ? 'var(--EarlGrey)' : 'var(--KeywordBorder)'};
  }
`;
