import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  gap: 42px;
  align-items: center;
  margin-top: 24px;
`;

export const Title = styled.p`
  font: var(--searchEmpty);
  margin-left: 128px;
  white-space: nowrap;
`;

export const KeywordsList = styled.div`
  display: flex;
  gap: 34px;
`;
