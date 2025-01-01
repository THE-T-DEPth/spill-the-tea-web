import styled from 'styled-components';

export const Container = styled.div``;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 652px;
  height: 53px;
  margin: 274px 394px;
`;

export const EmptyMessage = styled.p`
  color: var(--Secondary2);
  font: var(--headingXXL);
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 61px auto 73px;
  width: 1046px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 47px;
  grid-auto-flow: row;
  width: 100%;
  box-sizing: border-box;
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
