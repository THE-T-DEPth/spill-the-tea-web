import styled from 'styled-components';

export const Container = styled.div`
  margin: 45px auto 56px;
  width: 1046px;
  height: 975px;
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
  margin-top: 27px;
  height: 853px;
`;

export const PaginationContainer = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
`;

export const EmptyMessage = styled.span`
  font: var(--searchEmpty);
  color: var(--Secondary2);
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 414px auto 609px;
`;
