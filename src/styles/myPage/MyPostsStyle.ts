import styled from 'styled-components';

export const Container = styled.div`
  width: 1046px;
  margin: 0 auto;
`;

export const SortButtonContainer = styled.div`
  margin-top: 42px;
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 853px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 47px;
  grid-auto-flow: row;
  box-sizing: border-box;
  margin-top: 30px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  height: 95px;
  width: 100%;
  justify-content: center;
`;

export const EmptyMessage = styled.span`
  font: var(--searchEmpty);
  color: var(--Black);
`;

export const EmptyContainer = styled.div`
  width: 467px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 350px auto 422px;
`;
