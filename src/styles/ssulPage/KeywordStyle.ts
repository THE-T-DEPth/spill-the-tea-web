import styled from 'styled-components';

export const KeywordContainer = styled.p<{ $isSelected: boolean }>`
  width: 94px;
  height: 35px;
  font: var(--labelMedium);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5.5px auto;

  background: ${({ $isSelected }) =>
    $isSelected ? 'var(--Main3)' : 'var(--Yellow)'};
  border: 0.6px solid
    ${({ $isSelected }) =>
      $isSelected ? 'var(--EarlGrey)' : 'var(--KeywordBorder)'};
  border-radius: 4px;

  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--primary2)' : 'var(--primary1)'};
`;
